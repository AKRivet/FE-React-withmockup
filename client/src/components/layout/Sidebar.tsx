import { AppShell, Avatar, Box, Divider, Group, NavLink, ScrollArea, Stack, Text } from '@mantine/core'
import {
  IconBrain,
  IconChartBar,
  IconFileAnalytics,
  IconHelp,
  IconLayoutDashboard,
  IconLogout,
  IconSettings,
} from '@tabler/icons-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { logout } from '../../features/auth/authSlice'

const mainNavItems = [
  { label: 'Dashboard', icon: IconLayoutDashboard, path: '/dashboard' },
  { label: 'Analysis', icon: IconChartBar, path: '/analysis' },
  { label: 'Reports', icon: IconFileAnalytics, path: '/reports' },
]

const secondaryNavItems = [
  { label: 'Settings', icon: IconSettings, path: '/settings' },
  { label: 'Help & Support', icon: IconHelp, path: '/help' },
]

export default function Sidebar() {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.auth.user)

  const initials = user?.name
    ? user.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()
    : 'U'

  return (
    <>
      {/* Logo section */}
      <AppShell.Section>
        <Group px="md" py="sm" gap="xs">
          <Box
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #7C3AED, #4C1D95)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <IconBrain size={18} color="white" />
          </Box>
          <Text fw={700} size="lg" c="#111827">
            PolAIra
          </Text>
        </Group>
        <Divider />
      </AppShell.Section>

      {/* Main navigation */}
      <AppShell.Section grow component={ScrollArea}>
        <Stack gap={2} px="xs" py="sm">
          {mainNavItems.map((item) => (
            <NavLink
              key={item.path}
              label={item.label}
              leftSection={<item.icon size={18} stroke={1.5} />}
              active={location.pathname.startsWith(item.path)}
              onClick={() => navigate(item.path)}
              styles={{
                root: {
                  borderRadius: '8px',
                  fontWeight: 500,
                },
              }}
            />
          ))}
        </Stack>
      </AppShell.Section>

      {/* Secondary navigation + user */}
      <AppShell.Section>
        <Divider />
        <Stack gap={2} px="xs" py="sm">
          {secondaryNavItems.map((item) => (
            <NavLink
              key={item.path}
              label={item.label}
              leftSection={<item.icon size={18} stroke={1.5} />}
              active={location.pathname.startsWith(item.path)}
              onClick={() => navigate(item.path)}
              styles={{
                root: {
                  borderRadius: '8px',
                  fontWeight: 500,
                },
              }}
            />
          ))}
        </Stack>
        <Divider />

        {/* User profile */}
        <Group px="md" py="sm" gap="sm" wrap="nowrap">
          <Avatar color="violet" radius="xl" size="sm" style={{ flexShrink: 0 }}>
            {initials}
          </Avatar>
          <Box style={{ flex: 1, minWidth: 0 }}>
            <Text size="sm" fw={600} truncate="end">
              {user?.name ?? 'User'}
            </Text>
            <Text size="xs" c="dimmed" truncate="end">
              {user?.email ?? ''}
            </Text>
          </Box>
          <NavLink
            label=""
            leftSection={<IconLogout size={16} stroke={1.5} />}
            onClick={() => dispatch(logout())}
            style={{ width: 'auto', padding: '6px', borderRadius: '8px', flexShrink: 0 }}
            title="Sign out"
          />
        </Group>
      </AppShell.Section>
    </>
  )
}

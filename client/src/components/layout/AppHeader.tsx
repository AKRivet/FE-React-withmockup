import { ActionIcon, Avatar, Burger, Group, Text } from '@mantine/core'
import { IconBell, IconSearch } from '@tabler/icons-react'
import { useAppSelector } from '../../app/hooks'

interface AppHeaderProps {
  mobileNavOpened: boolean
  onMobileNavToggle: () => void
}

export default function AppHeader({ mobileNavOpened, onMobileNavToggle }: AppHeaderProps) {
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
    <Group h="100%" px="md" justify="space-between">
      <Group gap="sm">
        <Burger
          opened={mobileNavOpened}
          onClick={onMobileNavToggle}
          hiddenFrom="sm"
          size="sm"
        />
        <Text fw={600} size="sm" c="dimmed" visibleFrom="sm">
          Welcome back,{' '}
          <Text component="span" fw={700} c="#111827" inherit>
            {user?.name ?? 'User'}
          </Text>
        </Text>
      </Group>

      <Group gap="xs">
        <ActionIcon variant="subtle" color="gray" size="lg" radius="md" aria-label="Search">
          <IconSearch size={18} stroke={1.5} />
        </ActionIcon>
        <ActionIcon
          variant="subtle"
          color="gray"
          size="lg"
          radius="md"
          aria-label="Notifications"
        >
          <IconBell size={18} stroke={1.5} />
        </ActionIcon>
        <Avatar
          color="violet"
          radius="xl"
          size="sm"
          style={{ cursor: 'pointer' }}
        >
          {initials}
        </Avatar>
      </Group>
    </Group>
  )
}

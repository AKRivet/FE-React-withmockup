import { Card, Grid, Group, Skeleton, Stack, Text, Title } from '@mantine/core'
import { useAppSelector } from '../app/hooks'

export default function DashboardPage() {
  const user = useAppSelector((state) => state.auth.user)

  return (
    <Stack gap="xl">
      {/* Page header */}
      <Stack gap="xs">
        <Title order={2} style={{ fontSize: '24px', lineHeight: '32px', fontWeight: 600, color: '#111827' }}>
          Dashboard
        </Title>
        <Text c="dimmed" size="sm">
          Good morning, {user?.name ?? 'User'}. Here&apos;s your overview.
        </Text>
      </Stack>

      {/* Stat cards — placeholder */}
      <Grid gutter="md">
        {['Analyses', 'Reports', 'Insights', 'Alerts'].map((label) => (
          <Grid.Col key={label} span={{ base: 12, xs: 6, lg: 3 }}>
            <Card shadow="sm" padding="lg" radius="xl" withBorder={false} style={{ backgroundColor: '#FFFFFF' }}>
              <Group justify="space-between" mb="xs">
                <Text size="sm" c="dimmed" fw={500}>
                  {label}
                </Text>
                <Skeleton height={20} width={20} radius="sm" />
              </Group>
              <Skeleton height={32} width="50%" radius="sm" mb="xs" />
              <Skeleton height={14} width="70%" radius="sm" />
            </Card>
          </Grid.Col>
        ))}
      </Grid>

      {/* Main content area — placeholder */}
      <Grid gutter="md">
        <Grid.Col span={{ base: 12, lg: 8 }}>
          <Card shadow="sm" padding="lg" radius="xl" withBorder={false} style={{ backgroundColor: '#FFFFFF', minHeight: '320px' }}>
            <Stack gap="md" h="100%">
              <Group justify="space-between">
                <Skeleton height={20} width="30%" radius="sm" />
                <Skeleton height={20} width="15%" radius="sm" />
              </Group>
              <Skeleton height={240} radius="md" />
            </Stack>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, lg: 4 }}>
          <Card shadow="sm" padding="lg" radius="xl" withBorder={false} style={{ backgroundColor: '#FFFFFF', minHeight: '320px' }}>
            <Stack gap="md">
              <Skeleton height={20} width="50%" radius="sm" />
              {[1, 2, 3, 4].map((i) => (
                <Group key={i} gap="sm" wrap="nowrap">
                  <Skeleton height={40} width={40} radius="xl" />
                  <Stack gap={4} style={{ flex: 1 }}>
                    <Skeleton height={14} radius="sm" />
                    <Skeleton height={12} width="60%" radius="sm" />
                  </Stack>
                </Group>
              ))}
            </Stack>
          </Card>
        </Grid.Col>
      </Grid>
    </Stack>
  )
}

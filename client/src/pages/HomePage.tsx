import { Container, Stack, Text, Title } from '@mantine/core'

export default function HomePage() {
  return (
    <Container size="md" mt="xl">
      <Stack gap="md">
        <Title order={2}>Welcome</Title>
        <Text c="dimmed">
          Your application is ready. Start building features in{' '}
          <code>client/src/features/</code>.
        </Text>
      </Stack>
    </Container>
  )
}

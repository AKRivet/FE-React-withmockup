import { Anchor, Button, Divider, Stack, Text, Title } from '@mantine/core'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../app/hooks'
import { login } from '../features/auth/authSlice'

export default function LoginPage() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleDemoLogin = () => {
    dispatch(login({ name: 'Alex Johnson', email: 'alex@polaiia.com', role: 'Policy Analyst' }))
    navigate('/dashboard')
  }

  return (
    <Stack gap="xl">
      <Stack gap="xs">
        <Title order={2} style={{ fontSize: '30px', lineHeight: '38px', fontWeight: 700, color: '#111827' }}>
          Welcome back
        </Title>
        <Text size="md" c="dimmed">
          Sign in to your PolAIra account to continue.
        </Text>
      </Stack>

      {/* Form area — authentication user story will be implemented here */}
      <Stack gap="md">
        <Divider
          label={
            <Text size="xs" c="dimmed">
              Authentication form — coming soon
            </Text>
          }
          labelPosition="center"
        />
        <Button fullWidth size="md" onClick={handleDemoLogin}>
          Enter Application (Demo)
        </Button>
      </Stack>

      <Text size="sm" ta="center" c="dimmed">
        Don&apos;t have an account?{' '}
        <Anchor component={Link} to="/register" fw={500}>
          Create one
        </Anchor>
      </Text>
    </Stack>
  )
}

import { Anchor, Button, Divider, Stack, Text, Title } from '@mantine/core'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../app/hooks'
import { login } from '../features/auth/authSlice'

export default function RegisterPage() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleDemoRegister = () => {
    dispatch(login({ name: 'New User', email: 'new@polaiia.com', role: 'Policy Analyst' }))
    navigate('/dashboard')
  }

  return (
    <Stack gap="xl">
      <Stack gap="xs">
        <Title order={2} style={{ fontSize: '30px', lineHeight: '38px', fontWeight: 700, color: '#111827' }}>
          Create your account
        </Title>
        <Text size="md" c="dimmed">
          Get started with PolAIra today.
        </Text>
      </Stack>

      {/* Form area — registration user story will be implemented here */}
      <Stack gap="md">
        <Divider
          label={
            <Text size="xs" c="dimmed">
              Registration form — coming soon
            </Text>
          }
          labelPosition="center"
        />
        <Button fullWidth size="md" onClick={handleDemoRegister}>
          Create Account (Demo)
        </Button>
      </Stack>

      <Text size="sm" ta="center" c="dimmed">
        Already have an account?{' '}
        <Anchor component={Link} to="/login" fw={500}>
          Sign in
        </Anchor>
      </Text>
    </Stack>
  )
}

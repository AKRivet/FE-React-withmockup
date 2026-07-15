import { Box, Stack, Text, Title } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import { IconBrain } from '@tabler/icons-react'

export default function AuthLayout() {
  return (
    <Box style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Left brand panel */}
      <Box
        visibleFrom="md"
        style={{
          width: '45%',
          flexShrink: 0,
          background: 'linear-gradient(145deg, #7C3AED 0%, #4C1D95 60%, #312E81 100%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '48px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative circles */}
        <Box
          style={{
            position: 'absolute',
            top: '-80px',
            right: '-80px',
            width: '320px',
            height: '320px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.06)',
          }}
        />
        <Box
          style={{
            position: 'absolute',
            bottom: '-120px',
            left: '-60px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.04)',
          }}
        />

        {/* Logo */}
        <Box style={{ position: 'relative', zIndex: 1 }}>
          <Box
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: 'rgba(255,255,255,0.15)',
              borderRadius: '12px',
              padding: '8px 16px',
            }}
          >
            <IconBrain size={24} color="white" />
            <Text c="white" fw={700} size="lg">
              PolAIra
            </Text>
          </Box>
        </Box>

        {/* Hero copy */}
        <Stack gap="lg" style={{ position: 'relative', zIndex: 1 }}>
          <Title order={1} c="white" style={{ fontSize: '36px', lineHeight: '44px', fontWeight: 700 }}>
            Intelligence for
            <br />
            Modern Policy
          </Title>
          <Text c="rgba(255,255,255,0.75)" size="lg" style={{ lineHeight: '28px', maxWidth: '360px' }}>
            AI-powered research, analysis, and communication tools built for policy professionals.
          </Text>
        </Stack>

        {/* Bottom tagline */}
        <Text c="rgba(255,255,255,0.45)" size="sm" style={{ position: 'relative', zIndex: 1 }}>
          © 2026 PolAIra. All rights reserved.
        </Text>
      </Box>

      {/* Right form panel */}
      <Box
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F8FAFC',
          padding: '48px 24px',
          overflowY: 'auto',
        }}
      >
        <Box style={{ width: '100%', maxWidth: '440px' }}>
          {/* Mobile-only logo */}
          <Box
            hiddenFrom="md"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '32px',
            }}
          >
            <Box
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #7C3AED, #4C1D95)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <IconBrain size={18} color="white" />
            </Box>
            <Text fw={700} size="lg" c="#111827">
              PolAIra
            </Text>
          </Box>

          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}

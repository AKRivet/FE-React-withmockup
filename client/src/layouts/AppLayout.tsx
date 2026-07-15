import { AppShell } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Outlet } from 'react-router-dom'
import AppHeader from '../components/layout/AppHeader'
import Sidebar from '../components/layout/Sidebar'

export default function AppLayout() {
  const [mobileNavOpened, { toggle: toggleMobileNav }] = useDisclosure(false)

  return (
    <AppShell
      header={{ height: 72 }}
      navbar={{
        width: 260,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileNavOpened },
      }}
      padding="md"
      styles={{
        header: {
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #E5E7EB',
          boxShadow: '0px 1px 3px rgba(0,0,0,0.08)',
        },
        navbar: {
          backgroundColor: '#FFFFFF',
          borderRight: '1px solid #E5E7EB',
        },
        main: {
          backgroundColor: '#F8FAFC',
        },
      }}
    >
      <AppShell.Header>
        <AppHeader
          mobileNavOpened={mobileNavOpened}
          onMobileNavToggle={toggleMobileNav}
        />
      </AppShell.Header>

      <AppShell.Navbar>
        <Sidebar />
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  )
}

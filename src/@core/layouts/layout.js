// ** React Import
import { useEffect, useRef } from 'react'

// ** Layout Components
import VerticalLayout from './vertical-layout'

const Layout = props => {
  // ** Props
  const { hidden, children, settings, saveSettings } = props

  // ** Ref
  const isCollapsed = useRef(settings.navCollapsed)
  useEffect(() => {
    if (hidden) {
      if (settings.navCollapsed) {
        saveSettings({ ...settings, navCollapsed: false, layout: 'vertical' })
        isCollapsed.current = true
      } else {
        saveSettings({ ...settings, layout: 'vertical' })
      }
    } else {
      if (isCollapsed.current) {
        saveSettings({ ...settings, navCollapsed: true, layout: settings.lastLayout })
        isCollapsed.current = false
      } else {
        saveSettings({ ...settings, layout: settings.lastLayout })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hidden])
  if (settings.layout === 'horizontal') {
  }

  return <VerticalLayout {...props}>{children}</VerticalLayout>
}

export default Layout

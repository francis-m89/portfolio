import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const titles: Record<string, string> = {
  '/': 'Francis Moloney · Senior Software Engineer · Dublin',
  '/about': 'About · Francis Moloney',
  '/experience': 'Experience · Francis Moloney',
  '/education': 'Education · Francis Moloney',
  '/skills': 'Skills · Francis Moloney',
  '/projects': 'Projects · Francis Moloney',
  '/contact': 'Contact · Francis Moloney',
}

export function DocumentTitle() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = titles[pathname] ?? 'Francis Moloney · Senior Software Engineer'
  }, [pathname])

  return null
}

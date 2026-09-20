import { Outlet } from 'react-router-dom'
import { DocumentTitle } from './DocumentTitle'
import { Footer } from './Footer'
import { Nav } from './Nav'
import { SceneBackground } from './SceneBackground'
import { ScrollToTop } from './ScrollToTop'

export function Layout() {
  return (
    <>
      <SceneBackground />
      <DocumentTitle />
      <ScrollToTop />
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

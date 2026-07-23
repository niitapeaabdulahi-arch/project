import { Outlet } from 'react-router-dom'
import { Header, Footer } from '../components'
import { navigationLinks, footerLinks, footerSocialLinks, siteInfo } from '../data'

function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header
        logo={siteInfo.brand}
        links={navigationLinks}
        ctaLabel={siteInfo.ctaLabel}
        ctaTo={siteInfo.ctaTo}
      />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer
        brand={siteInfo.brand}
        description={siteInfo.description}
        columns={footerLinks}
        socialLinks={footerSocialLinks}
        copyright={siteInfo.copyright}
      />
    </div>
  )
}

export default MainLayout

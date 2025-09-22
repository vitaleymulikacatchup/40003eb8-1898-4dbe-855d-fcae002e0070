use client
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import VoidHero from '@/components/sections/layouts/hero/VoidHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'futuristicAndOutOfBox', colorTemplate: 2, textAnimation: 'slide' }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          logoSrc="/images/logo.svg"
          logoAlt="Peak Logo"
          navItems={[
            { name: "Hero", id: "hero" },
            { name: "About", id: "about" },
            { name: "How to Buy", id: "how-to-buy" },
            { name: "Tokenomics", id: "tokenomics" },
            { name: "Footer", id: "footer" },
          ]}
          buttonText="Get Peak"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <VoidHero
          title="Welcome to Peak"
          description="Your gateway to the future of SaaS solutions."
          tagLabel="Futuristic"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
        />
      </div>
      <div id="about" data-section="about">
        <CtaAbout
          title="About Peak"
          descriptions={[
            "Peak is committed to delivering top-notch SaaS solutions.",
            "Our mission is to drive innovation through technology.",
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D
          variant="simple"
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <TextGridTokenomics
          title="Tokenomics Overview"
          description="Understanding the financials behind Peak."
          tokenData={[
            { value: "10M", description: "Total Tokens" },
            { value: "5M", description: "Market Cap" },
            { value: "2M", description: "Liquidity" },
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoSrc="/images/logo.svg"
          logoAlt="Peak Logo"
          logoText="Peak"
          columns={[
            {
              items: [
                { label: "Privacy Policy", onClick: () => {} },
                { label: "Terms of Service", onClick: () => {} },
              ],
            },
            {
              items: [
                { label: "Contact Us", onClick: () => {} },
                { label: "Support", onClick: () => {} },
              ],
            },
            {
              items: [
                { label: "FAQ", onClick: () => {} },
                { label: "Blog", onClick: () => {} },
              ],
            },
          ]}
          copyrightText="© 2023 Peak. All rights reserved."
        />
      </div>
    </SiteThemeProvider>
  );
}

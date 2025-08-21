import Image from "next/image";
import LayoutStyles from "./Layout.module.scss"
import "./global.scss"
import Link from "next/link";
import Button from "./component/Button/component";
export const metadata = {
  title: "ZentraPvP | Feel The Real Competition",
  description: "ZentraPvP is a new Minecraft server built by Iranian developers",
};
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

export default function RootLayout({ children }) {
  

  return (
    <html lang="en" className={LayoutStyles.html} >
      <body className={LayoutStyles.app} >

        <div className={LayoutStyles.headerContainer}>
          <div className={LayoutStyles.header}>
            <div className={LayoutStyles.leftSide}>
              <p>Contact Us</p> {/* Popup biyad */}
              <Link href={`https://discord.gg/MKPTdxvfcf`}>Discord</Link>
              <Link href={`/shop`}>Shop</Link>
            </div>
            <Link href={`/`} className={LayoutStyles.logoContainer}>
              <Image width={100} height={100} alt="ZentraPvP Logo" src={`https://cdn.praxime.me/zentrapvp.png`} />
            </Link>
            <div className={LayoutStyles.rightSide}>
              <p>Play</p>
              <p>Game Mods</p>
              <p>Team</p>
            </div>

            <div className={LayoutStyles.mobileNav}>
              <div className={LayoutStyles.mobileMenu}>
                <p>Contact Us</p> {/* Popup biyad */}
                <Link href={`https://discord.gg/MKPTdxvfcf`}>Discord</Link>
                <Link href={`/shop`}>Shop</Link>
                <p>Play</p>
                <p>Game Mods</p>
                <p>Team</p>
              </div>
              <div className={LayoutStyles.mobileMenuIcon}>
                <Button href={`/connect`} type={"alt"} >Connect</Button>
              </div>
            </div>

          </div>
        </div>
        <div className={LayoutStyles.mainContainer}>
          {children}
          <div className={LayoutStyles.blueGlow} />
          <div className={LayoutStyles.blueGlow} />
          <div className={LayoutStyles.blueGlow} />
          <div className={LayoutStyles.blueGlow} />
          <div className={LayoutStyles.redGlow} />
          <div className={LayoutStyles.redGlow} />
          <div className={LayoutStyles.redGlow} />
          <div className={LayoutStyles.redGlow} />
          <video className={LayoutStyles.backgroundVideo} autoPlay muted loop controls={false} src="https://khlahvgbqpyjfmwrjayp.supabase.co/storage/v1/object/public/cortik/videos/202587-918431513_medium%20(1).mp4" />
          
        </div>

      </body>
    </html>
  );
}

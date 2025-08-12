import LayoutStyles from "./Layout.module.scss"
import "./global.scss"
export const metadata = {
  title: "ZentraPvP | Feel The Real Competition",
  description: "ZentraPvP is a new Minecraft server built by Iranian developers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={LayoutStyles.html} >
      <body className={LayoutStyles.app} >
        {children}
      </body>
    </html>
  );
}

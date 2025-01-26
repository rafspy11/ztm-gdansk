import { Inter } from "next/font/google";
import "./globals.css";

import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
// import { fass } from '@fortawesome/sharp-solid-svg-icons'
// import { fasds } from '@fortawesome/sharp-duotone-solid-svg-icons'
// import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
// import { faHatCowboy } from '@fortawesome/pro-thin-svg-icons'
// import { faHatChef } from '@fortawesome/sharp-solid-svg-icons'
// import { faPlateUtensils } from '@fortawesome/sharp-regular-svg-icons'

library.add(fas)

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ZTM Gdańsk",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

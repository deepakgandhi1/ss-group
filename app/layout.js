import "bootstrap/dist/css/bootstrap.min.css"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@/fonts/stylesheet.css'
import './globals.css'
import './responsive.css'

export const metadata = {
  title: 'SS Group | Real Estate Developer | Luxury Property in Gurugram',
  description: 'Residential apartments in Gurugram, Property in New Gurugram, SS Group, Top Real Estate Developers in Gurugram, Residential properties in Gurugram, Commercial property Gurugram, Luxury apartments in Gurugra, Luxury villa project Gurgaon, ready to move apartments in Gurgaon, best residential property in gurgaon',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <body>
        {children}
        </body>
    </html>
  )
}

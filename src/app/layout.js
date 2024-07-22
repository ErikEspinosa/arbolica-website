import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({ 
  weight: "200",
  subsets: ["latin"] 
});

const title = "Arbólica"
const description = "Muebles mexicanos de diseño"

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://arbolica.mx",
    siteName: "Arbolica.mx",
    images: [
      {
        url: "https://arbolica.mx/share.jpg",
        width: 1200,
        height: 630,
      }
    ],
    locale: "es_MX",
    type: "website",
  }

};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={kanit.className}>{children}</body>
    </html>
  );
}

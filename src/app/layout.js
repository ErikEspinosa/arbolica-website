import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({ 
  weight: "200",
  subsets: ["latin"] 
});

export const metadata = {
  title: "Arbólica",
  description: "Muebles de diseño",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={kanit.className}>{children}</body>
    </html>
  );
}

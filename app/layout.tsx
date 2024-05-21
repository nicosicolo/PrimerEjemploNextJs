//Justamente layout es lo que envuelve nuestras paginas. Envuelve a nuestro page.tsx.
//Layout.tsx envuelve toda nuestra aplicacion
// Layout envuelve a toooda mi aplicacion. A todas las rutas que incluya.

import { montserrat } from './ui/fonts';
import './ui/global.css';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en">
      {/**Children justamente es nuestro page.tsx */}
      <body className={`${montserrat.className} antialiased`}>{children}</body> 
    </html>
  );
}

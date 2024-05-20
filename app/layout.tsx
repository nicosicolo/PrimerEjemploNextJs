//Justamente layout es lo que envuelve nuestras paginas. Envuelve a nuestro page.tsx.
//Layout.tsx envuelve toda nuestra aplicacion

import './ui/global.css';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en">
      {/**Children justamente es nuestro page.tsx */}
      <body>{children}</body> 
    </html>
  );
}

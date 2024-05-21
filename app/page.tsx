import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from './ui/home.module.css'
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        {/* <AcmeLogo /> */}
        {/*Al usar css modules, en el inspector de elementos al classname se le agrega un hash unico para cada elemento html*/}
        <div className={styles.shape}></div>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Bandera marca Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span>
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Next cuenta con lazy load, 
          entonces no va a renderizar las dos imagenes. 
          Solo va trabajar con la que necesite en cada momento */}
          {/* El componente Image no solo carga imagenes menos 
          pesadas que la etiqueta img, 
          sino que ademas trata de darle el formato más óptimo para cada ocasión. */}
          {/* La optimización de la imagen se realiza una vez y queda guardada.
          La cuestión es que si yo tengo que cargar muchas imagenes,
          por ejemplo avatares de usuario, la transformación va a consumir 
          recursos y no es tan aconsejada. Para pocas imagenes estaticas es apropiado usar image. */}
          <Image
            src='/hero-desktop.png'
            width={1000}
            height={760}
            alt='imagen'
            className='hidden md:block'
          />
          <Image
            src='/hero-mobile.png'
            width={569}
            height={620}
            alt='imagen'
            className='block md:hidden'
          />
        </div>
      </div>
    </main>
  );
}

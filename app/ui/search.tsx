'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }: { placeholder: string }) {

  /* Debounce no permite que al estar escribiendo 
  el input se realicen multiples consultas al servidor: 
  cuando el usuario presiona una tecla, se espera unos milisegundos 
  para esperar que se ingrese otro caracter, pasado ese tiempo se dispara la consulta. 
  Al presionar otra tecla se reinicia el temporizador. */

  const searchParams = useSearchParams();
  const pathname = usePathname(); //En este caso el pathname es /dashboard/invoices
  const { replace } = useRouter();
  console.log(searchParams.get('query'));//Le decimos que parametro queremos capturar.
  

  //Con cada input nuevo vamos a querer actualizar los search params de la url.
  const handleSearch = useDebouncedCallback((term:string) => {
    const params = new URLSearchParams(searchParams); 
    if(term) { //Si el usuario esta escribiendo en el input, setea el campo search con el termino.
      params.set('query', term);
    } else { //En cambio, si el input esta vacío, borra el contenido del campo search
      params.delete('query');
    }
    
    replace(`${pathname}?${params.toString()}`);//Actualizo los params manteniendo el path.
  }, 300)


  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        onChange={event => handleSearch(event.target.value)}
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}

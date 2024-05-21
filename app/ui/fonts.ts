//Biblioteca de next que te permite importar cualquier fuente de google fonts.
//Se descarga la fuente desde google fonts, se optimiza y se carga desde tu propio servidor.
//En temas de rendimiento ya no tiene sentido utilizar el cdn de google fonts.
import { Montserrat, Lusitana } from 'next/font/google'
import { set } from 'zod'

export const montserrat = Montserrat({subsets: ['latin']})
export const lusitana = Lusitana({subsets: ['latin'], weight: "400"})
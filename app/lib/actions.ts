'use server'

//Todas las funciones que se exportan de este archivo son de servidor y por lo tanto no se ejecutan ni se envian al cliente
//El archivo actions.ts contiene funciones que se encargan de mutar datos.

import {z} from 'zod';
import { Invoice } from './definitions';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const CreateInvoiceSchema = z.object ({
    id: z.string(),
    customerId: z.string(),
    amount: z.coerce.number(),
    date: z.string(),
    status: z.enum(['pending', 'paid'])
})

const CreateInvoiceFormSchema = CreateInvoiceSchema.omit({
    id: true,
    date: true
})

export async function createInvoices (formData: FormData) {
    const {customerId, amount, status} = CreateInvoiceFormSchema.parse({
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status')
    })

    const amountInCents = amount * 100;

    const [date] = new Date().toISOString().split('T') //Esta funcion me devuelve un array con dos elementos: la fecha y la hora.
    //Si yo coloco como variable const [date] en vez de const [date, time], la funcion solo devuelve el primer elemento del array. 

    console.log({
        customerId,
        amount,
        status,
        date
    });

    await sql`
        INSERT INTO invoices (customer_id, amount, status, date)
        VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `
    
    revalidatePath('/dashboard/invoices') 
    //Estamos diciendo que esta ruta va a tener nuevos datos, entonces tiene que volver a traerselos.
    //Limpiamos la cache.
    redirect('/dashboard/invoices') //Redirecciona al path indicado.
    
}
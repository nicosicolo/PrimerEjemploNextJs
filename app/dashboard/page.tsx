// Los server Component, los componentes que se renderizan en el servidor, pueden ser asincronos.

import { fetchRevenue } from "../lib/data"

export default async function DashboardPage() {
    //Hacer fetching del lado del cliente representa una perdida de tiempo.
    //Es mejor que nuestro servidor haga el fetching de datos, hagas las transformaciones
    //requeridas y luego descargar el html directamente asi se renderiza desde el lado del cliente
    //Entonces, trabaja en el servidor y devolvele al cliente ya todo listo para ser renderizado.
 
    // Ejemplo de como hacer fetching de datos desde un server component
    // const ejemploAPi = await fetch('https://api.example.com')
    // const json = await ejemploApi.json()
    // console.log(json);
    
    const revenue = await fetchRevenue();
    console.log(revenue);
    
    return <p>Esta es la página del Dashboard</p>
}
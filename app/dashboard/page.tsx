// Los server Component, los componentes que se renderizan en el servidor, pueden ser asincronos.

import { fetchRevenue } from "../lib/data"

export default async function DashboardPage() {
    const revenue = await fetchRevenue();
    console.log(revenue);
    
    return <p>Esta es la página del Dashboard</p>
}
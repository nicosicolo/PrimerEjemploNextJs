// Los server Component, los componentes que se renderizan en el servidor, pueden ser asincronos.

import { Suspense } from "react";
import { fetchCardData, fetchLatestInvoices, fetchRevenue } from "../lib/data"
import { Card } from "../ui/dashboard/cards";
import LatestInvoices from "../ui/dashboard/latest-invoices";
import RevenueChart from "../ui/dashboard/revenue-chart";
import { lusitana } from "../ui/fonts";
import { LatestInvoicesSkeleton, RevenueChartSkeleton } from "../ui/skeletons";

export default async function DashboardPage() {
    //Hacer fetching del lado del cliente representa una perdida de tiempo.
    //Es mejor que nuestro servidor haga el fetching de datos, hagas las transformaciones
    //requeridas y luego descargar el html directamente asi se renderiza desde el lado del cliente
    //Entonces, trabaja en el servidor y devolvele al cliente ya todo listo para ser renderizado.
 
    // Ejemplo de como hacer fetching de datos desde un server component
    // const ejemploAPi = await fetch('https://api.example.com')
    // const json = await ejemploApi.json()
    // console.log(json);
    
    //const revenue = await fetchRevenue();
    //Quito fetchRevenue
    const {numberOfCustomers,
        numberOfInvoices,
        totalPaidInvoices,
        totalPendingInvoices
    } = await fetchCardData()
    //El fetching de datos se realiza en el servidor, no llega a la parte del cliente y por eso no aparece en la consola del explorador.
    //Como esta informacion se obtiene directamente en el servidor, se renderiza lo que se necesita y se desecha el fetching de datos.
    
    return (
        <main>
            <h1 className={`${lusitana.className} antialiased`}>
                Dashboard
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Card title="Collected" value={totalPaidInvoices} type="collected" /> 
                <Card title="Pending" value={totalPendingInvoices} type="pending" />
                <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
                <Card
                    title="Total Customers"
                    value={numberOfCustomers}
                    type="customers"
                />
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                {/* Al cargar información de manera asíncrona, mientras estoy esperando que se cargue la info, 
                suspendo al componente y agrego un fallback hasta que la informacion este disponible para ser renderizada. */}
                <Suspense fallback={<RevenueChartSkeleton/>}> {/* Envolvemos renevenueChart en el componente suspense de react para el streaming html. 
                Con suspense esperamos y va a ser asincrono que se cargue la informacion de revenue.*/}
                    <RevenueChart />
                </Suspense>
                <Suspense fallback={<LatestInvoicesSkeleton/>}>
                    <LatestInvoices/>
                </Suspense>
            </div>
        </main>
    )
}
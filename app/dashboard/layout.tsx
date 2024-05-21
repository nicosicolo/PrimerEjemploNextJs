import { LayoutRouter } from "next/dist/server/app-render/entry-base";
import React from "react";
import SideNav from "../ui/dashboard/sidenav";

export default function DashboardLayout(
    {children}: {children: React.ReactNode}) 
{    
    // El contenido que no quiero que se vuelva a renderizar en cada pagina lo coloco en el Layout.
    // En el layout van a estar todos los elementos comunes del mismo grupo de paginas
    // Cada vez que toco un icono del side bar se recarga la pagina: 
    // me doy cuenta viendo como se recarga el favicon

    
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav/>
            </div>
            <div className="flex-grow p6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    )
}
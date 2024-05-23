//El archivo loading.tsx es una convencion en next que sirve para aplicar un loading mientras se espera que se cargue la informacion.

import DashboardSkeleton from "../ui/skeletons";


export default function LoadingDashboard() {
    return <DashboardSkeleton />;
}
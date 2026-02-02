import Sidebar from "@/components/layout/Sidebar";
import { StatCard } from "@/components/dashboard/StatCard";
import { useAuth } from "@/context/AuthContext";
import { Users, DollarSign, Activity, CreditCard } from "lucide-react";

function Dashboard() {
    const { user } = useAuth();

  return (
    <div className="flex min-h-screen bg-gray-100">
        
        {/* SOL TARAFTA SIDEBAR */}
        <Sidebar />

        {/* SAĞ TARAFTA ANA İÇERİK */}
        <main className="flex-1 p-8">
            {/* Üst Başlık */}
            <header className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                    <p className="text-muted-foreground">Hoşgeldin, {user?.username}!</p>
                </div>
            </header>

            {/* İSTATİSTİK KARTLARI (GRID YAPISI) */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <StatCard 
                    title="Toplam Gelir" 
                    value="₺45,231.89" 
                    description="+20.1% geçen aydan beri"
                    icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
                />
                <StatCard 
                    title="Abonelikler" 
                    value="+2350" 
                    description="+180.1% geçen aydan beri"
                    icon={<Users className="h-4 w-4 text-muted-foreground" />}
                />
                <StatCard 
                    title="Satışlar" 
                    value="+12,234" 
                    description="+19% geçen aydan beri"
                    icon={<CreditCard className="h-4 w-4 text-muted-foreground" />}
                />
                <StatCard 
                    title="Aktif Durum" 
                    value="+573" 
                    description="+201 geçen saatten beri"
                    icon={<Activity className="h-4 w-4 text-muted-foreground" />}
                />
            </div>

            {/* CHART ALANI (Şimdilik boş kutu) */}
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <div className="col-span-4 bg-white p-6 rounded-xl shadow-sm border h-[400px]">
                    <h3 className="font-semibold mb-4">Genel Bakış (Grafik Gelecek)</h3>
                    <div className="flex items-center justify-center h-full text-gray-400">
                        Grafik Alanı
                    </div>
                </div>
                <div className="col-span-3 bg-white p-6 rounded-xl shadow-sm border h-[400px]">
                    <h3 className="font-semibold mb-4">Son Satışlar</h3>
                    <div className="flex items-center justify-center h-full text-gray-400">
                        Liste Alanı
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Dashboard
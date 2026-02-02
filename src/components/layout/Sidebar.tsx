import { LayoutDashboard, Settings, LogOut, User } from "lucide-react"; // İkonlar için (Lucide React varsayılan gelir)
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Sidebar() {
  const { logout } = useAuth();

  return (
    <div className="h-screen w-64 bg-zinc-900 text-white flex flex-col border-r border-zinc-800">
      
      {/* Logo Alanı */}
      <div className="p-6">
        <h1 className="text-2xl font-bold tracking-tight">Admin<span className="text-blue-500">Panel</span></h1>
      </div>

      <Separator className="bg-zinc-800" />

      {/* Menü Linkleri */}
      <nav className="flex-1 p-4 space-y-2">
        <Link to="/dashboard">
          <Button variant="ghost" className="w-full justify-start text-zinc-300 hover:text-white hover:bg-zinc-800">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
        </Link>
        
        <Link to="/settings">
          <Button variant="ghost" className="w-full justify-start text-zinc-300 hover:text-white hover:bg-zinc-800">
            <Settings className="mr-2 h-4 w-4" />
            Ayarlar
          </Button>
        </Link>
        
        <Link to="/profile">
          <Button variant="ghost" className="w-full justify-start text-zinc-300 hover:text-white hover:bg-zinc-800">
            <User className="mr-2 h-4 w-4" />
            Profil
          </Button>
        </Link>
      </nav>

      {/* Alt Kısım: Çıkış Yap */}
      <div className="p-4">
        <Button 
            variant="destructive" 
            className="w-full justify-start" 
            onClick={logout}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Çıkış Yap
        </Button>
      </div>
    </div>
  );
}
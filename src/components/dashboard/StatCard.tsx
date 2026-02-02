import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ReactNode } from "react"

interface StatCardProps {
  title: string;       // Kartın başlığı (Örn: Toplam Satış)
  value: string;       // Değer (Örn: ₺120.000)
  icon?: ReactNode;    // İkon (Opsiyonel)
  description?: string;// Alt açıklama (Örn: Geçen aya göre +%5)
}

export function StatCard({ title, value, icon, description }: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {title}
        </CardTitle>
        {/* Eğer ikon varsa göster */}
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  )
}
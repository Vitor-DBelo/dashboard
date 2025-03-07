import { BestSelling } from "@/components/Best-selling";
import { ChartOverview } from "@/components/chart";
import { LastOrders } from "@/components/lastorders";
import { Sales } from "@/components/sales";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Percent, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="sm:ml-14 p-3">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        <Card className="w-full shadow-md hover:shadow-lg transition-shadow" >
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Total vendas
              </CardTitle>
              <DollarSign className="w-5 h-5 text-muted-foreground"/>
            </div>
            <CardDescription>
              <span>Total de vendas em 90 dias</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">R$ 40.000,00</p>
          </CardContent>
        </Card>

        <Card className="w-full shadow-md hover:shadow-lg transition-shadow" >
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Novos clientes
              </CardTitle>
              <Users className="w-5 h-5 text-muted-foreground"/>
            </div>
            <CardDescription>
              <span>Novos clientes em 30 dias</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">5320</p>
          </CardContent>
        </Card>

        
        <Card className="w-full shadow-md hover:shadow-lg transition-shadow" >
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Novos Pedidos
              </CardTitle>
              <Percent className="w-5 h-5 text-muted-foreground"/>
            </div>
            <CardDescription>
              <span>Total de pedidos de Hoje</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">3315</p>
          </CardContent>
        </Card>

        <Card className="w-full shadow-md hover:shadow-lg transition-shadow" >
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Pedidos em andamento
              </CardTitle>
              <Percent className="w-5 h-5 text-muted-foreground"/>
            </div>
            <CardDescription>
              <span>Pedidos ainda não entregues</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">127</p>
          </CardContent>
        </Card>
      </section>
      <section className="mt-4 flex flex-col md:flex-row gap-4">
        <ChartOverview />
        <Sales />
      </section>


      <section className="mt-4 flex flex-col md:flex-row gap-4">
        <LastOrders/>
        <BestSelling/>
      </section>
    </main>
  );
}

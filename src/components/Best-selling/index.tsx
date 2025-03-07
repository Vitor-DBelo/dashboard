import { LucideBadgeDollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function BestSelling() {
  return (
    <Card className="flex-1 hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-gray-800">
            Produtos Mais Vendidos
          </CardTitle>
          <LucideBadgeDollarSign className="ml-auto w-4 h-4" />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <article className="flex items-center gap-4 p-2 border-2 border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-300">
          <div className="flex flex-col select-none">
            <div className="flex flex-row gap-1 text-base text-gray-800 font-semibold">
              <p>Produto: </p><span>Smartphone X100</span>
            </div>
            <div className="flex flex-row gap-1 text-gray-500">
              <p>Valor: </p><span>R$ 2.199,00</span>
            </div>
          </div>
          <div className="flex flex-col ml-auto text-right">
            <p className="text-gray-800 font-semibold">Vendas: 540</p>
          </div>
        </article>

        <article className="flex items-center gap-4 p-2 border-2 border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-300">
          <div className="flex flex-col select-none">
            <div className="flex flex-row gap-1 text-base text-gray-800 font-semibold">
              <p>Produto: </p><span>Fone de Ouvido Pro</span>
            </div>
            <div className="flex flex-row gap-1 text-gray-500">
              <p>Valor: </p><span>R$ 899,00</span>
            </div>
          </div>
          <div className="flex flex-col ml-auto text-right">
            <p className="text-gray-800 font-semibold">Vendas: 320</p>
          </div>
        </article>

        <article className="flex items-center gap-4 p-2 border-2 border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-300">
          <div className="flex flex-col select-none">
            <div className="flex flex-row gap-1 text-base text-gray-800 font-semibold">
              <p>Produto: </p><span>Laptop Gaming RX</span>
            </div>
            <div className="flex flex-row gap-1 text-gray-500">
              <p>Valor: </p><span>R$ 5.499,00</span>
            </div>
          </div>
          <div className="flex flex-col ml-auto text-right">
            <p className="text-gray-800 font-semibold">Vendas: 210</p>
          </div>
        </article>
      </CardContent>
    </Card>
  );
}

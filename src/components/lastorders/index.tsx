import { ShoppingCartIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function LastOrders(){
    return (
        <Card className="w-full md:w-1/2 md:max-w-[700px] hover:shadow-lg transition-shadow">
           <CardHeader>
                <div className="flex items-center justify-center ">
                    <CardTitle className="text-lg sm:text-xl text-gray-800">
                        Últimas vendas
                    </CardTitle>
                    <ShoppingCartIcon className="ml-auto w-4 h-4"/>
                </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
                <article className="flex items-center gap-4 p-2 border-2 border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                    <div className="flex flex-col select-none">
                        <div className="flex flex-row gap-1 text-base text-gray-800 font-semibold">
                            <p>Pedido: </p><span>#1023</span>
                        </div>
                        <div className="flex flex-row gap-1 text-gray-500">
                            <p>Cliente: </p><span>Lucas Almeida</span>
                        </div>
                    </div>
                    <div className="flex flex-col ml-auto text-right ">
                        <p>R$ 2044.00</p>
                        <p className="text-green-700 ">Em processamento</p>
                    </div>
                </article>
                <article className="flex items-center gap-2 p-2 border-2 border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                    <div className="flex flex-col select-none" >
                        <div className="flex flex-row gap-1  text-base text-gray-800 font-semibold">
                            <p>Pedido: </p><span>#2010</span>
                        </div>
                        <div className="flex flex-row gap-1 text-gray-500">
                            <p>Cliente: </p><span>Mariana Costa</span>
                        </div>
                    </div>
                    <div className="flex flex-col ml-auto text-right ">
                        <p>R$ 2044.00</p>
                        <p className="text-green-700 ">Em processamento</p>
                    </div>
                </article>
                <article className="flex items-center gap-2 p-2 border-2 border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                    <div className="flex flex-col select-none">
                        <div className="flex flex-row gap-1  text-base text-gray-800 font-semibold">
                            <p>Pedido: </p><span>#3005</span>
                        </div>
                        <div className="flex flex-row gap-1 text-gray-500">
                            <p>Cliente: </p><span>Gabriel Souza</span>
                        </div>
                    </div>
                    <div className="flex flex-col ml-auto text-right ">
                        <p>R$ 2044.00</p>
                        <p className="text-green-700 ">Aprovado</p>
                    </div>
                </article>
            </CardContent>
        </Card>
    )
}
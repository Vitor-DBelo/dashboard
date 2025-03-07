import { CircleDollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Use o Avatar do shadcn/ui

export function Sales() {
    return (
        <Card className="flex-1 hover:shadow-lg transition-shadow">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle className="text-lg sm:text-xl text-gray-800">
                        Sales
                    </CardTitle>
                    <CircleDollarSign className="w-5 h-5 text-gray-600"/>
                </div>
                <CardDescription>
                    Novos clientes
                </CardDescription>
            </CardHeader>
            <CardContent>
                <article className="flex items-center gap-4 border-b py-2 hover:bg-gray-100 transition-colors duration-300">
                    <Avatar className="w-12 h-12 sm:w-10 sm:h-10 border border-gray-300 rounded-full">
                        <AvatarImage 
                            src="https://imgs.search.brave.com/rwbkIw4__6r-clYYLLe7fYhE_6Jouo30jGCHdcOlkAU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/cHVycGxlLXJpY2st/cHJvZmlsZS1waWN0/dXJlLXYwLWt5djJz/bjQ2d2FnZDEuanBn/P3dpZHRoPTY0MCZj/cm9wPXNtYXJ0JmF1/dG89d2VicCZzPWE2/N2RlN2ZmM2I3YWJl/MWVjZDhlYWE0ZjBh/MDE2MmE5M2U0M2Q4/MDY"
                            alt="Rick Sanchez"
                            className="rounded-full object-cover"
                        />
                        <AvatarFallback className="bg-gray-200 text-gray-700">R</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-1 select-none">
                        <p className="text-base text-gray-700 font-semibold">Rick Sanchez</p> 
                        <p className=" text-gray-500" >42 vendas</p>
                    </div>
                </article>

                <article className="flex items-center gap-4 border-b py-2 hover:bg-gray-100 transition-colors duration-300">
                    <Avatar className="w-12 h-12 sm:w-10 sm:h-10 border border-gray-300 rounded-full">
                        <AvatarImage 
                            src="https://i.pinimg.com/736x/10/bc/bd/10bcbdc51fdacda178fbf70267e19251.jpg"
                            alt="Gato Sorridente"
                            className="rounded-full object-cover"
                        />
                        <AvatarFallback className="bg-gray-200 text-gray-700">G</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-1 select-none">
                        <p className="text-base text-gray-700 font-semibold">Mr. Whiskers</p> 
                        <p className=" text-gray-500" >17 vendas</p>
                    </div>
                </article>

                <article className="flex items-center gap-4 py-2 hover:bg-gray-100 transition-colors duration-300">
                    <Avatar className="w-12 h-12 sm:w-10 sm:h-10 border border-gray-300 rounded-full">
                        <AvatarImage 
                            src="https://i.pinimg.com/736x/44/e3/6d/44e36da9eb3789bb300bda0fd532b429.jpg"
                            alt="Pinguim Empresário"
                            className="rounded-full object-cover"
                        />
                        <AvatarFallback className="bg-gray-200 text-gray-700">P</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-1 select-none">
                        <p className="text-base text-gray-700 font-semibold">Pengu CEO</p> 
                        <p className=" text-gray-500">88 vendas</p>
                    </div>
                </article>
            </CardContent>
        </Card>
    );
}

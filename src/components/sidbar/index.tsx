import { Box, DollarSign, Home, LogOut, Menu, Package, ShoppingBag, User, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"
import { 
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetTitle 
} from "../ui/sheet"

import { TooltipProvider,Tooltip,TooltipTrigger,TooltipContent} from "@radix-ui/react-tooltip"


export function Sidbar(){
    return(
       <div className="flex w-full flex-col bg-muted/40">
            <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-background flex-col sm:flex">
              <nav className="flex flex-col items-center gap-4 px-2 py-5">
                <TooltipProvider>
        
                  <Link
                    href="#"
                    className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary text-primary-foreground rounded-full"
                  >
                    <Package className="h-4 w-4" />
                    <span className="sr-only">Dashboard Avatar</span>
                  </Link>
                
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href="#"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-black"
                      >
                        <Home className="h-5 w-5" />
                        <span className="sr-only">Home / Início</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="ml-1.5 p-1 w-auto h-auto bg-white border-y-indigo-50 rounded shadow">
                      Home
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href="#"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-black"
                      >
                        <Users className="h-5 w-5" />
                        <span className="sr-only">Clientes</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="ml-1.5 p-1 w-auto h-auto bg-white border-y-indigo-50 rounded shadow">
                        Clientes
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href="#"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-black"
                      >
                        <DollarSign className="h-5 w-5" />
                        <span className="sr-only">Saldo</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="ml-1.5 p-1 w-auto h-auto bg-white border-y-indigo-50 rounded shadow">
                        Saldo
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href="#"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-black"
                      >
                        <Box className="h-5 w-5" />
                        <span className="sr-only">Box/Produtos</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="ml-1.5 p-1 w-auto h-auto bg-white border-y-indigo-50 rounded shadow">
                        Produtos
                    </TooltipContent>
                  </Tooltip>
              
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href="#"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-black"
                      >
                        <ShoppingBag className="h-5 w-5" />
                        <span className="sr-only">ShoppingBag / Pedidos</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="ml-1.5 p-1 w-auto h-auto bg-white border-y-indigo-50 rounded shadow">
                      Pedidos
                    </TooltipContent>
                  </Tooltip>

                </TooltipProvider>
              </nav>
              <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-5">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Link href={"#"}
                                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-black"
                                >
                                    <LogOut className="h-5 w-5 "/>
                                    <span className="sr-only">Sair</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right" className="ml-1.5 p-1 w-auto h-auto bg-white border-y-indigo-50 rounded shadow">
                                Sair
                            </TooltipContent>                     
                        </Tooltip>
                    </TooltipProvider>
              </nav>
            </aside>

            <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <header className="sticky top-0 z-30 flex h-14 items-center px-4 border-b gap-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-4">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button size="icon" variant="outline" className="sm:hidden">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Abrir / fechar</span>
                      </Button>
                    </SheetTrigger>
                    <SheetContent side='left' className="sm:max-w-x">
                      <SheetTitle>
                        <Link href={'#'} className="w-auto h-auto">
                          <Package className="h-10 w-10 m-3 transition-all" />
                        </Link>
                        <span className="sr-only">Logo</span>
                      </SheetTitle>
                      <nav className="flex flex-col gap-4 px-4">
                        <Link href={'#'} className="flex items-center gap-3 w-auto h-auto">
                          <Home className="h-8 w-8 transition-all" />
                          <span className="text-lg font-medium">Home</span>
                        </Link>
                        <Link href={'#'} className="flex items-center gap-3 w-auto h-auto">
                          <Users className="h-8 w-8 transition-all" />
                          <span className="text-lg font-medium">Clientes</span>
                        </Link>
                        <Link href={'#'} className="flex items-center gap-3 w-auto h-auto">
                          <DollarSign className="h-8 w-8 transition-all" />
                          <span className="text-lg font-medium">Saldo</span>
                        </Link>
                        <Link href={'#'} className="flex items-center gap-3 w-auto h-auto">
                          <Box className="h-8 w-8 transition-all" />
                          <span className="text-lg font-medium">Produtos</span>
                        </Link>
                        <Link href={'#'} className="flex items-center gap-3 w-auto h-auto">
                          <ShoppingBag className="h-8 w-8 transition-all" />
                          <span className="text-lg font-medium">Pedidos</span>
                        </Link>
                      </nav>
                    </SheetContent>
                  </Sheet>
                  <h2>Menu</h2>
                </header> 
            </div>
       </div>
    )
}
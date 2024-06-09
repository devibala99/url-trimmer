import { Link, useNavigate } from "react-router-dom";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


import { Button } from "./ui/button";
import { LinkIcon, LogOut } from "lucide-react";
const Header = () => {

    const navigate = useNavigate();
    const user = false;

    return (
        <>
            <nav className="py-4 flex justify-between items-center">
                <Link to="/" >
                    <img src="/logo.png" className="h-16" alt="Trimrr Logo" />
                </Link>

                <div className="flex gap-4">
                    {
                        !user ?
                            <Button onClick={() => navigate("/auth")}>Login</Button>
                            :
                            (
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="w-10 rounded-full overflow-hidden">
                                        <Avatar>
                                            <AvatarImage src="https://github.com/shadcn.png" />
                                            <AvatarFallback>DB</AvatarFallback>
                                        </Avatar>
                                    </DropdownMenuTrigger>

                                    <DropdownMenuContent>
                                        <DropdownMenuLabel>Devi Bala</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>
                                            <LinkIcon className="mr-2 h-4 w-4" />
                                            <span>My Links</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="text-red-400">
                                            <LogOut className="mr-2 h-4 w-4" />
                                            <span>Logout</span>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>

                            )
                    }
                </div>

            </nav>
        </>
    )
}

export default Header

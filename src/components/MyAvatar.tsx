import {
    Avatar,
    Button,
    Menu,
    MenuHandler,
    MenuItem,
    MenuList,
    Typography,
} from "@material-tailwind/react";

import {
    PowerIcon
} from "@heroicons/react/24/solid";
import { createElement, useState } from "react";
import handleToken from "../utils/token";
import { useNavigate } from "react-router-dom";

interface IMyAvatar {
    name: string | undefined;
}

function MyAvatar({ name }: IMyAvatar) {

    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
                <Button
                    variant="text"
                    className="flex items-center p-0"
                >
                    <div className="flex items-center gap-1 flex-col">
                        <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="lg" />
                        <div className="text-white">
                            <Typography className="text-xl" variant="h4">{name ?? '...'}</Typography>
                        </div>
                    </div>
                </Button>
            </MenuHandler>
            <MenuList className="p-1">
                <MenuItem
                    onClick={() => { closeMenu(), handleToken.removeToken(), navigate('/') }}
                    className={`flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10`}>
                    {createElement(PowerIcon, {
                        className: `h-4 w-4 ${"text-red-500"}`,
                        strokeWidth: 2,
                    })}
                    <Typography
                        as="span"
                        variant="small"
                        className="font-normal"
                        color={"red"}
                    >
                        Вход
                    </Typography>
                </MenuItem>
            </MenuList>
        </Menu>

    )
}

export default MyAvatar

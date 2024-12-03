import React from "react";
import { Button } from "./ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const MobileNav = () => {
    return <Button
        variant='outline'
        size='icon'
    >
        <HamburgerMenuIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    </Button>
};

export default MobileNav;

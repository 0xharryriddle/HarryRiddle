import React from "react";
import Link from "next/link";

// next hooks
import { usePathname } from "next/navigation";

// framer motion
import { motion } from "framer-motion";

const links = [
    { path: "/", name: "home" },
    { path: "/projects", name: "projects" },
    { path: "/posts", name: "posts" },
    { path: "/contact", name: "contact" },
];

interface NavProps {
    containerStyles?: string,
    linkStyles?: string,
    underlineStyles?: string
}

const getParentPath = (path: string) => {
    const arrayNamePath = path.split("/");
    return `/${arrayNamePath[1]}`;
};

const Nav = ({ containerStyles, linkStyles, underlineStyles }: NavProps) => {
    const path = usePathname();
    const parentPath = getParentPath(path!);
    return (
        <nav className={`${containerStyles}`}>
            {links.map((link, index) => {
                return (
                    <Link
                        href={link.path}
                        key={index}
                        className={`${`capitalize ${linkStyles}`} ${link.path === parentPath
                            ? `font-bold`
                            : "hover:text-blue hover:font-bold"
                            }`}
                    >
                        {link.path === parentPath && (
                            <motion.span
                                initial={{ y: "-100%" }}
                                animate={{ y: 0 }}
                                transition={{ type: "tween" }}
                                layoutId="underline"
                                className={`${underlineStyles}`}
                            />
                        )}
                        {link.name}
                    </Link>
                );
            })}
        </nav >
    );
};

export default Nav;

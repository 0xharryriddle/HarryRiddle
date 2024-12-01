// components
import Socials from "./Socials";

const Footer = () => {
    return (
        <footer className="sticky top-0">
            <Socials
                containerStyles="flex items-center justify-center gap-x-3 mx-auto xl:mx-0"
                iconsStyles="text-foreground text-[22px] rounded-md p-1 transition-all hover:bg-accent"
            />
        </footer>
    );
};

export default Footer;

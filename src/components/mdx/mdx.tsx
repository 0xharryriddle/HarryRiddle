import * as runtime from "react/jsx-runtime"
import Image from "next/image";
import { Callout } from "./callout";
import BlogImage from "../posts/BlogImage";

const useMDXComponent = (code: string) => {
    const fn = new Function(code);
    return fn({ ...runtime }).default;
}

const components = {
    img: (props: any) => <BlogImage {...props} />,
    Callout,
}

interface MdxProps {
    code: string;
}

export function MDXContent({ code }: MdxProps) {
    const Component = useMDXComponent(code);
    return <Component components={components} />
}
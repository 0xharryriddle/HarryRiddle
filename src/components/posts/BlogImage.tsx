import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface BlogImage {
    src: string;
    alt: string;
}

const sizeFormat: any = {
    small: {
        height: "300",
        width: "500",
    },
    medium: {
        height: "600",
        width: "800",
    },
    large: {
        height: "800",
        width: "1024",
    },
}

const alignFormat: any = {
    "center": "items-center",
    "left": "items-start",
    "right": "items-right"
}

const BlogImage = ({ src, alt }: BlogImage) => {
    const options = new URLSearchParams(alt);
    const size = options.get("size");
    const align = options.get("align");
    const altTag = options.get("alt");
    const caption = options.get("caption");
    const sourceTitle = options.get("sourceTitle");
    const sourceURL = options.get("sourceURL");
    return (
        <div className={`flex flex-col justify-center ${alignFormat[align || 'center']}`}>
            <Image src={src} alt={altTag || ""} width={sizeFormat[size || 'small'].width} height={sizeFormat[size || 'small'].height} />
            <span className='font-bold'>{caption}</span>
            {
                sourceURL &&
                sourceTitle &&
                <div>
                    <span className='font-bold'>Source: {` `}</span>
                    <Link href={sourceURL || ""}>{sourceTitle}</Link>
                </div>
            }

        </div>
    )
}

export default BlogImage
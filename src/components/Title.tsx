import React from "react";

interface TitleProps {
    content?: React.ReactNode
}

const Title = ({ content }: TitleProps) => {
    return (
        <div className="flex w-fit items-end border-b pb-2">
            <h2 className="text-4xl font-semibold">{content}</h2>
        </div>
    );
};

export default Title;

import React from "react";

// components
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
    CardContent,
} from "./ui/card";

interface CardItemProps {
    cardsStyle?: string, title?: React.ReactNode, contents?: React.ReactNode, description?: React.ReactNode,
}

const CardItem = ({ cardsStyle, title, contents, description, ...props }: CardItemProps) => {
    return (
        <Card className={cardsStyle} {...props}>
            <CardHeader>
                <CardTitle className="text-xl xl:text-[30px]">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>{contents}</CardContent>
        </Card >
    );
};

export default CardItem;

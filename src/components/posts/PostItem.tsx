import React from "react";

import CardItem from "../CardItem";
import { ArrowRight, Calendar } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface PostItemProps {
    slug: string;
    title: string;
    description?: string;
    date: string;
    index?: number;
    target?: string;
}

const PostItem = ({ slug, title, description, date, index, target }: PostItemProps) => {
    return (
        <a href={slug} key={index} target={target}>
            <CardItem
                cardsStyle="cursor-pointer flex w-full h-full flex-col transition-all duration-300 hover:border-ring hover:scale-95"
                title={title}
                description={
                    description
                        ? description
                        : "No description for this post."
                }
                contents={
                    <div className="flex flex-row items-center justify-between space-x-4 text-sm text-muted-foreground">
                        {/* time */}
                        <div className="flex flex-row items-center space-x-4 text-sm text-muted-foreground">
                            <Calendar height={15} width={15} />
                            <time dateTime={date}>{formatDate(date)}</time>
                        </div>
                        {/* Read more */}
                        <div className="flex flex-row items-center justify-center space-x-2">
                            <span>Read more</span>
                            <ArrowRight height={15} width={15} />
                        </div>
                    </div>
                }
            />
        </a >
    );
};

export default PostItem;

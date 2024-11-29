import React from "react";
import { Post, posts } from "#site/content"
import PostItem from "./PostItem";
import { sortPostsByDate } from "@/lib/utils";

const PostList = () => {
    const sortedPosts = sortPostsByDate(posts.filter((post: Post) => post.published))
    const displayPosts = sortedPosts
    return (
        <div className="grow">
            <div className="flex flex-col gap-6 mt-12 min-h-screen xl:h-[28rem]">
                {displayPosts?.length > 0
                    ? displayPosts.map((post, index) => {
                        return <PostItem
                            date={post.date}
                            slug={post.slug}
                            title={post.title}
                            description={post.description}
                            index={index}
                            key={index}
                        />
                    }) : <p className="text-sm text-muted-foreground">
                        {
                            "I'm gonna write and update more regarding Web3 and Blockchain industry. More coming soon."
                        }
                    </p>}
            </div>
        </div>
    );
};

export default PostList;

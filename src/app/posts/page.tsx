import React from "react";

// components
import Title from "@/components/Title";
import PostList from "@/components/posts/PostList";

const Posts = () => {
    return (
        <main>
            <div className="container mx-auto mt-12">
                <Title content="Posts" />
                <PostList />
            </div>
        </main>
    );
};

export default Posts;

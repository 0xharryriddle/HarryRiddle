import { Post, posts } from '#site/content'
import { MDXContent } from '@/components/mdx/mdx'
import { notFound } from 'next/navigation'
import React from 'react'

import "@/styles/mdx.css";

interface PostPageParams {
    params: {
        slug: string[],
    }
}

async function getPostFromParams(params: PostPageParams['params']) {
    const slug = params?.slug?.join("/")
    const post = posts.find((post: Post) => post.slugAsParams === slug)
    return post
}

export async function generateStaticParams(): Promise<PostPageParams["params"][]> {
    return posts.map((post: Post) => ({ slug: post.slugAsParams.split("/") }))
}

async function PostPage({ params }: PostPageParams) {
    const post = await getPostFromParams(params);

    if (!post || !post.published) {
        notFound()
    }
    return (
        <article className='container py-6 prose dark:prose-invert max-w-3xl mx-auto'>
            <h1 className='mb-2'>{post.title}</h1>
            {post.description ? (
                <p className='text-xl mt-0 text-muted-foreground'>{post.description}</p>
            ) : null}
            <hr className='my-4' />
            <MDXContent code={post.body} />
        </article>
    )
}

export default PostPage
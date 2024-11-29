import { ArrowRightCircleIcon } from 'lucide-react'
import React from 'react'

function PostsRecently() {
    return (
        <section className="mt-12">
            <div className="container mx-auto">
                <div className="flex flex-col gap-4 py-8">
                    {/* title */}
                    <div className="flex w-fit items-end">
                        <h2 className="title">Recent Posts</h2>
                    </div>
                    {/* content */}
                    <div className="grid gap-8 md:grid-cols-2">
                    </div>
                    <div className="flex justify-end">
                        <a href="/projects">
                            <div className="group flex items-center gap-px transition-colors hover:text-blue cursor-pointer font-medium">
                                <span>View All</span>
                                <ArrowRightCircleIcon
                                    size={13}
                                    className="ml-1 w-4 transition-transform group-hover:translate-x-1"
                                />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PostsRecently
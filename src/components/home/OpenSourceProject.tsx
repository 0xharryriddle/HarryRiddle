"use client";
import React from "react";

// components
import CardItems from "../CardItem";
import { ArrowRightCircleIcon } from "lucide-react";
import SkeletonCard from "../SkeletonCard";

// hooks
import usePinnedRepositories from "@/hooks/usePinnedRepository";

const OpenSourceProject = () => {
    const data = usePinnedRepositories();
    const formatDate = (inputDate: any) => {
        const date = new Date(inputDate);

        const formattedDate = date.toLocaleDateString("en-UK", { day: "numeric", month: "long", year: "numeric" });

        return `Updated on ${formattedDate}`;
    };

    function hexToRgb(hex: any) {
        // Remove the hash if it exists
        hex = hex.replace(/^#/, "");

        // Parse the hex values
        const bigint = parseInt(hex, 16);

        // Extract the RGB components
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;

        // Return the RGB color
        return { r, g, b };
    }

    const styleCircles = (rgbColor: any) => {
        return {
            fill: `rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`,
            color: `rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`,
        };
    };

    const getProjectsCard = (data: any) => {
        return data
            ? data.map((item: any, index: number) => {
                const style = item.primaryLanguage
                    ? styleCircles(hexToRgb(item.primaryLanguage.color))
                    : null;
                return (
                    <a href={item.url} key={index} target="_blank">
                        <CardItems
                            cardsStyle="cursor-pointer flex w-full h-full flex-col transition-all duration-300 hover:border-ring"
                            title={item.name}
                            description={
                                item.description
                                    ? item.description
                                    : "This repository have not a description"
                            }
                            contents={
                                <div className="flex flex-row space-x-4 text-sm text-muted-foreground">
                                    {/* languages */}
                                    <div className="flex items-center gap-1">
                                        <div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="mr-1 h-3 w-3"
                                                color={style?.color}
                                                fillOpacity={style?.fill}
                                            >
                                                <circle cx="12" cy="12" r="10"></circle>
                                            </svg>
                                        </div>
                                        {item.primaryLanguage ? item.primaryLanguage.name : null}
                                    </div>
                                    {/* time */}
                                    <div>{formatDate(item.updatedAt)}</div>
                                </div>
                            }
                        />
                    </a>
                );
            })
            : Array.from({ length: 6 }).map((_, index) => {
                return <SkeletonCard key={index} />;
            });
    };
    return (
        <section className="mt-12">
            <div className="container mx-auto">
                <div className="flex flex-col gap-4 py-8">
                    {/* title */}
                    <div className="flex w-fit items-end">
                        <h2 className="title">Open Source Projects</h2>
                    </div>
                    {/* content */}
                    <div className="grid gap-8 md:grid-cols-2">
                        {getProjectsCard(data)}
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
    );
};

export default OpenSourceProject;

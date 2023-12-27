// Passing data to BuilderComponent page through code
/* eslint-disable @next/next/no-async-client-component */
'use client';
import { useEffect, useState } from "react";
import { builder } from "@builder.io/sdk";
import { BuilderComponent } from "@builder.io/react";
import "../../builder-registry";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
    params: {
        page: string[];
    };
}

type MyObject = { val: number; quote: string }[];

// This could be data from DB or API with offset & limit
const sampleData: MyObject = [
    { val: 1, quote: "The only limit to our realization of tomorrow will be our doubts of today." },
    { val: 2, quote: "Success is not final, failure is not fatal: It is the courage to continue that counts." },
    { val: 3, quote: "Your time is limited, don't waste it living someone else's life." },
    { val: 4, quote: "The greatest glory in living lies not in never falling, but in rising every time we fall." },
    { val: 5, quote: "Life is what happens when you're busy making other plans." },
    { val: 6, quote: "Get busy living or get busy dying." },
    { val: 7, quote: "The purpose of our lives is to be happy." },
    { val: 8, quote: "Life is really simple, but we insist on making it complicated." },
    { val: 9, quote: "Life is short, and it's up to you to make it sweet." },
    { val: 10, quote: "In three words I can sum up everything I've learned about life: it goes on." },
];

export default function Page(props: PageProps) {
    const [content, setContent] = useState(null);
    const [contentBar, setContentBar] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await builder
                .get("page", {
                    userAttributes: {
                        urlPath: "/product-view-test-data" + (props?.params?.page?.join("/") || ""),
                    },
                    cachebust: true,
                    cacheSeconds: 10
                })
                .toPromise();

            // Always use respective models for the section/symbol to integrate into the code.
            const resultBar = await builder
                .get("symbol", {
                    query: { "id": "64a6adce90d54439874424d361264d43" },
                    cachebust: true,
                    cacheSeconds: 10
                })
                .toPromise();

            setContentBar(resultBar);
            setContent(result);
        };

        fetchData();
    }, [props.params.page]);

    return (
        <div>
            {content && contentBar && (
                <>
                    <BuilderComponent
                        content={contentBar}
                        model="symbol"
                    />
                    <BuilderComponent
                        content={content}
                        model="page"
                        data={{
                            name: "JON DOE",
                            company: "ABC",
                            description: "Example of passing data to BuilderComponent page through code. This is my own description supplied through my code.",
                            list: [1, 2, 3, 4],
                            obj: sampleData,
                        }}
                    />
                </>
            )}
        </div>
    );
}

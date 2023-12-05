// Passing data to BuilderComponent page through code
/* eslint-disable @next/next/no-async-client-component */
'use client';
import { builder } from "@builder.io/sdk";
import { BuilderComponent, useIsPreviewing } from "@builder.io/react";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
    params: {
        page: string[];
    };
}

export default async function Page(props: PageProps) {
        const content = await builder
        .get("page", {
            userAttributes: {
                urlPath: "/product-view-test-data" + (props?.params?.page?.join("/") || ""),
            },
        })
        .toPromise();

        return (
                <BuilderComponent
                    content={content} 
                    model="page" 
                    data={{
                        "name": "JON DOE", 
                        "company": "ABC", 
                        "description": "Example of passing data to BuilderComponent page through code. This is my own description supplied through my code.",
                        "list": [1,2,3,4],
                        "obj": [{"val": 1}, {"val": 2}, {"val": 2}]
                    }}
                />
        );
};

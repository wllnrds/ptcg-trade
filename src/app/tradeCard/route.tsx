import { TData } from "@/types";
import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import { Screen } from "./screen";
import { unzipData } from "@/lib/utils";

export const revalidate = 0;
export const maxDuration = 60; 

export async function GET(request: NextRequest) {
    const start = process.hrtime();

    console.time("TradeCard");
    console.timeLog("TradeCard", "Start generating image");
    try {
        if (!request.nextUrl.searchParams.has("data")) {
            return new Response("Missing data", { status: 400 });
        }

        const searchParams = request.nextUrl.searchParams;
        const dataQuery = searchParams.get("data");

        const noProxy = searchParams.get("noProxy") === "true";
        const language = searchParams.get("lang") || "en";
        
        // console.timeLog("TradeCard", "Data query", dataQuery);

        const dataString = atob(dataQuery as string);

        // console.timeLog("TradeCard", "Data string decoded");;

        const dataVersion = searchParams.get("version");
        let data : TData | null = null;

        if (dataVersion === "2") {
            data = unzipData(dataString);
            // console.timeLog("TradeCard", "Data unzipped");
        }else{
            data = JSON.parse(dataString) as TData;
            // console.timeLog("TradeCard", "Data parsed");
            console.log(data)
        }

        if (!data) {
            console.timeEnd("TradeCard");
            return new Response("[E1] Invalid data", { status: 400 });
        }
        if (!data.have && !data.want) {
            console.timeEnd("TradeCard");
            return new Response("[E2] Invalid data", { status: 400 });
        }
        if (data.have.length == 0 && data.want.length == 0) {
            console.timeEnd("TradeCard");
            return new Response("[E3] Invalid data", { status: 400 });
        }
        if (data.id.length == 0) {
            console.timeEnd("TradeCard");
            return new Response("[E4] Invalid data", { status: 400 });
        }
        if (data.name.length == 0) {
            console.timeEnd("TradeCard");
            return new Response("[E5] Invalid data", { status: 400 });
        }
        
        console.timeLog("TradeCard", "Start generating image");

        const image = new ImageResponse(<Screen {...data} language={ language || "pt" } noProxy={ noProxy } />, {
            width: 1080,
            height: 1600,
            fonts: [
                {
                    name: "Open Sans",
                    data: await loadGoogleFont("Open+Sans:wght@400"),
                    style: "normal",
                    weight: 400,
                },
                {
                    name: "Open Sans",
                    data: await loadGoogleFont("Open+Sans:wght@700"),
                    style: "normal",
                    weight: 700,
                },
                {
                    name: "Open Sans",
                    data: await loadGoogleFont("Open+Sans:wght@300"),
                    style: "normal",
                    weight: 300,
                },
            ],
        });

        const elapsed = process.hrtime(start);

        const elapsedMs = (elapsed[0] * 1000 + elapsed[1] / 1e6).toFixed(2);

        image.headers.set('Server-Timing', `card_generation_time;dur=${elapsedMs}`);

        console.timeLog("TradeCard", "Final Image generated");
        console.timeEnd("TradeCard");
        return image;
    } catch (error) {
        console.error("Error generating image:", error);
        console.timeEnd("TradeCard");
        return new Response(`Error: ${error}`, { status: 500 });
    }
}

async function loadGoogleFont(font: string) {
    const url = `https://fonts.googleapis.com/css2?family=${font}`;
    const css = await (await fetch(url)).text();
    const resource = css.match(
        /src: url\((.+)\) format\('(opentype|truetype)'\)/
    );

    if (resource) {
        const response = await fetch(resource[1]);
        if (response.status == 200) {
            return await response.arrayBuffer();
        }
    }

    throw new Error("failed to load font data");
}
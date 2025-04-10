import { NextResponse, type NextRequest } from "next/server";
import sharp from "sharp";

const URL_BASE = "https://ptcgphub.com/app/img/colecoes";
const URL_POS = "_pt.webp";

export const revalidate = false;
export const fetchCache = 'force-cache'


export async function GET(request: NextRequest) {
    console.time("CardImage");
    console.timeLog("CardImage", "Start generating image");

    const searchParams = request.nextUrl.searchParams;
    const colecao = searchParams.get("colecao");
    const id = searchParams.get("id");

    const URL = `${URL_BASE}/${colecao}/cartas/${id}${URL_POS}`;

    console.timeLog("CardImage", "Start fetching");
    const image = await fetch(URL, { cache: "force-cache" });
    console.timeLog("CardImage", "Image fetched");

    console.timeLog("CardImage", "Start converting to png");
    const buffer = await image.arrayBuffer();
    const pngBuffer = await sharp(buffer).toFormat("png").toBuffer();
    const blob = new Blob([pngBuffer], { type: "image/png" });
    console.timeLog("CardImage", "Image converted to png");

    const headers = new Headers();
    headers.set("Content-Type", "image/png");
    headers.set("Cache-Control", "public, max-age=31536000, immutable");

    console.timeEnd("CardImage");
    return new NextResponse(blob, {
        status: 200,
        headers: headers,
    });
}

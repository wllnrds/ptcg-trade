import { minifyData } from "@/lib/utils";
import { TData } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export function GET() {
    const data: TData = {
        name: "John Doe",
        icon: "123",
        id: "12345",
        have: [
            { colecao: "0006-FestivalBrilhante", id: "4" },
            { colecao: "0006-FestivalBrilhante", id: "88" },
            { colecao: "0006-FestivalBrilhante", id: "81" },
            { colecao: "0006-FestivalBrilhante", id: "72" },
            { colecao: "0006-FestivalBrilhante", id: "50" },
            { colecao: "0006-FestivalBrilhante", id: "52" },
            { colecao: "0006-FestivalBrilhante", id: "42" },
            { colecao: "0006-FestivalBrilhante", id: "42" },
            { colecao: "0006-FestivalBrilhante", id: "42" },
        ],
        want: [
            { colecao: "0006-FestivalBrilhante", id: "74" },
            { colecao: "0006-FestivalBrilhante", id: "75" },
            { colecao: "0006-FestivalBrilhante", id: "75" },
        ],
    };
    return new Response(btoa(JSON.stringify(data)), {
        status: 200,
    });
}

export async function POST(request: NextRequest) {
    const data = (await request.json()) as TData;
    if (!data) {
        return new Response("No data", { status: 400 });
    }
    const minify = minifyData(data);
    const encodedData = btoa(JSON.stringify(minify));

    return NextResponse.json(
        {
            // minify,
            encodedData,
        },
        { status: 200 }
    );
}

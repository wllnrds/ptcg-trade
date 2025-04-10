import data from "@/db/collection";
import { TData, TMininifyData } from "@/types";

export function unzipData(data: string): TData {
    const parsedData = JSON.parse(data) as TMininifyData;

    const have = parsedData.h.map((card) => ({
        colecao: collectionIdToName(card.c),
        id: card.i,
    }));
    
    const want = parsedData.w.map((card) => ({
        colecao: collectionIdToName(card.c),
        id: card.i,
    }));
    
    return {
        name: parsedData.n,
        icon: parsedData.i,
        id: parsedData.id,
        have: have,
        want: want,
    };
}

export function minifyData(data: TData): TMininifyData {
    const have = data.have.map((card) => ({
        c: collectionNameToId(card.colecao),
        i: card.id,
    }));
    
    const want = data.want.map((card) => ({
        c: collectionNameToId(card.colecao),
        i: card.id,
    }));
    
    return {
        n: data.name,
        i: data.icon,
        id: data.id,
        h: have,
        w: want,
    };
}

function collectionNameToId(name: string): string {
    const collection = data.find((item) => item.colecao === name);
    return collection ? collection.id.toString() : "0";
}

export function collectionIdToName(id: string): string {
    const collection = data.find((item) => item.id.toString() === id);
    return collection ? collection.colecao : "0";
}
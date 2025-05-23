export type TCard = {
    colecao: string;
    id: string;
};

export type TData = {
    name: string;
    icon: string;
    id: string;
    have: TCard[];
    want: TCard[];
    backgroundId?: string;
    language?: string | "pt" | "en" | "es";
    noProxy?: boolean;
};

export type TMininifyData = {
    n: string;
    i: string;
    id: string;
    h: TMinifyCard[];
    w: TMinifyCard[];
    bg?: string;
};

export type TMinifyCard = {
    c: string;
    i: string;
};
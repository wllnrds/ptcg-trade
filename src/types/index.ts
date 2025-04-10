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
};

export type TMininifyData = {
    n: string;
    i: string;
    id: string;
    h: TMinifyCard[];
    w: TMinifyCard[];
};

export type TMinifyCard = {
    c: string;
    i: string;
};
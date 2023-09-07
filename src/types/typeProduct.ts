export type TypeProduct = {
    code: number;
    name: string;
    cost_price: number;
    sales_price: number;
}

export type TypeProducts = TypeProduct[];

export interface TypeProductValidade extends TypeProduct {
    new_price: number;
    isPack: boolean;
    typeProduct: string;
    isError: boolean;
    returnError?: string;
}
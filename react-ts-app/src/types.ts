export interface Product {
    brand:string;
    category:string
    description:string
    discountPercentage:number
    id:number;
    images:Array<string>
    price:number;
    ratimg:number;
    thumbnail:string
    title:string;
}
export interface GET200_Products{
    products:Product[]
}
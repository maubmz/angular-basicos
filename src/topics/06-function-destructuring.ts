
export interface Product {
    description: string;
    price: number;

}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

// function taxCalculation(options: TaxCalculationOptions): number[] {
// function taxCalculation({tax, products}: TaxCalculationOptions): number[] {
export function taxCalculation(options: TaxCalculationOptions): [number, number ] {
    const {tax, products } = options;//desustructuracion

    let total = 0;
    products.forEach( ({ price }) => {//desustructacion de price de product
        total += price;
    });
    return[ total, total * tax ];
}

const shoppingCart = [phone, tablet];

const [ total, tax ] = taxCalculation({//desustructuracion con tax, total
    products: shoppingCart,
    tax: 0.15
});

console.log('Total', total);
console.log('Total', tax);


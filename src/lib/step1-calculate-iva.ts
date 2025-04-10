'use server';

export async function calculoIva(precio: number): Promise<number> {
    // console.log(precio);
    const iva: number = await precio * 0.16;
    // console.log(iva);
    return parseFloat(iva.toFixed(2));
}
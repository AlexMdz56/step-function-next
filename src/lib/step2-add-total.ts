'use server';

export async function calculoTotal(valor: number, iva: number): Promise<number> {
    // console.log(valor, iva);
    const total: number = await valor + iva;
    // console.log(total);
    return parseFloat(total.toFixed(2));
}
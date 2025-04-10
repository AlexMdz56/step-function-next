import { NextResponse } from "next/server";
import { calculoIva } from "@/src/lib/step1-calculate-iva";
import { calculoTotal } from "@/src/lib/step2-add-total";

export async function POST(req: Request) {
    try {
        const { subtotal } = await req.json();
        
        const iva = await calculoIva(subtotal);
        const total = await calculoTotal(subtotal, iva);

        return NextResponse.json({
            subtotal: subtotal,
            iva,
            total
        });
    } catch (err) {
        console.error('Error al procesar la solicitud', err);
        return NextResponse.json(
            { error: 'Error al procesar la solicitud'},
            { status: 500 }
        );
    }
}
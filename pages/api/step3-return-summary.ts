import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse){
    if(req.method !== 'POST') res.status(405).json({ error: 'Method not allowed' });

    const { nombre_cliente, subtotal, iva, total } = req.body;

    const msg = `El registro del cliente ${nombre_cliente} con el subtotal de $${subtotal} se anexó el IVA ($${iva}) y el total ($${total})`;

    return res.status(200).json({
        nombre_cliente,
        subtotal,
        iva,
        total,
        msg
    });

}
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse){
    if(req.method !== 'POST') res.status(405).json({ error: 'Method not allowed' });

    const { nombre_cliente, subtotal, iva } = req.body;

    if(typeof subtotal !== 'number' || typeof iva !== 'number') res.status(400).json({ error: 'Invalid subtotal or IVA '});

    const total = subtotal + iva;

    return res.status(200).json({
        nombre_cliente,
        subtotal,
        iva,
        total
    });
}
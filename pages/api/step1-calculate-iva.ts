import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse){
    if(req.method !== 'POST') res.status(405).json({ error: 'Method not allowed' });

    const { nombre_cliente, subtotal } = req.body;

    if(typeof subtotal !== 'number') res.status(400).json({ error: 'Subtotal must be number'});

    const iva = subtotal * 0.16;

    return res.status(200).json({
        nombre_cliente,
        subtotal,
        iva,
        total: 0
    });
}
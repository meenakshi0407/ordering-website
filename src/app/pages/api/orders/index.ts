import type { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { item_name, quantity, buyer_name, contact, address } = req.body;
    const result = await pool.query(
      'INSERT INTO orders (item_name, quantity, buyer_name, contact, address) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [item_name, quantity, buyer_name, contact, address]
    );
    res.status(201).json(result.rows[0]);
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

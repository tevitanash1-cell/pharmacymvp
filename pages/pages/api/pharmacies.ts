import type { NextApiRequest, NextApiResponse } from 'next';
import pharmacies from '../../../data/pharmacies.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(pharmacies);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

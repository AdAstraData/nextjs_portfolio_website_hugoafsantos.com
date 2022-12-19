// connecting to remote postgresql

import type { NextApiRequest, NextApiResponse } from "next";
import pool from "../../postgresql_server";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data =  await pool.query('SELECT * FROM league_euw1_featured_match LIMIT 1;');
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
};

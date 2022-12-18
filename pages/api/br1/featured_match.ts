// connecting to remote postgresql

import type { NextApiRequest, NextApiResponse } from "next";
import pool from "../../postgresql_server";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data =  await pool.query('SELECT * FROM league_euw1_timeline_minions_killed;');
};


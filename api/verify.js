import { createToken } from '../utils/token.js';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { heldTime } = req.body;
    if (heldTime >= 2.7 && heldTime <= 3.3) {
      const token = createToken();  // Valid for 5 min
      res.status(200).json({ success: true, token });
    } else {
      res.status(400).json({ success: false, msg: "Failed verification" });
    }
  } else {
    res.status(405).end();
  }
                            }

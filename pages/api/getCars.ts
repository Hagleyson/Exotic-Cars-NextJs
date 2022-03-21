import { Http2ServerRequest } from "http2";
import fs from "fs/promises";

import path from "path";

export default async function getCars(req: Http2ServerRequest, res: any) {
  console.log(req);
  if (req.method === "GET") {
    const filePath = path.join(process.cwd(), "data", "db.json");
    const jsonData = (await fs.readFile(filePath)).toString();
    const data = await JSON.parse(jsonData);
    typeof res.status(201).json(data);
  }
}

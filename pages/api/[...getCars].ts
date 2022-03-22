import { carType } from "./../../helpers/types/carType";
import fs from "fs/promises";
import path from "path";

export default async function getCars(req: any, res: any) {
  if (req.method === "GET") {
    const filter = req.query.id;
    const filePath = path.join(process.cwd(), "data", "db.json");
    const jsonData = (await fs.readFile(filePath)).toString();
    const cars = await JSON.parse(jsonData);
    if (req.query.id) {
      const filteredCar = cars.car.filter((car: carType) => car.id === filter);
      filteredCar
        ? res.status(200).json({ message: "success", cars: filteredCar[0] })
        : res.status(204).end();
      return;
    }
    if (cars.car.length < 1) {
      res.status(204).end();
      return;
    }

    typeof res.status(200).json({ message: "success", cars: cars.car });
    return;
  }

  res.status(405).json({ message: "invalid method" });
}

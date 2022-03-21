import fs from "fs/promises";
import { carTypes } from "@helpers/index";
import path from "path";

export default async function getCars(req: any, res: any) {
  if (req.method === "GET") {
    const filePath = path.join(process.cwd(), "data", "db.json");
    const jsonData = (await fs.readFile(filePath)).toString();
    const cars = await JSON.parse(jsonData);

    if (req.body) {
      const filteredCar = cars.cars.filter(
        (car: carTypes) => car.id === req.body
      );
      filteredCar
        ? res.status(200).json({ message: "success", cars: filteredCar })
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

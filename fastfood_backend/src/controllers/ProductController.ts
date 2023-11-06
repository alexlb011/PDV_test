import { type Request, type Response } from "express";
import fs from "fs";
import path from "path";

class ProductController {
  //   async findOne(req: Request, res: Response): Promise<void> {
  //     console.log("rota nao implementada");
  //     console.log(req.body);
  //     res.status(400).json("Bad");
  //   }
  async findAll(req: Request, res: Response): Promise<void> {
    try {
      const filePath = path.resolve(__dirname, "../db/itens.json");
      const jsonData = fs.readFileSync(filePath, "utf8");
      const data = JSON.parse(jsonData);
      console.log("CHEGUEI AKI");

      res.json(data);
    } catch (error) {
      console.log(error);
      res
        .status(404)
        .send([
          "Ei. isso nao era para acontecer, estamos trabalhando para resolver :)",
        ]);
    }
  }
  //   async register(req: Request, res: Response): Promise<void> {
  //     console.log("rota nao implementada");
  //     console.log(req.body);
  //     res.status(400).json("Bad");
  //   }
  //   async Update(req: Request, res: Response): Promise<void> {
  //     console.log("rota nao implementada");
  //     console.log(req.body);
  //     res.status(400).json("Bad");
  //   }
  //   async Delete(req: Request, res: Response): Promise<void> {
  //     console.log("rota nao implementada");
  //     console.log(req.body);
  //     res.status(400).json("Bad");
  //   }
}
export default new ProductController();

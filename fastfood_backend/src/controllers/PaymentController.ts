import { type Request, type Response } from "express";

class PaymentController {
  //   async findOne(req: Request, res: Response): Promise<void> {
  //     console.log("rota nao implementada");
  //     console.log(req.body);
  //     res.status(400).json("Bad");
  //   }
  //   async findAll(req: Request, res: Response): Promise<void> {
  //     // console.log("rota nao implementada");
  //     // console.log(req.body);
  //     // res.status(400).json("Bad");
  //     res.send("oie");
  //   }
  async register(req: Request, res: Response): Promise<void> {
    // faltou implementar a validaçao no backend, tanto para valores em moeda, quanto validaçao do cartao de credito ou debito
    try {
      setTimeout(() => {
        res.send("Compra Efetuada");
      }, 2000);
    } catch (error) {
      res.status(400).json("Bad");
    }
  }
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
export default new PaymentController();

import { Response, Request } from "express";

class DeleteSchedulingController {
  async handle(request: Resquest, response: Response): Promise<Response> {
    const { id } = request.body;
  }
}

export { DeleteSchedulingController };

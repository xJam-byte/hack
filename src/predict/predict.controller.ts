import { Body, Controller, Post } from "@nestjs/common";

@Controller("predict")
export class PredictController {
  constructor(private readonly modelService: PredictController) {}

  @Post()
  async predict(@Body() input: number[]): Promise<number[]> {
    return this.modelService.predict(input);
  }
}

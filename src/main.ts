import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { log } from "console";

async function bootstrap() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: "http://localhost:3000/",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    credentials: true,
  });
  await app.listen(PORT, () => {
    log("listening on port " + PORT);
  });
}
bootstrap();

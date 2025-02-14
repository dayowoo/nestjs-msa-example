import { NestFactory } from '@nestjs/core';
import { PersonasModule } from './personas.module';
import { setupSwagger } from '@app/common/config/swagger.config'

async function bootstrap() {
  const app = await NestFactory.create(PersonasModule);

  setupSwagger(app, 'Personas');
  
  await app.listen(process.env.port ?? 3000);
}
bootstrap();

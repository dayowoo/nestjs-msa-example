import { Module } from '@nestjs/common';
import { PersonasService } from './personas.service';
import { PersonasController } from './personas.controller';
import { DatabaseModule } from '@app/common';
import { PersonasRepository } from './personas.repository';
import { PersonaDocument, PersonaSchema } from './models/personas.schema';


@Module({
  imports: [
    DatabaseModule, 
    DatabaseModule.forFeature([
      { name: PersonaDocument.name, schema: PersonaSchema}
    ])
  ],
  controllers: [PersonasController],
  providers: [PersonasService, PersonasRepository],
})
export class PersonasModule {}

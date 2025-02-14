import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from '@app/common';
import { PersonaDocument } from './models/personas.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PersonasRepository extends AbstractRepository<PersonaDocument> {
  protected readonly logger = new Logger(PersonasRepository.name);

  constructor(
    @InjectModel(PersonaDocument.name)
    personaModel: Model<PersonaDocument>,
  ) {
    super(personaModel);
  }
}

import { Injectable } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { PersonasRepository } from './personas.repository';

@Injectable()
export class PersonasService {
  constructor(
    private readonly personaRepository: PersonasRepository,
  ) {}

  create(createPersonaDto: CreatePersonaDto) {
    return this.personaRepository.create({
      ...createPersonaDto,
      timestamp: new Date(),
      userId: '123',
    });
  }

  findAll() {
    return this.personaRepository.find({});
  }

  findOne(_id: string) {
    return this.personaRepository.findOne({ _id });
  }

  update(_id: string, updateReservationDto: UpdateReservationDto) {
    return this.personaRepository.findOneAndUpdate(
      { _id },
      { $set: updateReservationDto },
    );
  }

  remove(_id: string) {
    return this.personaRepository.findOneAndDelete({ _id });
  }
}

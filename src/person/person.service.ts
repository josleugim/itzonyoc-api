import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as moment from 'moment-timezone';

import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Person } from './entities/person.entity';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private personRepository: Repository<Person>,
  ) {}

  async create(createPersonDto: CreatePersonDto, file: any) {
    if (createPersonDto.birthday) {
      const myDate = new Date(createPersonDto.birthday);
      createPersonDto.birthday = moment(myDate).format();
    }
    if (file) {
      createPersonDto.avatar = file.filename;
    }

    try {
      return await this.personRepository.insert(createPersonDto);
    } catch (err) {
      console.log(err);
    }
  }

  findAll() {
    return this.personRepository.find();
  }

  async findOne(id: number) {
    return this.personRepository.findOne({
      where: { id },
    });
  }

  async update(id: number, updatePersonDto: UpdatePersonDto, file: any) {
    const person = await this.personRepository.findOne({
      where: { id },
    });

    if (updatePersonDto.birthday) {
      const myDate = new Date(updatePersonDto.birthday);
      updatePersonDto.birthday = moment(myDate).format();
    }

    if (file) {
      updatePersonDto.avatar = file.filename;
    }

    updatePersonDto.updatedAt = moment().toISOString();
    return this.personRepository.save({
      ...person,
      ...updatePersonDto,
    });
  }

  remove(id: number) {
    return this.personRepository.delete(id);
  }
}

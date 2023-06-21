import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { People, PeopleDocument } from './schemas/people.schema';
import { CreatePeopleDto } from './dto/create-people.dto';
import { UpdatePeopleDto } from './dto/update-people.dto';

@Injectable()
export class PeopleService {
  constructor(
    @InjectModel(People.name) private readonly model: Model<PeopleDocument>,
  ) {}

  async findAll(): Promise<People[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<People> {
    return await this.model.findById(id).exec();
  }

  async create(createTodoDto: CreatePeopleDto): Promise<People> {
    return await new this.model({
      ...createTodoDto,
    }).save();
  }

  async update(id: string, updateTodoDto: UpdatePeopleDto): Promise<People> {
    return await this.model.findByIdAndUpdate(id, updateTodoDto).exec();
  }

  async delete(id: string): Promise<People> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}

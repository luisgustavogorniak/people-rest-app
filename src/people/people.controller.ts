import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { PeopleService } from './people.service';
import { CreatePeopleDto } from './dto/create-people.dto';
import { UpdatePeopleDto } from './dto/update-people.dto';

@Controller('people')
export class PeopleController {
  constructor(private readonly service: PeopleService) {}

  @Get()
  async index() {
    return await this.service.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return await this.service.findOne(id);
  }

  @Post()
  async create(@Body() createPeopleDto: CreatePeopleDto) {
    return await this.service.create(createPeopleDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePeopleDto: UpdatePeopleDto,
  ) {
    return await this.service.update(id, updatePeopleDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }
}

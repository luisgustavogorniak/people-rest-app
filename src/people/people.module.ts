import { Module } from '@nestjs/common';
import { PeopleService } from './people.service';
import { PeopleController } from './people.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { People, PeopleSchema } from './schemas/people.schema';

@Module({
  providers: [PeopleService],
  controllers: [PeopleController],
  imports: [
    MongooseModule.forFeature([{ name: People.name, schema: PeopleSchema }]),
  ],
})
export class PeopleModule {}

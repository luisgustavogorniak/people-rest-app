import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PeopleDocument = People & Document;

@Schema()
export class People {
  @Prop({ required: true })
  name: string;

  @Prop()
  age: number;
}

export const PeopleSchema = SchemaFactory.createForClass(People);

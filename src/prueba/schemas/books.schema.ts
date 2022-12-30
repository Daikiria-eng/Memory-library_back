import  { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type booksDocument=books & Document;

@Schema()
export class books{
    @Prop()
    id?: number;
    @Prop()
    title: string;
    @Prop()
    author: string;
    @Prop()
    avail:boolean;
}
export const booksSchema=SchemaFactory.createForClass(books);
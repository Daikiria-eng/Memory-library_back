import { Schema,Prop,SchemaFactory } from '@nestjs/mongoose'; 
import { Document } from 'mongoose';

export type userDocument=user&Document;
    
@Schema()
export class user{
    @Prop()
    id?:number;
    @Prop()
    email:string;
    @Prop()
    name:string;
    @Prop()
    password:string;
}
export const userSchema=SchemaFactory.createForClass(user);
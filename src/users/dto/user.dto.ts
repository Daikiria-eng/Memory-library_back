import { Document } from 'mongoose';

export interface userDTO extends Document{
    id?:number;
    email:string;
    name:string;
    password:string;
}
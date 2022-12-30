import { Document } from 'mongoose';

export interface BookRepo extends Document{
    id?: number;
    title: string;
    author: string;
    avail: boolean;
}
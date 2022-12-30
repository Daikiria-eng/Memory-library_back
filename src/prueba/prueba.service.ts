import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BookRepo } from './interfaces/Book';
import { BookDTO } from './dto/Book.dto';
import { books, booksDocument } from './schemas/books.schema';

@Injectable()
export class PruebaService {
    constructor(@InjectModel(books.name) private booxModel:Model<booksDocument>){}

    async getBooks(){
        return await this.booxModel.find();
    }

    async filterBook(book:BookDTO){
        return await this.booxModel.find(book);
    }
    
    async saveBook(book:BookDTO){
        const newBook=new this.booxModel(book);
        return await newBook.save();
    }
}
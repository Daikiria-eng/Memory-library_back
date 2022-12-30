import { Controller, Get, Post, Body, Req, Res, Param, HttpCode } from '@nestjs/common';
import { BookDTO } from '../dto/Book.dto';
import { PruebaService } from '../prueba.service';
import { books } from '../schemas/books.schema';

@Controller('books')
export class PruebaController{
    
    constructor(private pruebaService:PruebaService){}

    @Get('/get-all')
    getAllBooks():Promise<books[]>{
        return this.pruebaService.getBooks();
    }
    @Post('/filter-name')
    getBookById(@Body() book:BookDTO){
        console.log(book)
        return this.pruebaService.filterBook(book);
    } 
    @Post('/insert')
    createBook(@Body() book:BookDTO):Promise<BookDTO>{
        return this.pruebaService.saveBook(book);
    }
}
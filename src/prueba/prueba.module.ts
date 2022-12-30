import { Module } from '@nestjs/common';
import { PruebaController } from './controller/prueba.controller'; 
import { PruebaService } from './prueba.service';
import { booksSchema,books } from './schemas/books.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://mongoo:mongoo@main.fn5hs0p.mongodb.net/pruebinn'),
        MongooseModule.forFeature([
            {name: books.name, schema: booksSchema}
        ])
    ],
    exports:[MongooseModule],
    
})
export class PruebaModule {}
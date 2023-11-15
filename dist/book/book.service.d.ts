import { Model, Connection } from 'mongoose';
import { BookDocument } from './schemas/book.schema';
import { CreateBookDto } from './dto/create-book.dto';
export declare class BookService {
    private BookModel;
    constructor(BookModel: Model<BookDocument>, privateconnection: Connection);
    create(create_book: CreateBookDto): Promise<BookDocument>;
    findAll(): Promise<BookDocument[]>;
    getBook(id: string): Promise<BookDocument>;
    deleteBook(id: string): Promise<BookDocument>;
    updateBook(id: string, data: CreateBookDto): Promise<BookDocument>;
}

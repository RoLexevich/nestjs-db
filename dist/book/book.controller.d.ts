import { BookService } from './book.service';
import { BookDocument } from './schemas/book.schema';
import { CreateBookDto } from './dto/create-book.dto';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    create(data: CreateBookDto): Promise<BookDocument>;
    findAll(): Promise<BookDocument[]>;
    findOne(id: string): Promise<BookDocument>;
    deleteOne(id: string): Promise<BookDocument>;
    updateOne(id: string, data: CreateBookDto): Promise<BookDocument>;
}

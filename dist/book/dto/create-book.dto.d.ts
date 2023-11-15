import { Book } from '../interfaces/book.interface';
export declare class CreateBookDto {
    title: Book['title'];
    description: Book['description'];
    authors: Book['authors'];
    favorite: Book['favorite'];
    fileCover: Book['fileCover'];
    findOneAndRemove: Book['findOneAndRemove'];
}

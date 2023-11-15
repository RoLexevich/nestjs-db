/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="passport-local-mongoose/node_modules/mongoose/types/aggregate" />
/// <reference types="passport-local-mongoose/node_modules/mongoose/types/callback" />
/// <reference types="passport-local-mongoose/node_modules/mongoose/types/collection" />
/// <reference types="passport-local-mongoose/node_modules/mongoose/types/connection" />
/// <reference types="passport-local-mongoose/node_modules/mongoose/types/cursor" />
/// <reference types="passport-local-mongoose/node_modules/mongoose/types/document" />
/// <reference types="passport-local-mongoose/node_modules/mongoose/types/error" />
/// <reference types="passport-local-mongoose/node_modules/mongoose/types/expressions" />
/// <reference types="passport-local-mongoose/node_modules/mongoose/types/helpers" />
/// <reference types="passport-local-mongoose/node_modules/mongoose/types/middlewares" />
/// <reference types="passport-local-mongoose/node_modules/mongoose/types/indexes" />
/// <reference types="passport-local-mongoose/node_modules/mongoose/types/models" />
/// <reference types="passport-local-mongoose/node_modules/mongoose/types/mongooseoptions" />
/// <reference types="passport-local-mongoose/node_modules/mongoose/types/pipelinestage" />
/// <reference types="passport-local-mongoose/node_modules/mongoose/types/populate" />
/// <reference types="passport-local-mongoose/node_modules/mongoose/types/query" />
/// <reference types="passport-local-mongoose/node_modules/mongoose/types/schemaoptions" />
/// <reference types="passport-local-mongoose/node_modules/mongoose/types/schematypes" />
/// <reference types="passport-local-mongoose/node_modules/mongoose/types/session" />
/// <reference types="passport-local-mongoose/node_modules/mongoose/types/types" />
/// <reference types="passport-local-mongoose/node_modules/mongoose/types/utility" />
/// <reference types="passport-local-mongoose/node_modules/mongoose/types/validation" />
/// <reference types="passport-local-mongoose/node_modules/mongoose/types/virtuals" />
/// <reference types="passport-local-mongoose/node_modules/mongoose" />
/// <reference types="passport-local-mongoose" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="passport-local-mongoose/node_modules/mongoose/types/inferschematype" />
import { Document } from 'mongoose';
export type BookDocument = Book & Document;
export declare class Book extends Document {
    title: string;
    description: string;
    authors: string;
    favorite: string;
    fileCover: string;
    findOneAndRemove: any;
}
export declare const BookSchema: import("mongoose").Schema<Book, import("mongoose").Model<Book, any, any, any, Document<unknown, any, Book> & Book & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Book, Document<unknown, {}, import("mongoose").FlatRecord<Book>> & import("mongoose").FlatRecord<Book> & {
    _id: import("mongoose").Types.ObjectId;
}>;

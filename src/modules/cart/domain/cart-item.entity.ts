import { BookEntity } from "@modules/books/domain/entities";

export interface CartItem {
    book: BookEntity;
    quantity: number;
}
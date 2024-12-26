import { BookEntity } from "../../domain/entities/book.entity";
import { BookRepository } from "../../domain/repositories/book.repository";

export class InMemoryBookRepository extends BookRepository {

    private books: BookEntity[] = [
        new BookEntity(1, '1984', 'George Orwell', 9.99, 'https://m.media-amazon.com/images/I/71rpa1-kyvL._AC_UF1000,1000_QL80_.jpg'),
        new BookEntity(2, 'To Kill a Mockingbird', 'Harper Lee', 7.99, 'https://cdn2.penguin.com.au/covers/original/9781784752637.jpg'),
        new BookEntity(3, 'The Great Gatsby', 'F. Scott Fitzgerald', 10.99, 'https://images.cdn3.buscalibre.com/fit-in/360x360/82/30/8230acb585bd29fe2b5940f68ded7499.jpg'),
        new BookEntity(4, 'Moby Dick', 'Herman Melville', 8.99, 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781524879761/the-great-gatsby-9781524879761_hr.jpg'),
        new BookEntity(5, 'War and Peace', 'Leo Tolstoy', 12.99, 'https://m.media-amazon.com/images/I/71lPZpwz0HL._AC_UF1000,1000_QL80_.jpg'),
        new BookEntity(6, 'Pride and Prejudice', 'Jane Austen', 6.99, 'https://dummyimage.com/310x385/29408c/fff'),
        new BookEntity(7, 'The Catcher in the Rye', 'J.D. Salinger', 8.49, 'https://dummyimage.com/310x385/29408c/fff'),
        new BookEntity(8, 'Brave New World', 'Aldous Huxley', 10.49, 'https://dummyimage.com/310x385/29408c/fff'),
        new BookEntity(9, 'Crime and Punishment', 'Fyodor Dostoevsky', 11.99, 'https://dummyimage.com/310x385/29408c/fff'),
        new BookEntity(10, 'The Hobbit', 'J.R.R. Tolkien', 8.99, 'https://dummyimage.com/310x385/29408c/fff'),
        new BookEntity(11, 'The Odyssey', 'Homer', 7.49, 'https://dummyimage.com/310x385/29408c/fff'),
        new BookEntity(12, 'Catch-22', 'Joseph Heller', 10.99, 'https://dummyimage.com/310x385/29408c/fff'),
        new BookEntity(13, 'Fahrenheit 451', 'Ray Bradbury', 9.49, 'https://dummyimage.com/310x385/29408c/fff'),
        new BookEntity(14, 'The Picture of Dorian Gray', 'Oscar Wilde', 8.99, 'https://dummyimage.com/310x385/29408c/fff'),
        new BookEntity(15, 'The Brothers Karamazov', 'Fyodor Dostoevsky', 13.49, 'https://dummyimage.com/310x385/29408c/fff'),
        new BookEntity(16, 'Anna Karenina', 'Leo Tolstoy', 11.99, 'https://dummyimage.com/310x385/29408c/fff'),
        new BookEntity(17, 'The Divine Comedy', 'Dante Alighieri', 10.99, 'https://dummyimage.com/310x385/29408c/fff'),
        new BookEntity(18, 'Don Quixote', 'Miguel de Cervantes', 12.99, 'https://dummyimage.com/310x385/29408c/fff'),
        new BookEntity(19, 'The Scarlet Letter', 'Nathaniel Hawthorne', 7.49, 'https://dummyimage.com/310x385/29408c/fff'),
        new BookEntity(20, 'Frankenstein', 'Mary Shelley', 6.99, 'https://dummyimage.com/310x385/29408c/fff'),
        new BookEntity(21, 'Wuthering Heights', 'Emily Brontë', 9.49, 'https://dummyimage.com/310x385/29408c/fff'),
        new BookEntity(22, 'Dracula', 'Bram Stoker', 8.99, 'https://dummyimage.com/310x385/29408c/fff'),
        new BookEntity(23, 'Jane Eyre', 'Charlotte Brontë', 7.99, 'https://dummyimage.com/310x385/29408c/fff'),
        new BookEntity(24, 'The Count of Monte Cristo', 'Alexandre Dumas', 12.49, 'https://dummyimage.com/310x385/29408c/fff'),
        new BookEntity(25, 'The Lord of the Rings', 'J.R.R. Tolkien', 15.99, 'https://dummyimage.com/310x385/29408c/fff'),
        new BookEntity(26, 'The Metamorphosis', 'Franz Kafka', 6.49, 'https://dummyimage.com/310x385/29408c/fff'),
        new BookEntity(27, 'Slaughterhouse-Five', 'Kurt Vonnegut', 10.49, 'https://dummyimage.com/310x385/29408c/fff'),
        new BookEntity(28, 'The Stranger', 'Albert Camus', 8.99, 'https://dummyimage.com/310x385/29408c/fff'),
        new BookEntity(29, 'The Bell Jar', 'Sylvia Plath', 9.99, 'https://dummyimage.com/310x385/29408c/fff'),
        new BookEntity(30, 'Brave New World', 'Aldous Huxley', 9.99, 'https://dummyimage.com/310x385/29408c/fff'),
        new BookEntity(31, 'The Shining', 'Stephen King', 11.99, 'https://dummyimage.com/310x385/29408c/fff'),
        new BookEntity(32, 'The Road', 'Cormac McCarthy', 10.49, 'https://dummyimage.com/310x385/29408c/fff'),
        new BookEntity(33, 'The Catcher in the Rye', 'J.D. Salinger', 8.99, 'https://dummyimage.com/310x385/29408c/fff'),
        new BookEntity(34, 'The Hunger Games', 'Suzanne Collins', 9.49, 'https://dummyimage.com/310x385/29408c/fff'),
        new BookEntity(35, 'The Girl on the Train', 'Paula Hawkins', 7.99, 'https://dummyimage.com/310x385/29408c/fff'),
        new BookEntity(36, 'The Kite Runner', 'Khaled Hosseini', 8.49, 'https://dummyimage.com/310x385/29408c/fff'),
        new BookEntity(37, 'The Fault in Our Stars', 'John Green', 7.99, 'https://dummyimage.com/310x385/29408c/fff'),
        new BookEntity(38, 'Gone with the Wind', 'Margaret Mitchell', 12.99, 'https://dummyimage.com/310x385/29408c/fff'),
        new BookEntity(39, 'The Alchemist', 'Paulo Coelho', 9.99, 'https://dummyimage.com/310x385/29408c/fff'),
        new BookEntity(40, 'The Outsiders', 'S.E. Hinton', 6.99, 'https://dummyimage.com/310x385/29408c/fff'),
        new BookEntity(41, 'The Sun Also Rises', 'Ernest Hemingway', 9.49, 'https://dummyimage.com/310x385/29408c/fff'),
        new BookEntity(42, 'Les Misérables', 'Victor Hugo', 13.99, 'https://dummyimage.com/310x385/29408c/fff'),
        new BookEntity(43, 'The Secret Garden', 'Frances Hodgson Burnett', 7.49, 'https://dummyimage.com/310x385/29408c/fff'),
        new BookEntity(44, 'The Grapes of Wrath', 'John Steinbeck', 10.99, 'https://dummyimage.com/310x385/29408c/fff'),
        new BookEntity(45, 'The Color Purple', 'Alice Walker', 9.99, 'https://dummyimage.com/310x385/29408c/fff'),
        new BookEntity(46, 'Of Mice and Men', 'John Steinbeck', 8.99, 'https://dummyimage.com/310x385/29408c/fff'),
    ];
    
    async getAllBooks(): Promise<BookEntity[]> {
        return this.books;
    }

    async findById(id: number): Promise<BookEntity | null> {
        return this.books.find(book => book.getId() === id) || null;
    }

    async findByName(name: string): Promise<BookEntity[]> {
        return this.books.filter(book => book.getName().toLowerCase().includes(name));
    }

    public setBooks(books: BookEntity[]): void {
        this.books = books;
    }
    
}
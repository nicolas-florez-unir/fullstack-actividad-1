export class BookEntity {
    private id: number;
    private name: string;
    private author: string;
    private price: number;
    private imageUrl: string;

    constructor(id: number, name: string, author: string, price: number, imageUrl: string) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.price = price;
        this.imageUrl = imageUrl;
    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getAuthor(): string {
        return this.author;
    }

    public getPrice(): number {
        return this.price;
    }

    public getImageUrl(): string {
        return this.imageUrl;
    }

}
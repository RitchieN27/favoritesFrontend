export class Restaurant {

    constructor(
        private id: number = 0,
        private name: string = '',
        private address: string = '',
        private rating: number = 0) {}

    public get getId(): number {
        return this.id;
    }
    public set setId(value: number) {
        this.id = value;
    }

    public get getName(): string {
        return this.name;
    }
    public set setName(value: string) {
        this.name = value;
    }

    public get getAddress(): string {
        return this.address;
    }
    public set setAddress(value: string) {
        this.address = value;
    }

    public get getRating(): number {
        return this.rating;
    }
    public set setRating(value: number) {
        this.rating = value;
    }

}

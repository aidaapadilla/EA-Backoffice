import { User } from "src/app/interfaces/user.interface";

export class Parking {
    _id?: string;
    id?: string;
    user?: User;
    opinions?: string[];
    type: string;
    price: number;
    size: string;
    difficulty: number;
    score: number;

    constructor(type: string, price: number,
        size: string, difficulty: number, score: number, user?: User) {
        this.user = user;
        this.type = type;
        this.price = price;
        this.size = size;
        this.difficulty = difficulty;
        this.score = score;
    }
}
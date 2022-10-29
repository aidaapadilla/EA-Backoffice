import { User } from "../components/models/user";

export class Parking {
    _id?: string;
    id?: string;
    user: User;
    opinions?: string[];
    type: string;
    price: number;
    size: string;
    difficulty: number;
    score: number;

    constructor(user: User, type: string, price: number,
        size: string, difficulty: number, score: number) {
        this.user = user;
        this.type = type;
        this.price = price;
        this.size = size;
        this.difficulty = difficulty;
        this.score = score;
    }
}
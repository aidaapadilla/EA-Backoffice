import { User } from "src/app/interfaces/user.interface";

export class Parking {
    _id?: string;
    id?: string;
    user?: User;
    opinions?: string[];
    email: string;
    type: string;
    price: string; //number;
    size: string;
    difficulty: string; //number;
    score?: number;
    country?: string;
    city: string;
    street: string;
    spotNumber: string;
    streetNumber: string;
    longitude: number;
    latitude: number;
    range: string;

    constructor(type: string, price: string,
        size: string, difficulty: string, city: string, street: string, spotNumber: string, streetNumber:string, email:string, user?: User, country?: string) {
        this.user = user; //token
        this.type = type;
        this.price = price;
        this.size = size;
        this.difficulty = difficulty;
        this.country = country;
        this.city = city;
        this.street = street;
        this.spotNumber = spotNumber;
        this.streetNumber = streetNumber;
        this.email = email;
        this.longitude = 2.1766803070068352;
        this.latitude = 41.39602335480191;
        this.range = "";
    }
}
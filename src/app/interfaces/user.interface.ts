/* export interface User {
    name: string;
    password: string;
    email: string;
} */
export class User {
    _id?: number;
    name: string;
    email: string;
    points: number;
    language?: string;
    myBookings: string[];
    myOpinions: string[];
    myFavourites: string[];
    myParkings: string[];

    constructor(name: string, email: string, points: number, language: string, 
        myBookings: string[], myOpinions: string[], myFavourites: string[], myParkings: string[]) {
        this.name = name;
        this.email = email;
        this.points = points;
        this.language = language;
        this.myBookings = myBookings;
        this.myOpinions = myOpinions;
        this.myFavourites = myFavourites;
        this.myParkings = myParkings;
    }
}
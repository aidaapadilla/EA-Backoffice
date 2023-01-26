export class Report {
    _id?: string;
    user: string;
    text: string;
    type: string;
    level?: number;
    time?: string;

    constructor(time: string, level: number, user: string, text: string, type: string, closed: boolean) {
        this.user = user;
        this.text = text;
        this.type = type;
        this.level = level;
        this.time = time;
    }
}
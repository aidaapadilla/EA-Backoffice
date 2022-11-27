export class Report {
    _id?: string;
    reportingUser: string;
    description: string;
    type: string;
    closed?: boolean;

    constructor(reportingUser: string, description: string, type: string, closed: boolean) {
        this.reportingUser = reportingUser;
        this.description = description;
        this.type = type;
        //this.closed = closed;
    }
}
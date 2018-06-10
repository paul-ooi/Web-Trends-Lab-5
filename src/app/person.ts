export class Person {
    id : number;
    firstName : string;
    lastName : string;
    dateOfBirth : Date;
    
    public constructor(id: number, firstName : string, lastName : string, dateOfBirth : Date) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
    };

    getAge() : number {
        let today : Date = new Date();
        let age : number = today.getUTCFullYear() - this.dateOfBirth.getUTCFullYear();

        //check if today is before the birthday for current year
        if ( (today.getUTCMonth() < this.dateOfBirth.getUTCMonth() ) || 
        ( (today.getUTCMonth() === this.dateOfBirth.getUTCMonth()) && ( today.getUTCDate() < this.dateOfBirth.getUTCDate() )) ) {
            age--;
        }

        return age;
    }
}

export interface User {
    firstname: string;
    lastname: string;
    phone: string;
    email: string;
    password: string;
    skills: Skill[];
    experiences: Experience[];
}

export interface Skill {
    name: string;
    photo: string;
}

export interface Experience {
    company: string;
    type: string;
    location: string;
}

export class DataService {
    private users: User[] = [];

    constructor() {
        this.users = [
            {
                firstname: "John",
                lastname: "Doe",
                phone: "123-456-7890",
                email: "john.doe@example.com",
                password: "12345",
                skills: [
                    { name: "Programming", photo: "../Images/mypicture.JPG" },
                    { name: "Problem Solving", photo: "../Images/mypicture.JPG" }
                ],
                experiences: [
                    { company: "ABC Corp", type: "Software Engineer", location: "City A" },
                    { company: "XYZ Ltd", type: "Web Developer", location: "City B" }
                ]
            },
            {
                firstname: "Jane",
                lastname: "Doe",
                phone: "987-654-3210",
                email: "jane.doe@example.com",
                password: "12345",
                skills: [
                    { name: "Design", photo: "../Images/mypicture.JPG" },
                    { name: "Creativity", photo: "../Images/mypicture.JPG" }
                ],
                experiences: [
                    { company: "123 Design Studio", type: "Graphic Designer", location: "City C" },
                    { company: "Creative Innovations", type: "UX/UI Designer", location: "City D" }
                ]
            }
        ];
    }

    addUser(newUser: User): void {
        this.users.push(newUser);
    }

    getUsers(): User[] {
        return this.users;
    }
}

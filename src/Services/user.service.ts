export interface User{
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    middleName?: string | null,
    birthDay: Date,
    gender: string,
    profession: string,
    aboutMe: string,
    phoneNumber: string,
    photoUrl: string,
    resumeUrl: string,
    createdTime: Date,
    skills: Skill[],
    languages: Language[],
    certificates: Certificate[],
    experiences: Experience[],
    projects: Project[],
    socials: Social[],
    educations: Education[]
}

export interface Skill{
  id: number,
  name: string,
  photoUrl?: string | null,
  createdTime: Date
}

export interface Language{

}

export interface Certificate{

}

export interface Experience{
  id: number,
  companyName: string,
  description: string,
  position: string,
  workType: string,
  city: string,
  fromDate: Date,
  toDate: Date,
  userId: number,
  createdTime: Date,
  skills: Skill[]
}

export interface Education{
  id: number,
  name: string,
  description: string,
  city: string,
  fromDate: Date,
  toDate: Date,
  educationWebSiteUrl: string,
  userId: number
}

export interface Project{
  id: number,
  name: string,
  description: string,
  photoUrl: number,
  userId: number,
  urlToCode: string,
  urlToSite: string,
  skills: Skill[]
  }

export interface Social{

}

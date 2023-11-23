import Technology from "interfaces/cv/experience/technology";
export default interface Experience {
    position: string;
    company: string;
    location: string;
    period: string;
    companyDescription: string;
    projects: String[];
    technologies: Technology;
}
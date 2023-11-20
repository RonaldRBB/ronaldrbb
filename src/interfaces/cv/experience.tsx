import { Technology } from "./experiences";

interface Experience {
    position: string;
    company: string;
    location: string;
    period: string;
    companyDescription: string;
    projects: String[];
    technologies: Technology;
}
export default Experience
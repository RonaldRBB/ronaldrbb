import { Project, Technology } from "./experiences";

interface Experience {
    position: string;
    company: string;
    period: string;
    companyDescription: string;
    projects: Project[];
    technologies: Technology;
}
export default Experience
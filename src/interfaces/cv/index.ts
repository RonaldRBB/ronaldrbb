import Details from "interfaces/cv/details";
import Link from "interfaces/cv/links";
import DownloadCV from "interfaces/cv/download";
import Experience from "interfaces/cv/experience";
import Education from "interfaces/cv/education";
export default interface CV {
    name: string;
    title: string;
    aboutMe: string;
    details: Details;
    links: Link[];
    languages: string[];
    downloadCV: DownloadCV[];
    experience: Experience[];
    education: Education;
}
import Details from "./details";
import Link from "./links";
import DownloadCV from "./download";
import Experience from "./experience";
import Education from "./education";
interface CV {
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
export default CV;

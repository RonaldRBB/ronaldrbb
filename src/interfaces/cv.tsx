import Details from "./details";
import Link from "./link";
import DownloadCV from "./download_cv";
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

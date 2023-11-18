import Details from "./details";
import Links from "./links";
import Language from "./language";
import DownloadCV from "./download_cv";
import Experience from "./experience";
import Education from "./education";
interface CV {
    name: string;
    title: string;
    aboutMe: string;
    details: Details;
    links: Links;
    languages: Language[];
    downloadCV: DownloadCV;
    experience: Experience[];
    education: Education;
}
export default CV;

import Details from "../../../interfaces/cv/details";
import Link from "../../../interfaces/cv/links";
import DownloadCV from "../../../interfaces/cv/download";
import { Language } from "../../../types";
export default interface Props {
    language: Language
    details: Details
    links: Link[]
    languages: string[]
    DownloadCvs: DownloadCV[]
}
import Details from "../../../interfaces/cv/details";
import Link from "../../../interfaces/cv/links";
import DownloadCV from "../../../interfaces/cv/download";
import { Language } from "../../../types";
interface Props {
    language: Language
    details: Details
    links: Link[]
    languages: string[]
    DownloadCvs: DownloadCV[]
}
interface State {
    detailsTitle: string
    linksTitle: string
    languagesTitle: string
    downloadCV: string
}
export type {
    Props,
    State
}
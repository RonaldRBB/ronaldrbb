import ExperienceInt from "interfaces/cv/experience"
import EducationInt from "interfaces/cv/education"
import { Language } from "types"
interface Props {
    aboutMe: string
    experience: ExperienceInt[]
    education: EducationInt
    language: Language
}
interface State {
    aboutMe: string
    experience: string
    education: string
}

export type {
    Props,
    State
}
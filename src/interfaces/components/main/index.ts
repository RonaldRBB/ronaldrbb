import ExperienceInt from "interfaces/cv/experience"
import EducationInt from "interfaces/cv/education"
export default interface Props {
    aboutMe: string
    experience: ExperienceInt[]
    education: EducationInt
}
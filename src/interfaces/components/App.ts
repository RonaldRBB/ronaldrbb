import CV from "interfaces/cv";
import { Language } from "types";
export default interface State {
    lang: Language
    buttonContent: string
    cv_filename: string
    cv: CV | null
}
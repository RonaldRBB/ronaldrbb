import CV from "../cv";
import { Language } from "../../types";
export default interface App {
    lang: Language
    buttonContent: string
    cv_filename: string
    cv: CV | null
}
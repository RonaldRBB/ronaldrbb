import University from "./university";
import Course from "./course";
export default interface Education {
    university: University[];
    courses: Course[];
}
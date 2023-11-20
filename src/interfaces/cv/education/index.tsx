import University from "../education/university";
import Course from "../education/course";
export default interface Education {
    university: University[];
    courses: Course[];
}
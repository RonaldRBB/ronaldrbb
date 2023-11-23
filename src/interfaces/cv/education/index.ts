import University from "interfaces/cv/education/university";
import Course from "interfaces/cv/education/course";
export default interface Education {
    university: University[];
    courses: Course[];
}
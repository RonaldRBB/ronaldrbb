import University from "./education/university";
import Course from "./education/course";
interface Education {
    universityEducation: University[];
    additionalCourses: Course[];
}
export default Education
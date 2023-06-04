import { Helmet } from "react-helmet-async";
import CoverPage from "../Shared/CoverPage/CoverPage";
import { useLoaderData } from "react-router-dom";
import SingleCourse from "./SingleCourse";




const CoursesPage = () => {
    const courseDetails = useLoaderData();
    console.log('all', courseDetails)
    return (
        <div>
            <Helmet>
                <title>Fox | Courses</title>
            </Helmet>
            <CoverPage title="Courses" link="Courses"></CoverPage>
            <div className="row mt-5 ms-3">
                {
                    courseDetails.map(course =>
                        <SingleCourse
                            key={course.id}
                            course={course}

                        ></SingleCourse>
                    )
                }
            </div>


        </div>
    );
};

export default CoursesPage;
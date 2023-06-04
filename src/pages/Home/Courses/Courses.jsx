
import { useLoaderData } from "react-router-dom";
import SingleCourse from "../../CoursesPage/SingleCourse";

const Courses = () => {
    const courseDetails = useLoaderData();
    console.log('all-5', courseDetails)
    return (
        <div className="m-3">
            <div className="">
                <div className="mb-5 text-center">
                    <h1 className='mb-5 mt-5'>Our Courses</h1>
                    <p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a <br /> paradisematic country</p>
                </div>

                <div className="row mt-5 ms-lg:3">
                    {
                        courseDetails.slice(0,4).map(course =>
                            <SingleCourse
                                key={course.id}
                                course={course}

                            ></SingleCourse>
                        )
                    }
                </div>

            </div>
        </div>
    );
};

export default Courses;
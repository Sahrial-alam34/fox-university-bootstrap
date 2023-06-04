import { Helmet } from "react-helmet-async";
import CoverPage from "../Shared/CoverPage/CoverPage";
import { useEffect, useState } from "react";
import SingleStaff from "./SingleStaff";



const StaffPage = () => {
    const [staff, setStaff] = useState([])
    useEffect(() => {
        fetch('staff.json')
            .then(res => res.json())
            .then(data => setStaff(data));
    }, [])
    return (
        <div>
            <Helmet>
                <title>Fox | Staff</title>
            </Helmet>
            <CoverPage title="Staff Page" link="Staff"></CoverPage>
            <div className="row mt-5 ms-3">
                {
                    staff.map(singleStaff =>
                      <SingleStaff key={singleStaff.id} singleStaff={singleStaff}></SingleStaff>
                    )
                }
            </div>
        </div>
    );
};

export default StaffPage;
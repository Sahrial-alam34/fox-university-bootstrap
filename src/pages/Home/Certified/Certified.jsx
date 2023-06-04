
import { useEffect, useState } from 'react';
import './Certified.css'
import SingleStaff from '../../StaffPage/SingleStaff';

const Certified = () => {
    const [staff, setStaff] = useState([])
    useEffect(() => {
        fetch('staff.json')
            .then(res => res.json())
            .then(data => setStaff(data));
    }, [])
    return (
        <div className="gray-background">
            <div className="m-3">
                <div className="mb-5  text-center ">
                    <h1 className='mb-5 mt-5'>Certified Teachers</h1>
                    <p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a <br /> paradisematic country</p>
                </div>
                <div className="row  justify-content-between mb-5 text-center">
                    <div className="row mt-5 ms-3">
                        {
                            staff.slice(0,4).map(singleStaff =>
                                <SingleStaff key={singleStaff.id} singleStaff={singleStaff}></SingleStaff>
                            )
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Certified;
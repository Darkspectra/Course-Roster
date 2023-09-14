import PropTypes from 'prop-types';
import { FaDollarSign, FaBookOpen } from 'react-icons/fa';
const Course = ({ course }) => {
    const { course_name, image, course_details, price, credit } = course
    return (
        <div>
            <div className='max-w-[312px] bg-gray-200 rounded-2xl items-center text-center my-8 py-4'>
                <img className='ml-4' src={image} alt="" />
                <h1 className='font-bold'>{course_name}</h1>
                <div className="w-72 my-2">
                    <p className='text-gray-500'>{course_details}</p>
                </div>
                <div className='flex ml-5 gap-4 mb-2'>
                    <p><FaDollarSign></FaDollarSign></p>
                    <p>Price: {price}</p>
                    <p><FaBookOpen></FaBookOpen></p>
                    <p>Credit: {credit}</p>
                </div>
                <button className="btn btn-primary text-white w-[80%] bg-blue-800">Select</button>
            </div>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
}

export default Course;
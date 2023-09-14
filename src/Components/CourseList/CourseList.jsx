import PropTypes from 'prop-types';
import CourseDisplay from '../CourseDisplay/CourseDisplay';
const CourseList = ({courseList, hour}) => {
    return (
        <div className="w-1/3 ml-8">
            <h1 className='font-bold text-[#2F80ED]'>Credit Hour Remaining {20-hour}</h1>
            <hr />
            <h1 className='font-bold text-xl'>Course Name</h1>
            {
                courseList.map((course,idx) => <CourseDisplay key={idx} course={course}></CourseDisplay>)
            }
        </div>
    );
};

CourseList.propTypes = {
    courseList: PropTypes.object.isRequired,
    hour: PropTypes.number.isRequired
}

export default CourseList;
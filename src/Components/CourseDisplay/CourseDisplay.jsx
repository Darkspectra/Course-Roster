import PropTypes from 'prop-types';
import CreditHour from '../CreditHour/CreditHour';
// import CreditHour from '../CreditHour/CreditHour';


const CourseDisplay = ({course, hour}) => {
    const { course_name} = course

    return (
        <div>
            <div>
                <li>{course_name}</li>
            </div>
            {
                <CreditHour hour={hour}></CreditHour>
            }
        </div>
    );
};

CourseDisplay.propTypes = {
    course: PropTypes.object.isRequired,
    hour: PropTypes.number.isRequired
}

export default CourseDisplay;
import PropTypes from 'prop-types';
import CreditHour from '../CreditHour/CreditHour';
// import CreditHour from '../CreditHour/CreditHour';


const CourseDisplay = ({course}) => {
    const { course_name} = course

    return (
        <div>
            <div>
                <li>{course_name}</li>
            </div>
        </div>
    );
};

CourseDisplay.propTypes = {
    course: PropTypes.object.isRequired
}

export default CourseDisplay;
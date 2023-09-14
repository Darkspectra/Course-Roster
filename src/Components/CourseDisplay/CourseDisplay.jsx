import PropTypes from 'prop-types';


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
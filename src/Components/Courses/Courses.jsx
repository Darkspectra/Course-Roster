import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types';

const Courses = ({handleCourseList}) => {
    const [courses, setCourses] = useState([])
    
    useEffect(()=>{
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div className="grid grid-cols-3 w-2/3">
            {
                courses.map((course,idx) => <Course key={idx} handleCourseList={handleCourseList} course={course}></Course>)
            }
        </div>
    );
};

Courses.propTypes = {
    handleCourseList: PropTypes.object.isRequired
}

export default Courses;
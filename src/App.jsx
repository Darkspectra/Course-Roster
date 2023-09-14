
import { useState } from 'react'
import './App.css'
import CourseList from './Components/CourseList/CourseList'
import Courses from './Components/Courses/Courses'

function App() {
  const [courseList, setCourseList] = useState([])
  const [hour, setHour] = useState(0)

  const handleCourseList = (course, number, name) => {
    const remainingCourses = courseList.filter(course => course.course_name!=name)
    const newCourseList = [...remainingCourses, course]
    setCourseList(newCourseList)

    // const price = courseList

    let updatedHour = hour + number;

    if (20-updatedHour<0){
      alert("Out of Credit !!");
    }
    else{
      setHour(updatedHour);
    }
  }

  return (
    <>
      <h1 className='text-3xl font-bold text-center my-14'>Course Registration</h1>
      <div className='flex ml-20'>
        <Courses handleCourseList={handleCourseList} ></Courses>
        <CourseList courseList={courseList} hour={hour}></CourseList>
      </div>
    </>
  )
}

export default App

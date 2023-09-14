
import { useState } from 'react'
import './App.css'
import CourseList from './Components/CourseList/CourseList'
import Courses from './Components/Courses/Courses'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [courseList, setCourseList] = useState([])
  const [hour, setHour] = useState(0)

  const handleCourseList = (course, number, name) => {
    const updatedHour = hour + number;
    const realUpdatedHour = 20 - updatedHour;
    if (realUpdatedHour >= 0) {
      const remainingCourses = courseList.filter(course => course.course_name != name)
      const newCourseList = [...remainingCourses, course]
      setCourseList(newCourseList)
      if (remainingCourses.length != courseList.length) {
        const newCourseList = [...remainingCourses, course]
        setCourseList(newCourseList)
        toast.warn('🦄 Already Added Course !!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
      else {
        setHour(updatedHour);
      }
    }

    else if (realUpdatedHour < 0) {

      toast.error('🦄 Out of Credit !!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }


  }

  return (
    <>
      <h1 className='text-3xl font-bold text-center my-14'>Course Registration</h1>
      <div className='flex ml-20'>
        <Courses handleCourseList={handleCourseList} ></Courses>
        <CourseList courseList={courseList} hour={hour}></CourseList>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
      </div>
    </>
  )
}

export default App

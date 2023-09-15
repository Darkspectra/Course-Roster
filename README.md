## Main three "Course Registration" website project features has been included below,
    1. Can added course credit
    2. Dynamically change the remaining credit
    3. It will pop up a Message (React Toast) when the credit is full or taking
       duplicate courses

## Use of React State in my "Course Registration" project,
    First of all, I have fetched the JSON dataset using "useEffect" hook and store it to
    the "courses" array using "useState([])" where the initial array is empty. Since, "Select" button is in the "Courses.jsx" file, to interact with "onClick()" function, we need to identify it's parent by using "Prop Drilling" concept.

    Then the "courses" props bypass to the "Course.jsx" and this file again bypass to the 
    "App.jsx" file. Therefore, the the prop "Courses" bypass visualization would be look like,
                               
        Courses.jsx --> Course.jsx --> App.jsx --> CourseList.jsx --> CourseDisplay.jsx
    
    Moreover, in "App.jsx" I have used two "useState" one is for to handle course_Name and
    other is for constructing dynamic Hour. By using React State in correct place, the mechanism of the whole project has been finished.
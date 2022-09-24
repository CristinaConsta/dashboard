import React, {useState, useEffect} from "react";
import { DataGrid } from '@mui/x-data-grid';
import useData from "../services/firebase/useData";


const columns = [
    { field: 'year', headerName: 'Year', flex: 1},
    { field: 'course', headerName: 'Course', flex: 1},
    { field: 'assignment', headerName: 'Assignment Name', flex: 1 },
    { field: 'weight', headerName: 'Weight (%)', flex: 1 },
    { field: 'grade', headerName: 'Grade', flex: 1 },
    { field: 'mark', headerName: 'Mark', flex: 1 },
    { field: 'feedback', headerName: 'Feedback', flex: 2 },
    { field: 'due_date', headerName: 'Due Date', flex: 1 },
    { field: 'submit_date', headerName: 'Date Submitted', flex: 1 },
    { field: 'graded_date', headerName: 'Date Graded', flex: 1 }
  ];


const DashboardForm = (props) => { 

// Firebase
// const [grades, setGrades] = useState([]);
const [rows, setRows] = useState([]);
const { getCourses, getGrades } = useData();

const getCoursesData = async() =>{
    const gradesSnap = await getGrades();
    let grades = [];
    if(gradesSnap.size){
        gradesSnap.forEach((doc) => {
        grades.push({...doc.data(), ...{id: doc.id}});
        });
       return grades;
    }
};

function getDate(timestamp)
{
    if(timestamp)
        return timestamp.toDate().toLocaleDateString('en-UK', {day: "numeric", month:"short", year: "numeric"});
    
    return "";
}

useEffect(() =>{

    getCoursesData().then((grades) =>
    {
        var formattedGrades = [];
        var id = 1;
        grades.map(g => {

            formattedGrades.push({
                id: id, 
                year: g.year,
                course: g.course,
                assignment: g.assignment,
                weight: g.weight,
                grade: g.grade,
                mark: g.mark,
                feedback: g.feedback,
                due_date: getDate(g.due_date),
                submit_date: getDate(g.submit_date),
                graded_date: getDate(g.graded_date)
            });

            id++;
        });

        setRows(formattedGrades);
    });
}, []);


return ( 
    <div style={{height: 100}}>
        <DataGrid
            rows={rows}
            columns={columns}
            autoHeight
            >
        </DataGrid>
    </div>
);
};

DashboardForm.propTypes = {};

export default DashboardForm;
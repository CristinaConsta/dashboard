import React, {useState, useEffect} from "react";
import { DataGrid } from '@mui/x-data-grid';
import useData from "../services/firebase/useData";
import { ColumnDirective, ColumnsDirective, GridComponent, Filter, Group, Inject, Page, Sort } from '@syncfusion/ej2-react-grids';


/*const columns = [
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
  ];*/


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
                //id: id, 
                Year: g.year,
                Course: g.course,
                Assignment: g.assignment,
                Weight: g.weight,
                Grade: g.grade,
                Mark: g.mark,
                Feedback: g.feedback,
                "Due Date": getDate(g.due_date),
                "Date Submitted": getDate(g.submit_date),
                "Date Graded": getDate(g.graded_date)
            });

            id++;
        });

        setRows(formattedGrades);
    });
}, []);

const groupOptions = {
    columns: ["Year", "Course"],
    showDropArea: false
}

return ( 
    <div style={{height: 100}}>
        
        <GridComponent dataSource={rows} allowFiltering={true} allowSorting={true} allowGrouping={true} groupSettings={groupOptions}>
            <ColumnsDirective>
                <ColumnDirective field='Year' width='100'/>
                <ColumnDirective field='Course' width='100'/>
                <ColumnDirective field='Assignment' width='100'/>
                <ColumnDirective field='Weight' width='100'/>
                <ColumnDirective field='Grade' width='100'/>
                <ColumnDirective field='Mark' width='100'/>
                <ColumnDirective field='Feedback' width='100'/>
                <ColumnDirective field='Due Date' width='100'/>
                <ColumnDirective field='Date Submitted' width='100'/>
                <ColumnDirective field='Date Graded' width='100'/>
            </ColumnsDirective>
            <Inject services={[Page, Sort, Filter, Group]}/>
        </GridComponent>
        
        {/* <DataGrid
            rows={rows}
            columns={columns}
            autoHeight
            >
        </DataGrid> */}
    </div>
);
};

DashboardForm.propTypes = {};

export default DashboardForm;
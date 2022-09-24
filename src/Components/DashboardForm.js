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

function groupBy(data, key) {
    return data.reduce(function(storage, item) {

        var group = item[key.toLowerCase()];
        storage[group] = storage[group] || [];
        storage[group].push(item);
            
        return storage; 
    }, {}); 
};

useEffect(() =>{

    getCoursesData().then((grades) =>
    {
        var yearAverages = [];

        var years = groupBy(grades, 'Year');
        Object.keys(years).forEach(year => {
            var yearSum = 0;
            var courses = groupBy(years[year], 'Course');

            var courseAverages = [];

            Object.keys(courses).forEach(course => {
                var courseSum = 0;
                courses[course].forEach(g=> {
                    courseSum += g.mark;
                });

                yearSum += courseSum;
                var courseAverage = courseSum / courses[course].length;
                courseAverages[course] = courseAverage;
            });

            var yearAverage = yearSum / years[year].length;
            yearAverages[year] = { average: yearAverage, courseAverages: courseAverages };
        });

        var formattedGrades = [];

        grades.map(g => {

            formattedGrades.push({
                Year: g.year + " - Final Mark: " + yearAverages[g.year].average,
                Course: g.course + " - Final Mark: " + yearAverages[g.year].courseAverages[g.course],
                Assignment: g.assignment,
                Weight: g.weight,
                Grade: g.grade,
                Mark: g.mark,
                Feedback: g.feedback,
                "Due Date": getDate(g.due_date),
                "Date Submitted": getDate(g.submit_date),
                "Date Graded": getDate(g.graded_date)
            });
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
import React, { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import useData from "../services/firebase/useData";
import { ColumnDirective, ColumnsDirective, GridComponent, Filter, Group, Inject, Page, Sort } from '@syncfusion/ej2-react-grids';

const DashboardForm = (props) => {

    const [rows, setRows] = useState([]);
    const { getCourses, getGrades } = useData();
    const [averages, setAverages] = useState([]);

    const getCoursesData = async () => {
        const gradesSnap = await getGrades();
        let grades = [];
        if (gradesSnap.size) {
            gradesSnap.forEach((doc) => {
                grades.push({ ...doc.data(), ...{ id: doc.id } });
            });
            return grades;
        }
    };

    function getDate(timestamp) {
        if (timestamp)
            return timestamp.toDate().toLocaleDateString('en-UK', { day: "numeric", month: "short", year: "numeric" });

        return "";
    }

    function groupBy(data, key) {
        return data.reduce(function (storage, item) {

            var group = item[key.toLowerCase()];
            storage[group] = storage[group] || [];
            storage[group].push(item);

            return storage;
        }, {});
    };

    useEffect(() => {

        getCoursesData().then((grades) => {
            var yearAverages = [];

            var years = groupBy(grades, 'Year');
            Object.keys(years).forEach(year => {

                var yearSum = 0;
                var courses = groupBy(years[year], 'Course');

                var courseAverages = [];

                Object.keys(courses).forEach(course => {
                    var courseSum = 0;
                    courses[course].forEach(g => {
                        courseSum += g.mark;
                    });

                    yearSum += courseSum;
                    var courseAverage = courseSum / courses[course].length;
                    courseAverages.push({course: course, average: courseAverage});
                });

                var yearAverage = yearSum / years[year].length;
                yearAverages.push({ year: year, average: yearAverage, courseAverages: courseAverages });
            });

            setAverages(yearAverages);

            var formattedGrades = [];

            grades.map(g => {

                formattedGrades.push({
                    Year: g.year+"",
                    Course: g.course,
                    Assignment: g.assignment,
                    Weight: g.weight + "%",
                    Grade: g.grade,
                    Mark: g.mark + "",
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
        showDropArea: false,
        captionTemplate: captionTemplate.bind(this)
    }

    const filterOptions = {
        mode: "Immediate"
    }

    function captionTemplate(args) {
        return <div>{groupCaption(args)}</div>
    }

    function groupCaption(args) {
        
        var name = args.field;

        var value = "";
        var average = "";

        if(name==='Year')
        {
            value = args.items[0].items[0].Year;
            average = averages.find(x=>x.year===value).average;
        }
        else if(name==='Course')
        {            
            value = args.items[0].Course;
            average = averages.find(x=>x.year===args.items[0].Year).courseAverages.find(x=>x.course===value).average;        
        }
        
        return name + " " + value + " - Final Mark: " + average;
    }

    return (
        <div style={{ height: 100 }}>

            <GridComponent dataSource={rows} allowFiltering={true} allowSorting={true} allowGrouping={true} groupSettings={groupOptions} filterSettings={filterOptions}>
                <ColumnsDirective>
                    <ColumnDirective field='Year' width='100' />
                    <ColumnDirective field='Course' width='100' />
                    <ColumnDirective field='Assignment' width='100' />
                    <ColumnDirective field='Weight' width='100' />
                    <ColumnDirective field='Grade' width='100' />
                    <ColumnDirective field='Mark' width='100' />
                    <ColumnDirective field='Feedback' width='100' />
                    <ColumnDirective field='Due Date' width='100' />
                    <ColumnDirective field='Date Submitted' width='100' />
                    <ColumnDirective field='Date Graded' width='100' />
                </ColumnsDirective>
                <Inject services={[Page, Sort, Filter, Group]} />
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
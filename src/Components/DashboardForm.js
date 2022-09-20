import React, {useState} from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'assignment', headerName: 'Assignment Name', flex: 1 },
    { field: 'weight', headerName: 'Weight (%)', flex: 1 },
    { field: 'grade', headerName: 'Grade', flex: 1 },
    { field: 'mark', headerName: 'Mark', flex: 1 },
    { field: 'feedback', headerName: 'Feedback', flex: 2 },
    { field: 'due_date', headerName: 'Due Date', flex: 1 },
    { field: 'submit_date', headerName: 'Date Submitted', flex: 1 },
    { field: 'graded_date', headerName: 'Date Graded', flex: 1 }
  ];

const rows = [
    { id: 1, assignment: 'Assignment 1', weight: 25, grade: "A1", mark: 100, feedback: "Great job!", due_date: "25/10/2021", submit_date:"20/10/2021", graded_date: "30/11/2021"},
    { id: 2, assignment: 'Assignment 2', weight: 25, grade: "A3", mark: 83, feedback: "Needs improving!", due_date: "15/11/2021", submit_date:"23/11/2021", graded_date: "05/12/2021"},
    { id: 3, assignment: 'Exam', weight: 50, grade: "A2", mark: 92, feedback: "Keep it up!", due_date: "11/12/2021", submit_date:"11/12/2021", graded_date: "07/01/2022"},
];

const DashboardForm = (props) => { 

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
import React, {useState} from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import DashboardForm from "../Components/DashboardForm";

const Dashboard = (props) => { 


    return ( 
        <div>
            <DashboardForm />
        </div>
    );
};

Dashboard.propTypes = {};

export default Dashboard;
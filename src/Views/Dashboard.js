import React, {useState} from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import DashboardForm from "../Components/DashboardForm";
import { useEffect } from "react";
import useAuth from "../services/firebase/useAuth";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const Dashboard = (props) => { 

    return (
        <div>
            <DashboardForm />
        </div>
    );
};

Dashboard.propTypes = {};

export default Dashboard;
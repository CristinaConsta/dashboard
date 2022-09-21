import {React, useState} from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";


const StyledParagraph = styled.p`
    text-align: center;
    color: ${ props => props.theme.colors.darkShade};
    align-items: center;
  `;

const StyledParagraphFormValidationErrors = styled.p`
    text-align: center;
    color: red;
`;

const StyledHeading1 = styled.h1`
    positition: absolute;
    padding-top: 5%;
    text-align: center;
    color: ${ props => props.theme.colors.lightRed};
`;

const LoginForm = (props) =>{
    const { onEmailSubmit, serverErrorMessage } = props;

    const schema = yup.object().shape({
        email: yup
            .string()
            .email("email is not valid")
            .required("you must enter an email"),
        password: yup
            .string()
            .required("password is required")
            .min(2, "password must be at least longer than two letters"),
    });

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({ resolver: yupResolver(schema) });

    // const onSubmit = (data) => {
    //     console.log(data);
    // };

    return(
        <>
         <StyledHeading1> Login </StyledHeading1>
           <form onSubmit = { handleSubmit(onEmailSubmit) }>
                <StyledParagraph>
                    <label>Email </label>
                    <input {...register("email", { required: true })}></input>
                </StyledParagraph>
                <StyledParagraphFormValidationErrors>{errors.email && errors.email?.message}</StyledParagraphFormValidationErrors>
    
                <br></br>
    
                <StyledParagraph>
                    <label>Password </label>
                    <input {...register("password", { required: true })}></input>
                </StyledParagraph>
                <StyledParagraphFormValidationErrors> {errors.password && errors.password?.message} </StyledParagraphFormValidationErrors>
                <br></br>
                <StyledParagraph>
                    <input type="submit" value="Login" ></input>
                </StyledParagraph>
            </form>
        </>
    )
}


LoginForm.propTypes={
    onEmailSubmit: PropTypes.func.isRequired,
    serverErrorMessage: PropTypes.string.isRequired
};

export default LoginForm ;
# **Assessments Dashboard Application**
## **Cristina Constantin - Contemporary Web Application**
### _2022, Solent University_

[Git Repository](https://github.com/CristinaConsta/dashboard.git)


# Introduction

The assessment dashboard application is meant to deliver a solution for a problem that I have discovered with the Solent university portal. It is about checking the assesments dates and grades in a single application and at any point we want to, because at the present moment the students need to work with two different applications and with missing elements in both of them. For the dashboard, we cannot filter by year of study, for example, and in the final grades application, there is no data for the past years and for the current year there will be available between the final marking and the start of the new year. Gathering data from other students, using surveys, I found out that there are more issues to address, such as filtering and sorting the assessments, or to see the learning evolution over the years of study. The project is designed to have a single dashboard for all the assessment, past and future, and must contain the grades and the marks for all of them, with the posibility of sorting or filtering the courses and their associated data.
The grades are already into the Firebase database, because the application is not designed to have a module for a admin or for the teachers, to update the assessment information. Google Firebase is a complex software for application development, which provides authentication and real-time No-SQL database, stored on cloud and therefore available to all the users at any time. Firebase accepts authentication with social media accounts, but, being an application that deals with sensitive information, like the student grades, I had to consider only the email and password authentication. [Firebase website](https://firebase.google.com/)
The application is designed for the Solent university students only and accesing the dashboard and the evolution panel are constrained by the login. Being an university application, highly secured, the users are created by the admin and my application must use the users provided. There is no registration, only login into the application, with the user defined for the Firebase database to authenticate, as provided below:
[email, password]
`dashboard@email.com, dashboard1234`
For the front-end development, I have chosen React framework, studied in the current semester, developed by Facebook as a JavaScript library for building complex interactive user interfaces from encapsulated components [React website](https://reactjs.org/). With React I could create a single-page application, capable to interact with the users updating dynamically the current web page with new data from the web server, which provides a much faster transition and a native application perception. Being a component-based framework, React helps to passing large data through the application without changing the state of the DOM and it can render on the server using Node js (https://nodejs.org/en/), using React Native.

# Methodology

## Methods


# Conclusion




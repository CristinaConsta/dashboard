# **Assessments Dashboard Application**
## **Cristina Constantin [5consc70@solent.ac.uk] - Contemporary Web Application**
### _2022, Solent University_

[Git Repository](https://github.com/CristinaConsta/dashboard.git)


# Introduction

The assessment dashboard application is meant to deliver a solution for a problem that I have discovered with the Solent university portal. It is about checking the assesments dates and grades in a single application and at any point we want to, because at the present moment the students need to work with two different applications and with missing elements in both of them. For the dashboard, we cannot filter by year of study, for example, and in the final grades application, there is no data for the past years and for the current year there will be available between the final marking and the start of the new year. Gathering data from other students, using surveys, I found out that there are more issues to address, such as filtering and sorting the assessments, or to see the learning evolution over the years of study. The project is designed to have a single dashboard for all the assessment, past and future, and must contain the grades and the marks for all of them, with the posibility of sorting or filtering the courses and their associated data.
The grades are already into the Firebase database, because the application is not designed to have a module for a admin or for the teachers, to update the assessment information. Google Firebase is a complex software for application development, which provides authentication and real-time No-SQL database, stored on cloud and therefore available to all the users at any time. Firebase accepts authentication with social media accounts, but, being an application that deals with sensitive information, like the student grades, I had to consider only the email and password authentication -[Firebase website](https://firebase.google.com/).
The application is designed for the Solent university students only and accesing the dashboard and the evolution panel are constrained by the login. Being an university application, highly secured, the users are created by the admin and my application must use the users provided. There is no registration, only login into the application, with the user defined for the Firebase database to authenticate, as provided below:
`email = dashboard@email.com, password = dashboard1234`
For the front-end development, I have chosen React framework, studied in the current semester, developed by Facebook as a JavaScript library for building complex interactive user interfaces from encapsulated components - [React website](https://reactjs.org/). With React I could create a single-page application, capable to interact with the users updating dynamically the current web page with new data from the web server, which provides a much faster transition and a native application perception. Being a component-based framework, React helps to passing large data through the application without changing the state of the DOM and it can render on the server using [Node js](https://nodejs.org/en/), using React Native. For styling the user interface and for creating the tables and the charts, I have used the [Bootstrap]( https://react-bootstrap.github.io/) and the [Styled-component]( https://styled-components.com/) libraries. 


# Methodology

Considering that my application has been developed in a short period of time and that I am the single programmer involved in this project, the software development cycle I opted for is [Waterfall]( https://business.adobe.com/blog/basics/waterfall#:~:text=What%20is%20the%20Waterfall%20methodology,before%20the%20next%20phase%20begins). 
This methodology is a sequential, chronological process, flowing through all the phases of a project, from gathering data to testing and having each step finished before the other starts, without iterations. It is a single-member team approach, starting with the data gathering and analysis. This type of cycle is shorter, cost efficient and well-defined, mostly because there are no new customer requests during the implementation and the developer is part of the analysis, being able to spot the faults from the beginning and knowing all the analysis aspects. One of the disadvantages is that the user testing is not possible until the end of the project, when is deployed.


## Methods

In my case, I have compiled the requirements from user personas and surveys conducted against Solent university students, to make sure I have enough information to develop a valuable application. The next phase in the Waterfall methodology is the design, that I have created using [Figma](https://www.figma.com/) designing online tool and that I explained extensively in the first report. The design follows the requirements of the students and, simultaneously, is limited to the details I thought of being able to produce during the implementation phase, the application development itself. The technical aspects are essential, although in most cases, having a solid analysis and design, should be the shortest and smoothest stage.
The next step is verification and testing and I have divided it. Firstly, I have conducted my own verification.
-	Checking for errors and exceptions by:
*	testing every functionality and every interface
* inputting invalid data
*	using the interface and accessing various controls in a random order, other than the logical one
-	Verifying the implementation of the requirements, one by one, checking the design and the list I had done in the analysis phase.
The second phase of testing, which in the real life is possible after the deployment, was the user-base one. I have asked two students that I already surveyed in the gathering step, to use my application and to evaluate it, having in mind few aspects:
*	if the requirements were implemented,
*	how easy is to use the application
*	if there are any errors occurring during the testing
*	in what grade the design was followed


# Conclusion

The result of testing, my own and of the users are satisfactory and I think that reflects my understanding of the subject and requirements, as well as the technical possibilities and the skills I have accumulated during this course. 
The application has a cloud-base database, which makes it usable from anywhere, although the application is not deployed on an online platform and this mean that must be run locally. 
There are no errors in the application, no defects that I should repair in the future. At every testing session the application had the same behaviour and a very good response from the database, that is in fact, instant.
The interface is intuitive, and the forms are correctly labelled, the paths are simple and explicit, hence the user is never lost between the pages. In the login form is implemented error checking and the messages displayed are explanatory. 
The application contains a single dashboard for all the courses and assessments, having displayed the grades as numbers and marks, the final grade per course and per year, as requested by the students. There is difference between the design and the implementation, consisting in the lack of filtering, although sorting and grouping are available and functional. This discrepancy is due to the layout I have chosen and that would require a long time to be adapted to the design needs.
The evolution page contains two charts, one per course and one per year of study, to be more explicit for the student, which will need only few seconds to understand his achievements and progress along the way.
The conclusion is that the application responds to the needs of the students and in a good amount covers the initial design and the technical requirements for this project. 



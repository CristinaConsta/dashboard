# **Assessments Dashboard Application**
## **Cristina Constantin [5consc70@solent.ac.uk] - Contemporary Web Application**
### _2022, Solent University_

[Git Repository](https://github.com/CristinaConsta/dashboard.git)


# Introduction

The assessment dashboard application is meant to deliver a solution for a problem that I have discovered with the Solent university portal. It is about checking the assessments dates and grades in a single application and at any point we want to, because at the moment the students need to work with two different applications and with missing elements in both of them. For the dashboard, we cannot filter by year of study, for example, and in the application containing the final grades, there is no data at all for the past years, and for the current year the information is only available in the short time between the final marking and the start of the new year. Gathering data from other students at the University, by means of surveys, I have found out that there are more issues to address than I had first considered, such as filtering and sorting the assessments, or to see the learning evolution over the years of study through meaningful charts. The project is designed to have a single dashboard for all the assessments, past and future, and must contain the grades and the marks for all of them (as they are marked), with the possibility of sorting or filtering the courses and their associated data.
The grades are already into the Firebase database, because the application is not designed to have a module for an admin or for the teachers, therefore there is no need to update the assessment information or indeed the user information. Google Firebase is a complex piece of software for application development, which provides authentication and real-time No-SQL data storage, stored on cloud, and therefore available to all the users at any time. Firebase accepts authentication with social media accounts, but being an application that deals with sensitive, university-related information, such as student grades, I could only consider using the email and password type of authentication - [Firebase website](https://firebase.google.com/)
The application is designed for the Solent university students only and accessing the dashboard and the evolution panel is constrained by the login. Being a university application and therefore highly secured, the users are created by the admin and my application must use the users provided. There is no registration, only login into the application, with the user defined for the Firebase database to authenticate, as provided below:
`email = dashboard@email.com, password = dashboard1234`
For the front-end development, I have chosen the React JavaScript framework, which I have been studying during the current semester. This framework was developed by Facebook as a library for building complex interactive user interfaces from encapsulated components with great ease [React website](https://reactjs.org/). With React, I would be able to create a single-page application, capable of interacting with the users, dynamically updating the current web page with new data from the web server as it gets added, changed, or removed, which provides a much faster transition and a native application perception. Being a component-based framework, React helps passing large volumes of data through the application without changing the state of the Document Object Model (DOM) and it can be rendered on the server using the [Node.JS](https://nodejs.org/en/) framework  and React Native. For styling the user interface and for creating the tables and the charts, I have used the [Bootstrap](https://getbootstrap.com/), [React-Bootstrap](https://react-bootstrap.github.io/), [Styled-component](https://styled-components.com/) and [Syncfusion](https://www.syncfusion.com/) component libraries. 



# Methodology

Considering that my application has been developed in a short period of time and that I am the sole programmer involved in this project, the software development cycle I opted for is the [Waterfall]( https://business.adobe.com/blog/basics/waterfall#:~:text=What%20is%20the%20Waterfall%20methodology,before%20the%20next%20phase%20begins) cycle. 
This methodology is a sequential, chronological process, flowing through all the phases of a project, from gathering data to testing and having each step finished before the other starts, without iterations. It is a single-member team approach, starting with the data gathering and analysis phases. This type of cycle is shorter, cost efficient and well-defined, mostly because there are no new customer requests during the implementation and the developer is part of the analysis, being able to spot the faults from the beginning and knowing all the analysis aspects. One of the disadvantages is that the user testing is not possible until the end of the project, when the project is deployed.



## Methods

In my case, I have compiled the requirements from user personas and surveys conducted with the help of fellow Solent university students, to make sure I have enough information to develop a valuable application. The next phase in the Waterfall methodology is the design phase, during which I have created an extensive mock-up using the [Figma](https://www.figma.com/) online designing tool. This phase was explained extensively in the first report. The design follows the requirements of the students and, simultaneously, is limited to the details I thought of being able to reproduce during the implementation phase, the application development itself, given the time constraints and personal knowledge and prowess regarding the technologies chosen. The technical aspects are essential, although in most cases, creating a solid analysis and meaningful design should be the shortest and smoothest stage in the Waterfall methodology.
The next step is verification and testing, and I have chosen to divide it. Firstly, I have conducted my own verification.
-	Checking for errors and exceptions by:
*	Testing every piece of functionality and every interface
*	Inputting invalid data
*	Using the interface and accessing various controls in a random order, other than the logical one
-	Verifying the implementation of the requirements, one by one, checking the design and the list of requirements I had done in the analysis phase.
The second phase of testing, which in a real-world scenario is only possible after the deployment, was the user-base one. I have asked two students that I had already surveyed in the gathering step, to use my application and to evaluate it, having in mind a few aspects:
*	Whether all the requirements were implemented successfully
*	The ease of using the application
*	Whether there are any errors that occur during the testing
*	The level to which the design was followed



# Conclusion

The result of testing, both my own and the testing done by the users are satisfactory, and it is my belief that this result reflects my understanding of the subject and requirements, as well as the technical possibilities and the skills I have accumulated during this course. 
The application has a Cloud database, which makes it usable from virtually anywhere, although the application is not deployed on an online platform, and this means that it must be run locally as it currently stands.
There are no errors that the users or I could find in the application, no defects that I should repair in the future. During every testing session that I conducted, the application had the same, expected behaviour, and there was always a very good response time from the database (that is in fact, instant).
The interface is intuitive, and the forms are all correctly labelled, all paths are simple and explicit, hence the user is never lost between the pages or suffers from broken links or erroneous browser history. In the login form, extensive error checking has been implemented solve any invalid or malicious inputs from the user, and the messages that are displayed to the user are self-explanatory and useful.
The application contains a single dashboard for all the courses and assessments a student has, having displayed the grades as both numbers and marks, as well as the final grade per course and per year, as requested by the students. 
There are differences between the design and the implementation, consisting in (but not necessarily limited to): 
*	The lack of credits achieved and the pair of start date – end date for each module
*	The way in which the different years of study are displayed (they are now part of the same table, instead of each having their own separate tab)
*	Sorting is more extensive than originally intended
*	The layout is quite different (I have opted to go for a data grid instead of cards)
*	The navigation bar has been changed from a vertical bar to a horizontal one
*	The charts do not reflect alpha-numeric grades, only marks
*	The data is not split by semester, only by course and year
*	There is no ‘forgot password’ check (this was done in great part because users would be administered by different applications in the real-world)
These discrepancies are due to the layout I have chosen, as well as further design considerations achieved during the implementation stage, and I feel that most differences are for the better, though some of the features missing in the final product could benefit the users.

The evolution page contains two charts, one per course and one per year of study, to be more explicit for the student, who will need only a few seconds to understand their achievements and progress along the way.
The conclusion is that the application responds to the needs of the students and in a good amount covers the initial design and the technical requirements for this project. 




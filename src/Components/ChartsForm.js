import * as React from "react";
import { useEffect, useState } from 'react';
import { Category, ChartComponent, ColumnSeries, DataLabel, Inject, Legend, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip, MultiLevelLabel, StripLine, RangeColorSettingsDirective, RangeColorSettingDirective } from '@syncfusion/ej2-react-charts';
import { compareByYear, getYearAverages } from '../utils';
import useData from "../services/firebase/useData";

const ChartForm = () => {

  const { getGrades } = useData();
  const [ categories, setCategories ] = useState([]);
  const [ courses, setCourses ] = useState([]);
  const [ years, setYears ] = useState([]);

  const getCoursesData = async () => {
      const gradesSnap = await getGrades();
      let grades = [];
      if (gradesSnap.size) {
          gradesSnap.forEach((doc) => {
              // if(doc.data().email === user.email)
              grades.push({ ...doc.data(), ...{ id: doc.id } });
          });
          return grades;
      }
  };

  function getYearCategories(marks)
  {
    // Set the year multi-levels
    var years = {};

    marks.forEach(m=>{
      if(years[m.Year])
        years[m.Year]++;
      else
        years[m.Year] = 1;
    });

    var categories = [];
    var startingPoint = -0.5;

    var yearKeys = Object.keys(years);

    for(var year = yearKeys[0]; year <= yearKeys[yearKeys.length-1]; year++)
    {
      var endPoint = startingPoint + years[year];
      categories.push({
        start: startingPoint,
        end: endPoint,
        text: "Year " + year
      });

      startingPoint = endPoint;
    }

    return categories;
  }

  useEffect(() => {

    // Get marks
    var courseMarks = [];
    var yearMarks = [];

    getCoursesData().then((courseData) => {

      getYearAverages(courseData).forEach(y=>{

        yearMarks.push({
          Year: "Year " + y.year,
          Mark: y.average
        });

        y.courseAverages.forEach(c=>{
          courseMarks.push({
            Year: y.year,
            Course: c.course,
            Mark: c.average
          })
        })
      });

      // Sort the marks by year
      courseMarks.sort(compareByYear);
        
      // Set the marks
      setCourses(courseMarks);
      setYears(yearMarks);

      setCategories(getYearCategories(courseMarks));
    });

  }, []);

  const primaryxAxisCourses =
  {
    valueType: 'Category',
    multiLevelLabels: [{
      categories: categories,
      border: { type: 'Brace', color: 'Black', width: 0.5 },
    }],
    labelIntersectAction: 'Rotate90',
    majorGridLines: { width: 0 } 
  };

  const primaryxAxisYears =
  {
    valueType: 'Category',
    labelIntersectAction: 'Rotate90',
  };

  const primaryyAxis = {
    title: 'Final Mark',
    minimum: 0,
    maximum: 100,
    interval: 10,
    stripLines: [
      { start: 70, end: 100, /*text: 'First',*/ color: 'green', opacity: 0.2, visible: true },
      { start: 60, end: 70, /*text: '2:1',*/ color: 'yellow', opacity: 0.5, visible: true },
      { start: 50, end: 60, /*text: '2:2',*/ color: 'yellow', opacity: 0.2, visible: true },
      { start: 40, end: 50, /*text: '3:0',*/ color: 'orange', opacity: 0.2, visible: true },
      { start: 0, end: 40, /*text: 'Fail',*/ color: 'red', opacity: 0.2, visible: true }
    ],
    legendSettings: {
      mode: 'Range',
      visible: true,
      toggleVisibility: false
    },
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
  }

  const tooltip = {
    enable: true,
    shared: false
  }

  const colorFail = ['red'];
  const colorThird = ['orange'];
  const colorTwoTwo = ['yellow'];
  const colorTwoOne = ['yellowgreen'];
  const colorFirst = ['green']

  return (
    <div>
      <ChartComponent id='courseChart' primaryXAxis={primaryxAxisCourses} primaryYAxis={primaryyAxis} title="Course Marks" tooltip={tooltip} height='100%' width='75%'>
        <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, LineSeries, Category, MultiLevelLabel, StripLine ]} />
        <SeriesCollectionDirective>
          <SeriesDirective dataSource={courses} xName='Course' yName='Mark' type='Column' name='Course Mark' cornerRadius={{ topLeft: 10, topRight: 10 }} />
        </SeriesCollectionDirective>

        <RangeColorSettingsDirective>
          <RangeColorSettingDirective label="Fail" start={1} end={40} colors={colorFail}></RangeColorSettingDirective>
          <RangeColorSettingDirective label="Third 3" start={41} end={49} colors={colorThird}></RangeColorSettingDirective>
          <RangeColorSettingDirective label="Lower Second 2:2" start={50} end={59} colors={colorTwoTwo}></RangeColorSettingDirective>
          <RangeColorSettingDirective label="Upper Second 2:1" start={60} end={69} colors={colorTwoOne}></RangeColorSettingDirective>
          <RangeColorSettingDirective label="First" start={70} end={100} colors={colorFirst}></RangeColorSettingDirective>
        </RangeColorSettingsDirective>
      </ChartComponent>
      
      <br />

      <ChartComponent id='yearChart' primaryXAxis={primaryxAxisYears} primaryYAxis={primaryyAxis} title="Year Marks" tooltip={tooltip} height='100%' width='25%'>
        <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, LineSeries, Category, StripLine ]} />
        <SeriesCollectionDirective>
          <SeriesDirective fill='darkred' dataSource={years} xName='Year' yName='Mark' type='Column' name='Year Mark' cornerRadius={{ topLeft: 10, topRight: 10 }} />
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
};

export default ChartForm;
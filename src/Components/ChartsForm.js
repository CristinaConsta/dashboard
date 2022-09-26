import * as React from "react";
import { useEffect, useState } from 'react';
import { Category, ChartComponent, ColumnSeries, DataLabel, Inject, Legend, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip, MultiLevelLabel, StripLine } from '@syncfusion/ej2-react-charts';
import { getDate, groupBy, compareByYear } from '../utils';
import useData from "../services/firebase/useData";

const ChartForm = () => {

  const { getGrades } = useData();
  const [ categories, setCategories ] = useState([]);
  const [ data, setData] = useState([]);

  /*const getCoursesData = async () => {
      const gradesSnap = await getGrades();
      let grades = [];
      if (gradesSnap.size) {
          gradesSnap.forEach((doc) => {
              grades.push({ ...doc.data(), ...{ id: doc.id } });
          });
          return grades;
      }
  };*/

  const marks = [
    { Course: 'OOP', Mark: 80, Year: 2 },
    { Course: 'Algorithms', Mark: 75, Year: 3 },
    { Course: 'Data analysis', Mark: 90, Year: 2 },
    { Course: 'Python', Mark: 87, Year: 1 },
    { Course: 'Java', Mark: 84, Year: 3 },
    { Course: 'Maths', Mark: 75, Year: 2 },
    { Course: 'Data science', Mark: 56, Year: 1 },
    { Course: 'Java 2', Mark: 74, Year: 3 },
    { Course: 'Maths 2', Mark: 65, Year: 2 },
    { Course: 'Artificial Intelligence', Mark: 43, Year: 2 },
  ]

  useEffect(() => {
    
    // Sort the marks by year
    marks.sort(compareByYear);
    
    // Set the marks
    setData(marks);
    
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

    setCategories(categories);

  }, []);

  const primaryxAxis =
  {
    valueType: 'Category',
    multiLevelLabels: [{
      categories: categories,
      border: { type: 'Brace', color: 'Black', width: 0.5 },
    }]
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
    ]
  }

  const tooltip = {
    enable: true,
    shared: false
  }

  return (
    <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title="Final Marks" tooltip={tooltip} height='100%'>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, LineSeries, Category, MultiLevelLabel, StripLine]} />
      <SeriesCollectionDirective>
        <SeriesDirective fill='green' dataSource={data} xName='Course' yName='Mark' type='Column' name='Final Mark' />
      </SeriesCollectionDirective>
    </ChartComponent>
  )
};

export default ChartForm;
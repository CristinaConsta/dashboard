import * as React from "react";
import { Category, ChartComponent, ColumnSeries, DataLabel, Inject, Legend, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip, MultiLevelLabel, StripLine } from '@syncfusion/ej2-react-charts';
import {getDate, groupBy} from '../utils';
import useData from "../services/firebase/useData";

const ChartForm = () => {

  const { getGrades } = useData();

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

  const data = [
    { Course: 'Oop', Mark: 45 },
    { Course: 'Data analysis', Mark: 75 },
    { Course: 'My course', Mark: 100 },
    { Course: 'Cool stuff', Mark: 83 },
    { Course: 'Course 1', Mark: 90 },
    { Course: 'Course 2', Mark: 97 },
    { Course: 'Course 3', Mark: 96 },
    { Course: 'Course 4', Mark: 78 },
    { Course: 'Course 5', Mark: 65 },
  ];

  const primaryxAxis = 
  { 
    valueType: 'Category',
    multiLevelLabels: [{
      categories: [
        {
          start: -0.5,
          end: 3.5,
          text: "Year 1"
        },
        {
          start: 3.5,
          end: 7.5,
          text: "Year 2"
        }
      ],
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
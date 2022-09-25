import * as React from "react";
import { Category, ChartComponent, ColumnSeries, DataLabel, Inject, Legend, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from '@syncfusion/ej2-react-charts';
import {getDate, groupBy} from '../utils';
import useData from "../services/firebase/useData";

const ChartForm = () => {

  const { getGrades } = useData();

  const getCoursesData = async () => {
      const gradesSnap = await getGrades();
      let grades = [];
      if (gradesSnap.size) {
          gradesSnap.forEach((doc) => {
              grades.push({ ...doc.data(), ...{ id: doc.id } });
          });
          return grades;
      }
  };

  const data = [
    { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
    { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
    { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
    { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
    { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
    { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
  ];

  const primaryxAxis = { valueType: 'Category' };

  return (
    <ChartComponent id='charts' primaryXAxis={primaryxAxis}>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, LineSeries, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='month' yName='sales' type='Column' name='Sales' />
      </SeriesCollectionDirective>
    </ChartComponent>
  )
};

export default ChartForm;
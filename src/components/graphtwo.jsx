import { Container} from 'react-bootstrap';
import Gtwo from '../styles/graphtwo.module.css'
import { useEffect, useState } from 'react';
import {Doughnut} from 'react-chartjs-2';
import {} from 'chart.js/auto'
export default function Graphtwo({donutdata}) {

    const [percentage,setPercentage]=useState(0)
    useEffect(() => {
        const incomeratio = donutdata.reduce((total, item) => total + parseInt(item.income), 0);
        
        const expenseratio = donutdata.reduce((total, item) => total + parseInt(item.expenses), 0);
      
        
        const per = (expenseratio/ incomeratio) * 100;
        setPercentage(per);
      }, [donutdata]);
    const DonutChart = () => {
        const otherratio=100-percentage
        const data2 = {
          labels: ['Expenses Percentage','Income Percentage'],
          datasets: [
            {
              data: [percentage,otherratio],
              backgroundColor: ['#FF4E71','#62FF83'],
            },
          ],
        };
      
        const options2 = {
          plugins: {
            title: {
              display: true,
              text: 'Expenses',
            },
          },
          responsive: true,
          maintainAspectRatio: false, 
          height: 200, 
        };
      
        return <Doughnut data={data2} options={options2} />;
      };
    return(
        <Container className={Gtwo.gtwodiv}>
            <h3>Percentage of Expenses</h3>
            <div className={Gtwo.donut}>
             <DonutChart/>
            </div> 
        </Container>
    );
};
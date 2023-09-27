import { Container} from 'react-bootstrap';
import Gone from '../styles/graphone.module.css'
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {} from 'chart.js/auto'
export default function Graphone({linedata}) {
    const [date,setDate]=useState([])
    const[expenses,setExpenses]=useState([])

    useEffect(()=>{
        const newdate = linedata.map((objdata) => objdata.date);
        const newexpenses=linedata.map((objdata) => objdata.expenses);
          setDate(newdate) 
          setExpenses(newexpenses)
    },[linedata])

    const LineChart = () => {
        const data = {
          labels: date,
          datasets: [
            {
              label: 'expenses by date',
              data: expenses ,
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              cubicInterpolationMode: 'monotone', 
            },
          ],
        };
      
        const options = {
          scales: {
             x: {
                  grid: {
                    display: false,
                  },
             },
            y: {
              beginAtZero: true,
              grid: {
                  display: false,
                },
            },
          },
          responsive: true,
          maintainAspectRatio: false, 
          height: 300, 

        };
      
        return <Line data={data} options={options} />;
      };
    return(
        <Container className={Gone.goneldiv}>
            <h3>Expenses by Date</h3>
            <div className={Gone.line}>
            <LineChart/>
            </div>
        </Container>
    );
};

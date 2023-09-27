import { Container} from 'react-bootstrap';
import Table from '../styles/expensetable.module.css'
//import {useEffect } from 'react';
export default function Expensetable({formdata,onDeleteRow}) {

    const centerStyle = {   //table style
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: '300px',
        overflow:'auto',
      };
      const tableHeaderStyle = {
        position: 'sticky',
        top: '0',
        background: 'white',
        zIndex: '1',
      };
      const handleDeleteRow = (index) => {
        const updatedData = formdata.filter((_, i) => i !== index); // filtering data for deleting rows
        onDeleteRow(updatedData);   // update the deleted data to original form data using this callback function

      };
      
     
    return(
        <Container className={Table.tablediv}>
            <h3>Expenses Records</h3>
            <div style={centerStyle}>
            <table className={Table.table} >
            <thead style={tableHeaderStyle}>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
              <th></th>
            </tr>
           </thead>
           <tbody>
                 {formdata.map((d,index)=>(
                    <tr key={index}>
                        <td>{d.date}</td>
                        <td>{d.description}</td>
                        <td>{d.expenses}</td>
                        <td><button onClick={() => {handleDeleteRow(index)}} className={Table.btn}>x</button></td>
                    </tr>
                ))}
            </tbody>
            </table>
            </div>
        </Container>
    );
};
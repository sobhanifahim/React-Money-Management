import initDiv from '../styles/initDiv.module.css'
import { Container} from 'react-bootstrap';
import Form from './form'
import Bal from './totalbalance'
import Exp from './totalExpense'
import Graphone from './graphone'
import Graphtwo from './graphtwo'
import Exptable from './expensetable'
import { useState } from 'react';
export default function Contain() {
  const[formdata,setFormdata]=useState([])
  const handleSubmit=(data)=>{
       setFormdata([...formdata,data])  //set from data state to pass the data to the expensetable component
       
  }
  const handleDeleteRow = (updatedData) => {
    setFormdata(updatedData);     // update the data after deleteing row from table
  };
    return(
        <div>
        <Container fluid className={initDiv.Container}>
           <Form onFormSubmit={handleSubmit}/>
           <div>
              <div style={{display:'flex',columnGap:'1.8rem',marginTop:'3.5%'}}>
                <Bal balancedata={formdata}/>
                <Exp expensedata={formdata}/>
              </div>
           <Exptable formdata={formdata} onDeleteRow={handleDeleteRow}/>
           </div>
           <div>
           <Graphone linedata={formdata}/>
           <Graphtwo donutdata={formdata}/>
           </div>
        </Container>
        </div>
    )
};

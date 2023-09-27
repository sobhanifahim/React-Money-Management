import { Container} from 'react-bootstrap';
import Exp from '../styles/totalExpense.module.css'
import { useState,useEffect } from 'react';
export default function Expense({expensedata}) {
    const [expense,setExpense]=useState(0)
    useEffect(()=>{
        const esum=expensedata.reduce((total,exp)=>{
            const totalexpense= exp.expenses.trim()!== '' ? parseInt(exp.expenses):parseInt(0)
            return total+totalexpense
        },0)
        setExpense(esum)

    },[expensedata])

    return(
        <Container className={Exp.expdiv}>
            <h3>Total Expense</h3>
              <p>৳ {expense}</p>
        </Container>
    );
};

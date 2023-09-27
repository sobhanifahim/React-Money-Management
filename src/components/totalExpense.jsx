import { Container} from 'react-bootstrap';
import Exp from '../styles/totalExpense.module.css'
import expimg from '../media/expenses.png' 
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
            <div className={Exp.imgdiv}>
            <img src={expimg} alt=''/>
            <h3 className={Exp.text}>Expenses</h3>
            </div>
              <b>৳ {expense}</b>
        </Container>
    );
};

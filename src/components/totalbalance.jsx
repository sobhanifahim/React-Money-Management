import { Container} from 'react-bootstrap';
import Bal from '../styles/totalBalance.module.css'
import { useState,useEffect } from 'react';
export default function Balance({balancedata}) {
    const[balance,setBalance]=useState(0)
    
    useEffect(() => {
        const sum = balancedata.reduce((total, item) => {
          // Parse the income value to an integer or treat it as 0 if it's empty
          const incomeValue = item.income.trim() !== '' ? parseInt(item.income) : parseInt(0);
          return (total + incomeValue)-item.expenses;
        }, 0);
    
        setBalance(sum);
      }, [balancedata]);
    
    return(
        <Container className={Bal.baldiv}>
            <h3>Balance</h3>
            
              <p >৳ {balance}</p>
        </Container>
    );
};

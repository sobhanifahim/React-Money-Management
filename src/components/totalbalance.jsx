import { Container} from 'react-bootstrap';
import Bal from '../styles/totalBalance.module.css'
import balimg from '../media/taka.png' 
import { useState,useEffect } from 'react';
export default function Balance({balancedata}) {
    const[balance,setBalance]=useState(0)
    
    useEffect(() => {
        const sum = balancedata.reduce((total, item) => {
         
          const incomeValue = item.income.trim() !== '' ? parseInt(item.income) : parseInt(0);
          return (total + incomeValue)-item.expenses;
        }, 0);
    
        setBalance(sum);
      }, [balancedata]);
    
    return(
        <Container className={Bal.baldiv}>
          <div className={Bal.imgdiv}>
            <img src={balimg} alt=''/>
            <h3 className={Bal.text}>Balance</h3>
            </div>
              <b >৳ {balance}</b>
        </Container>
    );
};

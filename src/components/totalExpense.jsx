import { Container} from 'react-bootstrap';
import Exp from '../styles/totalExpense.module.css'
export default function Expense() {
    return(
        <Container className={Exp.expdiv}>
            <h3>Total Expense</h3>
              <p>৳ 1000</p>
        </Container>
    );
};

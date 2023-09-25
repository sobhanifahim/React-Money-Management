import { Container} from 'react-bootstrap';
import Bal from '../styles/totalBalance.module.css'
export default function Balance() {
    return(
        <Container className={Bal.baldiv}>
            <h3>Balance</h3>
              <p>৳ 1000</p>
        </Container>
    );
};

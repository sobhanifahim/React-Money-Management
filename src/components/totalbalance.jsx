import { Container} from 'react-bootstrap';
import Bal from '../styles/totalBalance.module.css'
export default function Balance() {
    return(
        <Container className={Bal.baldiv}>
              <p>1000</p>
        </Container>
    );
};

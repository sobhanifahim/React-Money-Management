import initDiv from '../styles/initDiv.module.css'
import { Container} from 'react-bootstrap';
import Form from './form'
import Bal from './totalbalance'
export default function Contain() {
    return(
        <div>
        <Container fluid className={initDiv.Container}>
           <Form/>
           <Bal/>
        </Container>
        </div>
    )
};

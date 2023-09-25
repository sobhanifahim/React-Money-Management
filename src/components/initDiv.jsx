import initDiv from '../styles/initDiv.module.css'
import { Container} from 'react-bootstrap';
import Form from './form'
import Bal from './totalbalance'
import Exp from './totalExpense'
import Graphone from './graphone'
import Graphtwo from './graphtwo'
import Exptable from './expensetable'
export default function Contain() {
    return(
        <div>
        <Container fluid className={initDiv.Container}>
           <Form/>
           <div>
              <div style={{display:'flex',columnGap:'1.8rem',marginTop:'3.5%'}}>
                <Bal/>
                <Exp/>
              </div>
           <Exptable/>
           </div>
           <div>
           <Graphone/>
           <Graphtwo/>
           </div>
        </Container>
        </div>
    )
};

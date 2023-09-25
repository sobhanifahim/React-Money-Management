import { Container} from 'react-bootstrap';
import Table from '../styles/expensetable.module.css'
export default function Graphone() {
    return(
        <Container className={Table.tablediv}>
            <h3>Expenses Records</h3>
            <table className={Table.table}>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th></th>
                </tr>
            </table>
        </Container>
    );
};
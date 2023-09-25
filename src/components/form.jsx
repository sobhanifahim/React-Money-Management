import { Form,Container,Button} from 'react-bootstrap';
import form from '../styles/form.module.css'
export default function Inputs() {
    return (
    <Container fluid className={form.formcontainer}>
      <Form>
        <Form.Group controlId="formIncome">
            <Form.Label>Income</Form.Label>
            <Form.Control type="number" placeholder="Enter Todays income" className={form.input}/>
        </Form.Group>
        <Form.Group controlId="formExpense">
            <Form.Label>Expenses</Form.Label>
            <Form.Control type="number" placeholder="Enter Todays expense" className={form.input}/>
        </Form.Group>
        <Form.Group controlId="formExpense">
            <Form.Label>Expense Date</Form.Label>
            <Form.Control type="date" placeholder="" className={form.input}/>
        </Form.Group>
        <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="add a Description" className={form.input}/>
        </Form.Group>
        <Button variant="primary" className={form.btn}>Add</Button>
      </Form>
    </Container>
    );
};

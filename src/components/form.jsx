import { Form,Container,Button} from 'react-bootstrap';
import form from '../styles/form.module.css'
import { useState } from 'react';
export default function Inputs({onFormSubmit}) {
    const [income,setIncome]=useState(0);  //hooks to change state fpr input feilds of form
    const[expenses,setExpenses]=useState(0);
    const[date,setDate]=useState('')
    const[description,setDescription]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault(); //preventing the default behaviour of form while rendering
        
        if (!income || !expenses || !date || !description) {
            alert('Please fill in all required fields.'); // empty value handing
            return;
          }

         const formData={
            income,         // storing fr4om data as object 
            expenses,
            date,
            description,
         }
         onFormSubmit(formData);   //pass form datas as props 
    }

    return (
    <Container className={form.formcontainer}>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formIncome">
            <Form.Label>Income</Form.Label>
            <Form.Control type="number" placeholder="Enter Todays income" className={form.input} value={income} onChange={(e)=>{
                setIncome(e.target.value)
            }}/>
        </Form.Group>
        <Form.Group controlId="formExpense">
            <Form.Label>Expenses</Form.Label>
            <Form.Control type="number" placeholder="Enter Todays expense" className={form.input} onChange={(e)=>{
                setExpenses(e.target.value)
            }}/>
        </Form.Group>
        <Form.Group controlId="formExpense">
            <Form.Label>Expense Date</Form.Label>
            <Form.Control type="date" placeholder="" className={form.input} onChange={(e)=>{
                setDate(e.target.value)
            }}/>
        </Form.Group>
        <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="add a Description" className={form.input} onChange={e=>{
                setDescription(e.target.value)
            }}/>
        </Form.Group>
        <Button type='submit' variant="primary" className={form.btn}>Add</Button>
      </Form>
    </Container>
    );
};

import { Form,Container} from 'react-bootstrap';
import form from '../styles/form.module.css'
import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web'
export default function Inputs({onFormSubmit}) {
    const [income,setIncome]=useState(0);  //hooks to change state fpr input feilds of form
    const[expenses,setExpenses]=useState(0);
    const[date,setDate]=useState('')
    const[description,setDescription]=useState('')

    const [state, toggle] = useState(true)
    const { x } = useSpring({
      from: { x: 0 },
      x: state ? 1 : 0,
      config: { duration: 300 },
    })

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
        <animated.button type='submit' variant="primary" className={form.btn} onClick={() => toggle(!state)}
        style={{
            scale: x.to({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
            }),
          }}
        >Add</animated.button>
      </Form>
    </Container>
    );
};

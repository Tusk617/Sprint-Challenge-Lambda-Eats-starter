import React, {useState} from "react";
import * as yup from 'yup';
import axios from 'axios';

const formSchema = yup.object().shape({
    name: yup.string().required("Please include your name so we know if we have the right person!"),
    pizzaSize: yup.string().required("Pizza size is required"),
    // pizzaTopping: yup.string().required("plz"),
    pepperoni: yup.string(),
    cheese: yup.string(),
    sausage: yup.string(),
    pineapple: yup.string(),
    instructions: yup.string()
})

function Order() {

    const [formState, setFormState] = useState({
        name: '',
        pizzaSize: '',
        // pizzaTopping: '',
        instructions: ''
    })

    const [errors, setErrors] = useState({
        name: '',
        pizzaSize: '',
        // pizzaTopping: '',
        instructions: ''
    })

    const [post, setPost] = useState([]);

    const validation = event => {
        yup.reach(formSchema, event.target.name)
        .validate(event.target.value)
        .then(() => {
            setErrors({
                ...errors, [event.target.name]: ""
            })
        })
        .catch(err => {
            setErrors({
                ...errors, [event.target.name]: err.errors[0]
            })
        })
    
    }

    const inputChange = event => {
        event.persist();
        const newFormData = {
            ...formState, [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
        }
        validation(event);
        setFormState(newFormData);
    }

    const submit = event => {
        event.preventDefault();
        console.log("sending Data")
        axios.post('https://reqres.in/api/users', formState)
        .then(response => {
            setPost(response.data);
            console.log("success!", formState);
        })
    }
    return (
            <form onSubmit={submit}>
                <label htmlFor = "name">
                    Name:
                    <input 
                        id = "name"
                        type = "text"
                        name = "name"
                        value= {formState.name}
                        onChange= {inputChange}
                    />
                    {2 > errors.name.length ? (<p className="error">{errors.name}</p>) : null}
                </label><br />

                <label htmlFor = "pizzaSize">
                    Select pizza size:
                    <select id="pizzaSize" name="pizzaSize" value={formState.pizzaSize} onChange={inputChange}>
                        <option>None</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </select>
                </label><br />

                <label htmlFor="pizzaTopping"> Select desired toppings:<br />
                    <input 
                        id = "pepperoni"
                        name="pepperoni"
                        type="checkbox"
                        value= {formState.pizzaTopping}
                        onChange= {inputChange}
                    /> Pepperoni <br />
                    <input 
                        id = "cheese"
                        name="cheese"
                        type="checkbox"
                        value= {formState.pizzaTopping}
                        onChange= {inputChange}
                    /> Cheese <br />
                    <input 
                        id = "sausage"
                        name="sausage"
                        type="checkbox"
                        value= {formState.pizzaTopping}
                        onChange= {inputChange}
                    /> Sausage <br />
                    <input 
                        id = "pineapple"
                        name="pineapple"
                        type="checkbox"
                        value= {formState.pizzaTopping}
                        onChange= {inputChange}
                    /> Pineapple(gross) <br />

                </label><br />

                <label htmlFor="instructions">
                    Any special requests?:<br />
                    <input 
                        name="instructions"
                        type="text"
                        value= {formState.instructions}
                        onChange= {inputChange}
                    />
                </label><br />

                <pre>{JSON.stringify(post, null, 2)}</pre>
                    <button id="submitButton">Submit Order!</button>
                
            </form>
    )
}

export default Order;
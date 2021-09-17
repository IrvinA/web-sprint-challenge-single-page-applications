import React, { useState, useEffect } from "react";
import schema from '../validation/formSchema';
import * as yup from 'yup';
import axios from "axios";

const initialFormValues = {
    name: '',
    size: '',
    topping1: false,
    topping2: false,
    topping3: false,
    topping4: false,
    topping5: false,
    topping6: false,
    topping7: false,
    topping8: false,
    special: ''
}

const initialFormErrors = {
    name: '',
    size: '',
}

const initialDisabled = true

export default function Form() {
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)

    const postNewOrder = newOrder => {
        axios.post('https://reqres.in/api/orders', newOrder)
            .then(res => {
                console.log(res.data);
            }).catch(err => console.error(err))
    }

    const validate = (name, value) => {
        yup.reach(schema, name)
            .validate(value)
            .then(() => setFormErrors({ ...formErrors, [name]: '' }))
            .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
    }

    const inputChange = (name, value) => {
        validate(name, value);
        setFormValues({ ...formValues, [name]: value })
    }

    const formSubmit = () => {
        const newOrder = {
            name: formValues.name.trim(),
            size: formValues.size,
            toppings: [
                'topping1',
                'topping2',
                'topping3',
                'topping4',
                'topping5',
                'topping6',
                'topping7',
                'topping8'
            ].filter(topping => !!formValues[topping]),
            special: formValues.special
        }
        postNewOrder(newOrder);
        setFormValues(initialFormValues);
    }

    useEffect(() => {
        schema.isValid(formValues).then(valid => setDisabled(!valid))
    }, [formValues])

    const onSubmit = evt => {
        evt.preventDefault()
        formSubmit()
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        inputChange(name, valueToUse)
    }

    return (
        <form onSubmit={onSubmit}>
            <div className='form title'>
                <h2>Customize your pizza</h2>
            </div>
            
            <div className='error'>
                <div>{formErrors.name}</div>
                <div>{formErrors.size}</div>
            </div>

            <div className='form input'>
                <h3>New Order</h3>
                <div>
                    <label>Name
                        <input 
                            value={formValues.name}
                            onChange={onChange}
                            name='name'
                            type='text'
                        />
                    </label>
                    <label>Size
                        <select 
                            value={formValues.size}
                            onChange={onChange}
                            name='size'
                        >
                            <option value=''>- Select a size -</option>
                            <option value='xtrasmall'>Extra Small 10in</option>
                            <option value='small'>Small 14in</option>
                            <option value='medium'>Medium 18in</option>
                            <option value='large'>Large 22in</option>
                            <option value='xtralarge'>Extra Large 26in</option>
                        </select>
                    </label>
                </div>
                <div className='form meats'>
                    <h4>Meat Toppings</h4>
                    <label>Pepperoni
                        <input
                            type='checkbox'
                            name='topping1'
                            checked={formValues.topping1}
                            onChange={onChange}                    
                        />
                    </label>
                    <label>Sausage
                        <input
                            type='checkbox'
                            name='topping2'
                            checked={formValues.topping2}
                            onChange={onChange}                    
                        />
                    </label>
                    <label>Ham
                        <input
                            type='checkbox'
                            name='topping3'
                            checked={formValues.topping3}
                            onChange={onChange}                    
                        />
                    </label>
                    <label>Anchovies
                        <input
                            type='checkbox'
                            name='topping4'
                            checked={formValues.topping4}
                            onChange={onChange}                    
                        />
                    </label>
                </div>
                <div className='form veggies'>
                    <h4>Veggie Toppings</h4>
                    <label>Red Onion
                        <input
                            type='checkbox'
                            name='topping5'
                            checked={formValues.topping5}
                            onChange={onChange}                    
                        />
                    </label>
                    <label>Olives
                        <input
                            type='checkbox'
                            name='topping6'
                            checked={formValues.topping6}
                            onChange={onChange}                    
                        />
                    </label>
                    <label>Mushrooms
                        <input
                            type='checkbox'
                            name='topping7'
                            checked={formValues.topping7}
                            onChange={onChange}                    
                        />
                    </label>
                    <label>Pineapple
                        <input
                            type='checkbox'
                            name='topping8'
                            checked={formValues.topping8}
                            onChange={onChange}                    
                        />
                    </label>
                </div>
                <div className='form special'>
                <label>Special instructions
                    <input
                        type='text'
                        name='special'
                        checked={formValues.special}
                        onChange={onChange}                    
                    />
                </label>
                </div>
            </div>
        </form>
    )
}
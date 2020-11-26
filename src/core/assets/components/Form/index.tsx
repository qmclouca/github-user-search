import React, { useState } from 'react';
import SearchForm from '../SearchForm';
import { makeRequest } from '../utils/request';
import './styles.scss';
import '../types/types'

type FormState = {
    name: string;
}

const Form = () => {
    const [formData, setFormData] = useState<FormState>({
        name: ''
    });
    
    /*captura o que o usuário digitou no input e grava no estado name*/
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log({name,value});
        setFormData(data => ({...data,[name]:value}));
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
    }
 
    return (
        <form onSubmit={handleSubmit}>
        <SearchForm title="Encontre um perfil Github">
                 <input 
                    value={formData.name}
                    name="name"
                    type="text" 
                    className="form-control mb-5 "
                    onChange={handleOnChange}
                    placeholder="Usuário Github"
                    />
        </SearchForm>
        </form>
    )
}

export default Form;

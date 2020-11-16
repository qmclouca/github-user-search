import React, { useState } from 'react';
import SearchForm from '../SearchForm';
import { makeRequest } from '../utils/request';
import './styles.scss';

type FormState = {
    name: string;
    location: string;
    company: string;
    bio: string;
}

type FormEvent = React.ChangeEvent<HTMLInputElement>;

const Form = () => {
    const [formData, setFormData] = useState<FormState>({
        name: '',
        location:'',
        company:'',
        bio: ''
    });

    const handleOnChange = (event: FormEvent) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData(data => ({ ...data, [name]: value}));
    }
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const payload = {
            ...formData,
            name: [{id : formData.name}]
        }
       makeRequest({url:'', method:'POST', data:payload})
        .then(() => {
            setFormData({name: '', location: '', company: '', bio: ''});
        });
    }

    return (
        <form onSubmit={handleSubmit}>
        <SearchForm title="Encontre um perfil Github">
                <input 
                    name="name"
                    value={formData.name}
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

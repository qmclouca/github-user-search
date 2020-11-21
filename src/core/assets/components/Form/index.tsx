import React, { useState } from 'react';
import SearchForm from '../SearchForm';
import { makeRequest } from '../utils/request';
import './styles.scss';

type FormState = {
    name: string;
    location: string;
    company: string;
    bio: string;
    avatar_url: string;
    blog:string;
    public_repos: string;
    followers:string;
    following:string;
    created_at:string;
}

type FormEvent = React.ChangeEvent<HTMLInputElement>;

const Form = () => {
    const [formData, setFormData] = useState<FormState>({
        name: '',
        avatar_url:'',
        company:'',
        blog:'',
        location:'',
        public_repos:'',
        followers:'',
        following:'',
        created_at:'',
        bio: ''
});

    const handleOnChange = (event: FormEvent) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData(data => ({ ...data, [name]: value}));
        console.log(value);
    }
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const payload = {
            ...formData,
            name: [{id : formData.name}],
            avatar_url: [{id : formData.avatar_url}],
            company: [{id : formData.company}],
            blog: [{id : formData.blog}],
            location: [{id : formData.location}], 
            public_repos: [{id : formData.public_repos}],
            followers: [{id : formData.followers}],
            following: [{id : formData.following}],
            created_at: [{id : formData.created_at}],
        }
       makeRequest({url:'', method:'GET', data:payload})
        .then(() => {
            setFormData({name: '', location: '', company: '', bio: '',
            avatar_url:'', blog:'', public_repos:'', followers:'',
            following:'', created_at:''});
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

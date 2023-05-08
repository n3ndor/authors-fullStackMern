import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthorForm = () => {
    const [name, setName] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:8000/author', { name })
            .then((response) => {
                console.log(response);
                navigate('/');
            })
            .catch((err) => {
                console.log(err.response); // Add this line
                setErrors(err.response.data.errors);
            });
    };

    return (
        <div>
            <Link to={'/'}>Home</Link>
            <form onSubmit={onSubmitHandler}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name" // Add the id attribute
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <br />
                {errors.name && <p className="error-message">{errors.name.message}</p>}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AuthorForm;

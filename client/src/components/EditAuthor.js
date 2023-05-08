import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditAuthor = (props) => {
    const { id } = useParams();
    const [authorName, setAuthorName] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get('http://localhost:8000/author/' + id)
            .then((response) => {
                setAuthorName(response.data.name);
            })
            .catch((err) => {
                console.log("Error object:", err); // Add this line to log the entire error object
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            });
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();

        axios
            .put('http://localhost:8000/author/' + id, { name: authorName })
            .then((response) => {
                console.log(response);
                navigate('/');
            })
            .catch((err) => {
                console.log("Error object:", err); // Add this line to log the entire error object
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            });
    };

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                value={authorName}
                id="name"
                onChange={(e) => setAuthorName(e.target.value)}
            />

            <button type="submit">Submit</button>
            {errors && errors.name && <p className="error-message">{errors.name.message}</p>}


        </form>
    );
};

export default EditAuthor;

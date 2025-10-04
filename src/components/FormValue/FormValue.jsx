import React from 'react';

const FormValue = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        console.log(name)
    }


    return (
        <form onSubmit={handleSubmit}>
            <input className='border' type="text" name="name" id="" placeholder='Name' />
            <br />
            <input type="email" name="email" id="" className='border' placeholder='Email'/>
            <br />

            <button type="submit">Submit</button>
        </form>
    );
};

export default FormValue;
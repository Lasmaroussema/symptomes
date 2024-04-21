// Form.jsx
import React, { Fragment, useEffect, useState } from 'react';
import './Form.css';
import Chart from './Chart';
const Form = () => {
    // localStorage.setItem('inputs', JSON.stringify([]))
    const [fetchedInputs, setFetchedInputs] = useState([])
    useEffect(() => {
        const inputs = JSON.parse(localStorage.getItem('inputs')) || [];
        setFetchedInputs([...inputs]);
    }, []);
    const [formData, setFormData] = useState({
        pain: 0,
        fatigue: 0,
        mood: 0,
        otherInfo: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const inputs = JSON.parse(localStorage.getItem('inputs')) || [];
        inputs.push(formData);
        localStorage.setItem('inputs', JSON.stringify(inputs));
        setFetchedInputs([...inputs])
    };
    

    return (
        <Fragment>
            <div className="form-container">
                <h2>Enter Your Symptomes</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="pain">Pain:</label>
                        <input
                            type="number"
                            id="pain"
                            name="pain"
                            value={formData.pain}
                            onChange={handleChange}
                            min={0}
                            max={100}
                            step={1}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fatigue">fatigue:</label>
                        <input
                            type="number"
                            id="fatigue"
                            name="fatigue"
                            value={formData.fatigue}
                            onChange={handleChange}
                            required
                            min={0}
                            max={100}
                            step={1}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mood">mood:</label>
                        <input
                            type="number"
                            id="mood"
                            name="mood"
                            value={formData.mood}
                            onChange={handleChange}
                            required
                            min={0}
                            max={100}
                            step={1}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="otherInfo">Other Informations</label>
                        <input
                            type="text"
                            id="otherInfo"
                            name="otherInfo"
                            value={formData.otherInfo}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
            <div className='container-fluid'>
                <div className='row'>
                    {fetchedInputs.map(input => <div className='col-12 col-md-6 col-ld-4'><Chart data={input} /></div>)}
                </div>
            </div>
        </Fragment>
    );
};

export default Form;

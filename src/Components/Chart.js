// Chart.jsx
import React from 'react';
import './Chart.css'; // Import CSS file for styling

const Chart = ({ data }) => {
    const moyenne  = (parseInt(data.pain) + parseInt(data.fatigue) + parseInt(data.mood)) / 3
    console.log(moyenne)
    return (
        <div className="chart-container">
            <div className="d-flex flex-column" style={{height: '100%'}}>
                <div className='d-flex align-items-end justify-content-center'>
                    <div className='me-2' style={{width: '7px', height: `${data.pain}px`, backgroundColor: data.pain < 30 ? "green" : data.pain < 70 ? "yellow" : "red"}}></div>
                    <div className='me-2' style={{width: '7px', height: `${data.fatigue}px`, backgroundColor: data.fatigue < 30 ? "green" : data.fatigue < 70 ? "yellow" : "red"}}></div>
                    <div style={{width: '7px', height: `${data.mood}px`, backgroundColor: data.mood < 30 ? "green" : data.mood < 70 ? "yellow" : "red"}}></div>
                </div>
                <p>{data.otherInfo}</p>
                <p>{moyenne < 30 ? 'Sain' : moyenne < 70 ? 'Tired' : 'You need a doctor'}</p>
            </div>
        </div>
    )
}
export default Chart;

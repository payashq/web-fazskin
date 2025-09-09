import React from 'react';
export default function Card() {
    return (
        <div className="card">
            <div className="card-image">
                <img src="/spa-ilust.jpg" alt="" style={{width:'100%', height:'50%', borderRadius:'10px 10px 0 0'}}/>
            </div>
            <div className="card-content">
                <h3>Perawatan Wajah</h3>    
                <p>Perawatan wajah komprehensif untuk berbagai masalah kulit, termasuk jerawat, penuaan, dan hidrasi.</p>
            </div>
        </div>
    )
}
import React from 'react';
import Card from './Card.jsx';

export default function Content2() {
    return (
            <div className='content-web'>
                <div className="container-2">
                    <h2>Layanan Kami</h2>
                    <div className='card-container'>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                    </div>
                </div>
            </div>
    )
}
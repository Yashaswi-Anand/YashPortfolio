import React from 'react'

function FilpCard({cards}) {
    return (
        <div className="card-container">
            {cards && cards.map((card, index) => (
                <div className="card" key={index}>
                    <div className="card-inner">
                        <div className="card-front">
                            <p>{card.front}</p>
                        </div>
                        <div className="card-back">
                            <p>{card.back}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FilpCard
/** @format */

import React from 'react'

function Spendings({ spendings }) {
    return (
        <section className="data-section">
            <h2>Spendings</h2>
            <div className="data-item-container">
                {spendings.map((spending, index) => (
                    <article key={index} className="data-item spendings-item">
                        <h3>{spending.category}</h3>
                        <p>${spending.spent}</p>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Spendings

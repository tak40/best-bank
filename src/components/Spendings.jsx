/** @format */

import React from 'react'
import { formatCurrency } from '../utils'

function Spendings({ spendings }) {
    // Find the maximum spending amount for the relative bar widths
    let maxSpending = Math.max(...spendings.map(s => Number(s.spent)))

    // Set the minimum and maximum width percentages for the bars
    const minBarWidthPercent = 40 // Minimum width for the smallest bar
    const maxBarWidthPercent = 100 // Maximum width for the largest bar

    return (
        <section className="data-section">
            <h2>Spendings</h2>
            <div className="data-item-container">
                {spendings.map((spending, index) => {
                    // Calculate the width of each bar as a percentage of the max spending
                    let widthPercentage =
                        (Number(spending.spent) / maxSpending) *
                        (maxBarWidthPercent - minBarWidthPercent)

                    // Add the minimum width percentage so that even the smallest spending amount has a visible bar
                    widthPercentage += minBarWidthPercent
                    
                    return (
                        <article
                            key={index}
                            className="data-item spendings-item"
                            style={{ width: `${widthPercentage}%` }}
                        >
                            <h3>{spending.category}</h3>
                            <p>{formatCurrency(spending.spent)}</p>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default Spendings

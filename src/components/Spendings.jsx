/** @format */

import React from 'react'

function Spendings({ data }) {
    return (
        <section>
            <h2>Spendings</h2>
            <div>
                {data.map(account => (
                    <div key={account.id}>
                        {account.spendings.map(spending => {
                            const { category, spent } = spending
                            return (
                                <article key={spending.category}>
                                    <h3>{category}</h3>
                                    <p>${spent}</p>
                                </article>
                            )
                        })}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Spendings

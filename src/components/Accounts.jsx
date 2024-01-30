/** @format */
import React from 'react'

function Accounts({ data }) {
    return (
        <section>
            <h2>Accounts</h2>
            <div>
                {data.map((account) => {
                    const { id, title, balance } = account
                    return (
                        <article key={id}>
                            <h3>{title}</h3>
                            <p>${balance}</p>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default Accounts
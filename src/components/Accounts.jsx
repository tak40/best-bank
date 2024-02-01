/** @format */
import React from 'react'

function Accounts({ data, onAccountSelect, selectedAccountId}) {
    return (
        <section className="data-section">
            <h2>Accounts</h2>
            <div className="data-item-container">
                {data.map(account => (
                    <article
                        key={account.id}
                        className="data-item accounts-item"
                        onClick={() => onAccountSelect(account.id)}
                    >
                        <h3>{account.title}</h3>
                        <p>${account.balance}</p>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Accounts

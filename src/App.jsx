/** @format */

import React, { useState } from 'react'
import Accounts from './components/Accounts'
import ButtonSection from './components/ButtonSection'
import Header from './components/Header'
import Spendings from './components/Spendings'
import accounts from './data/AccountsData'

function App() {
    const [selectedAccountId, setSelectedAccountId] = useState(
        accounts[0].id
    )

    return (
        <div className="app-container">
            <Header />
            <ButtonSection />
            <div className="data-container">
                <Accounts
                    data={accounts}
                    onAccountSelect={setSelectedAccountId}
                    selectedAccountId={selectedAccountId}
                />
                <Spendings
                    spendings={
                        accounts.find(
                            account => account.id === selectedAccountId
                        )?.spendings || []
                    }
                />
            </div>
        </div>
    )
}

export default App

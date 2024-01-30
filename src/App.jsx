/** @format */

import React from 'react'
import Accounts from './components/Accounts'
import ButtonSection from './components/ButtonSection'
import Header from './components/Header'
import Spendings from './components/Spendings'
import accounts from './data/AccountsData'

function App() {
    return (
        <>
            <Header />
            <ButtonSection />
            <Accounts data={accounts} />
            <Spendings data={accounts} />
        </>
    )
}

export default App

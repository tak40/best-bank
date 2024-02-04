# BestBank Application

## Project Overview

The BestBank application is a financial dashboard that allows users to view and manage their accounts and spending activities. Developed as part of the Scrimba Frontend Bootcamp solo project, it aims to provide a user-friendly interface to track personal finances.

## Technical Stack

- **Frontend**: React (JSX, useState)
- **Styling**: CSS
- **Code Editor**: Visual Studio Code
- **Source Control**: Git and GitHub

## Core Functionalities

- **Account Viewing**: Users can view different bank accounts and their respective balances.
- **Spending Tracking**: Users can track their spending across different categories.
- **Interactive UI**: Clicking on different accounts updates the displayed spendings dynamically.
- **Styling**: The application is styled to match a provided Figma design, with bars representing spending amounts.

## Challenges and Solutions

- **State Management**: Initially, managing the state for dynamic display of spendings was challenging. This was resolved by using the `useState` hook to track the selected account and update the displayed spendings.
- **Dynamic Styling**: Added logic to dynamically adjust the width of spending bars relative to the highest expense.
- **Currency Formatting**: Implemented a utility function to format currency values according to the locale.

## Future Improvements

- Implement more interactive features, such as adding, removing, or editing account entries.
- Integrate with a backend to manage data persistently.
- Add user authentication to personalize dashboards.

## Running the Project

Quick start:

```
$ npm install
$ npm start
````

Head over to https://vitejs.dev/ to learn more about using vite
## About Scrimba

At Scrimba our goal is to create the best possible coding school at the cost of a gym membership! 💜
If we succeed with this, it will give anyone who wants to become a software developer a realistic shot at succeeding, regardless of where they live and the size of their wallets 🎉
The Frontend Developer Career Path aims to teach you everything you need to become a Junior Developer, or you could take a deep-dive with one of our advanced courses 🚀

- [Our courses](https://scrimba.com/allcourses)
- [The Frontend Career Path](https://scrimba.com/learn/frontend)
- [Become a Scrimba Pro member](https://scrimba.com/pricing)

Happy Coding!

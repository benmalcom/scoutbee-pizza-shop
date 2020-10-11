[![CircleCI](https://circleci.com/gh/benmalcom/scoutbee-pizza-shop.svg?style=shield)](https://circleci.com/pipelines/github/benmalcom/scoutbee-pizza-shop)


## Getting Started

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

### `Follow up answers`

1. Question: How would you deal with customers, who would like to create their own pizza: base dough plus their favourite ingredients.

   Answer: I assume there will be some constraint in this scenario: for example, the customers' favourite ingredients cannot be outside the list of ingredients 
   supplied by the company (since they're the one eventually making the pizza). Having said that, on the pizza (product) listing page, we can have a pizza-builder section 
   which allows customers to select ingredients according to their preference, with each ingredient selection having its own cost implication. It can be a simple interface like
   the one in the dashboard, but with extra information about the total cost as the ingredient changes (by selecting and deselecting). 
   
2. Question: How would you deal with a customer, who would like to add some extras? For example, I would like to get extra cheese in all pizzas in my order and extra tomatoes in one of the pizzas.
    
    Answer: The pizza making process should be flexible, meaning the composition of each pizza item should be open to addition of more ingredients before it is delivered
    to the customer, so long it is within the standards of making pizza and its status is not 'Ready'. On the technical side, the ingredients of every pizza made should be open to updates (Addition only).
    We can update multiple pizza by grouping them (as an order or assigning a group name, depending on the architecture), and then updating the ingredients of this group. 
    For example in the pizza list table, we could select multiple rows of pizza with waiting Status, and then click a CTA button which opens up a modal consisting of lists of ingredients, 
    then we can select additional ingredients we want (probably with quantity per cost, since it is extra) and apply. This should update all the ingredients of the selected rows, and of course the waiting time will increase. 

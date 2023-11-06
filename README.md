## SSRP Developer test, Part 2
For part 2 of the developer test, you will create a chat filter that will filter our messages containing blacklisted words or symbols.

### Word lists
The words we want to filter out are classified into 3 categories:
- Warn: If a player uses a word from this list, delete the message and warn the user
- Symbol: If a player uses a symbol from this list, delete the message and warn the user
- Kick: If a player uses a word from this list, kick the user

You're free to choose how to store these words, but we recommend using a JSON file. If you run into issues with importing the JSON file, you can use a TypeScript file instead.
Please only use example words for the word lists.

### Requirements
- The filter should be case insensitive, and should not be affected by spaces or characters around the word (If apple is a filtered word, "a p p l e", "aPpLe" and "bapples" should all trigger the filter)
- The filter should automatically check all incoming chat messages
- The filter should take the correct action based on the word list the word is in, the priority is Kick > Warn > Symbol (kick has the highest priority, symbol has the lowest)
- An export that allows the filter to be used in other resources should be created
- You should implement a unit test for the filter, the test should check that the filter works as intended

If you're running into issues with unit tests failing beacause you're not testing anything, add expect(true).toBe(true) to the test function.

A basic unit test is provided for both server and client side, you can run the tests with `npm run test`

### TypeScript boilerplate
- The project is set up to use TypeScript, the boilerplate expects you to use NPM not Yarn
- All NPM commands must be run from the ./src folder
- Before you start working on the project, run `npm install` to install the required packages, types for FiveM are already included
- To build the project, run `npm run build`
- To run the unit tests, run `npm run test`

### Notes
There should be no need to add more packages to the project, if you do so please explain why in your submission. Packages that over simplify the task will lead to an automatic rejection.

If you're stuck or have any questions, don't hesitate to ask us for help.

### Submission
When you're done, please submit your solution as a pull request to this repository. If you're not familiar with pull requests, you can also send us a zip file of your solution in the Discord ticket.

Your code should be well documented and easy to read, please briefly explain any choices you've made in your submission.
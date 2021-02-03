# Learning MERN

This repository will be used for understanding the MERN Stack.

Switch through the different branches to get an indepth understanding of each element

## Node

Node is a run time environment for executing JavaScript code outside of the browser.
We can use Node to build API's - these power the client application.
It is ideal for highly-scalable, data-intensive, and real-time back end services that power our client apps.

## Installation

Download [here](https://nodejs.org/en/download/)

To check that you have installed it correctly - open a terminal and type `node -v`.

### Modules

Modules are a collection of JavaScript files which are kept sepearate to reduce coupling and increase coheasion.

### Node Package Manager

Node Package Manager - or "NPM" helps us manage our packages by providing a MASSIVE  online repository for every node app under the sun.

Take a look for yourself under [www.npmjs.com](www.npmjs.com)

To create a Node application - first we need to initialise it with the command

`npm init`

This will turn the current folder into a new node project.
Running the above command will ask us for some information about the project such as the name, description, entry point of the application, git repo, author and so on.

If you would like to use the default values - then add the flag `-y` to the end of the `npm init` command.

All of our dependencies are stored in a `.json` file - specifically under `package.json`.
This will keep track of all the dependencies that we import and save into our project.

Dependencies can be found on the npmjs website, and imported into our project by running the command:

`npm install --save <dependencyname>`

*Ensure you run the command in the same directory as your package.json*

The `--save` flag saves the dependency to your `package.json`.

All of the dependencies will be pulled into a folder called `node_modules`

**PLEASE DO NOT PUSH THIS FOLDER UP TO YOUR GIT REPOSITORY** - speaking from experience, it will take HOURS and SIGNIFICANTLY slow down the process of any git operations.

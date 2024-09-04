
# ToDo List React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Table of Contents

- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Features](#features)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This React application is a simple ToDo list that allows users to add, toggle, and delete tasks. It uses local storage to persist the list of tasks across browser sessions.

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

You need to have Node.js and npm installed. You can download Node.js from [nodejs.org](https://nodejs.org/), which includes npm.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/vyshnav0/React-Todo-App
   ```

2. Navigate to the project directory:

   ```bash
   cd react-todo-app
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload if you make edits.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`

Removes the single build dependency from your project. Note that this is a one-way operation. Once you eject, you can’t go back!

## Project Structure

- `src/` - Contains the main source code.
  - `App.js` - Main application component that manages the state of the ToDo list.
  - `TodoList.js` - Component that renders the list of ToDos.
  - `TodoItem.js` - Component that renders a single ToDo item.
  - `NewToDoForm.js` - Component for adding new ToDos.

## Features

- Add new ToDo items
- Toggle ToDo item completion status
- Delete ToDo items
- Persistent storage using local storage

## Usage

1. Open the application in your browser.
2. Use the form to add new ToDo items.
3. Check or uncheck items to mark them as completed.
4. Click the delete button to remove items from the list.

## Contributing

If you wish to contribute to this project, please fork the repository and make a pull request with your changes. You can also open issues for discussion.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```


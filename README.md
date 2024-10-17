# Todo App in Express

## Overview

This Todo app is built using Express.js, providing a simple interface for managing tasks. It supports features such as creating, reading, updating, and deleting tasks (CRUD operations). Users can add tasks with descriptions, mark them as complete, and remove them from the list. The app is designed to be minimal, efficient, and easy to use.

## Features

- Add new tasks with descriptions.
- View all tasks in the list.
- Mark tasks as complete or incomplete.
- Edit task details.
- Delete tasks.

## Prerequisites

Before running the app, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/)
- [NPM](https://www.npmjs.com/get-npm)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/todo-app-express.git
   cd todo-app-express
2. Install dependencies:
   ```bash
   npm install
3. Start the server:
   ```bash
   npm start
The app will run on http://localhost:3000.

## API Endpoints

### 1. Get All Tasks

* **Endpoint**: `/tasks`
* **Method**: `GET`
* **Description**: Retrieves all tasks.

### 2. Create a New Task

* **Endpoint**: `/tasks`
* **Method**: `POST`
* **Description**: Creates a new task.
* **Body**:
    ```json
    {
        "name": "Your task name"
        "description": "Your task description"
    }
    ```

### 3. Update a Task

* **Endpoint**: `/tasks/:id`
* **Method**: `PUT`
* **Description**: Updates the details of a task.
* **Body**:
    ```json
    {
        "description": "Updated description",
        "status": "Completed"
    }
    ```

### 4. Delete a Task

* **Endpoint**: `/tasks/:id`
* **Method**: `DELETE`
* **Description**: Deletes a task by ID.

## Technologies Used

* **Express.js**: Web framework for Node.js.
* **Node.js**: Server environment.

## Future Enhancements

* Add user authentication.
* Filter tasks based on their status (completed/incomplete).
* Add due dates and task prioritization.

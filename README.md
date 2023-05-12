# Description
A simple Todo List

# General Structure:
1. A ToDoList class that holds an array of ToDoItem objects + add( ) + remove( ) + complete( ).
A ToDoItem objects = { 
	title: "taskTitle", 
	description: "content", 
	dueDate: mm-dd-yyyy, 
	priority: [Low|Medium|High]
}

2. Separate lists of 'todos'. Users should be able to create new projects and choose which 
project their todos go into. 
3. Separating your application logic ( creating new todos/ setting todos as complete/ changing 
todo priority, etc) from the DOM-related stuff. 
4. Appearance:
- View all projects.
- View all todos in each project (title and duedate + color for different priorities). 
- Expand a single todo to see/edit its details. 
- Delete a todo. 
5. Webpack: date-fns
6. Web Storage API: localStorage



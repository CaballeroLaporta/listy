 Listy

- A to do app for daily tasks

## User Stories

  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
  
  **Signup:** As an anon I can sign up in the platform so that I can start saving my tasks
  
  **Login:** As a user I can login to the platform so that I can see my tasks
  
  **Logout:** As a user I can logout from the platform so no one else can use it 


  **List tasks** As a user I can see my monthly/daily tasks 

  **Add a task** As a user I can add a task, with an expiration date, description and upload files

   **task detail** As a user I can see the detail of a task
  
  **modify a tasks** As a user I can modify a task 

  **Delete a task** As a user I can delete a task


## Backlog

  **drag & drop:** As a user I would like to chenge the order of the tasks

  **add task to a calendar:** As a user I want to see a calendar with bullets indicating the dates i have tasks

  **share task list** As a user I would like to share my tasks throught 

  **add file:** As a user I would like to add upload files

  **notification:** As a user I would like to have a notification when the task is closee to the expire date

  **show completed task:** As a user I would like to see the tasks that i have completed


  
# Client

## Routes

 - / - Homepage
  - /auth/signup - Signup form
  - /auth/login - Login form
  - /list-task - tasks
  - /tasks/:id - tasks detail
  

  ### Backlog


## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()

- Tasks Service
  - getall()
  - getone(id)
  - createone(data)   
  - modifyone(id)
  - deleteone(id)

## Pages

- 404/500 Page
- Sign in Page
- Log in Page
- Home Page
- Monthly task List Page
- daily task List page
- Task detail

## Components

- 6 pages
- Navbar component
- Task list component
- Task Card component
- Login form component
- Signup form component

## IO

- INPUT - task List component
- OUTPUT - task card component

## Guards

- if logged in cannot access login/signup page
- if not logged in cannot access monthly task list page

# Server

## Models

  User model

  ```
  username - String // required
  password - String // required
  email - String // required & unique
  ```

  Task model

  ```
  name - String // required
  date - Date // required
  Description - String
  uploadfile - String
```

## API Endpoints/Backend Routes


  
   - / - Homepage
  - GET /auth/me - Signup for
  - POST /auth/signup - Signup form  ==> body(user, password, email)
  - POST /auth/login - Login form  ==> body(email, password)
  - POST /auth/logout -  

  - GET /list-tasks
  - GET /tasks/:id - task detail
  - POST /create-task - task form ==> (body data)
  - DELETE /delete-task - ==>(Body task id)
  - PUT /modify-task ==>(Body task id)

## links

- https://trello.com/b/jKnPjzOu/listy
- https://github.com/CaballeroLaporta/listy (frontend)
- https://github.com/CaballeroLaporta/listy-backend (backend)




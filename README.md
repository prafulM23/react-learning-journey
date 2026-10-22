# React Learning Journey 🚀

My daily journey of learning React from basics to advanced concepts.

## Day 01 — React Basics

### Topics Learned

* What is React
* React components
* JSX
* JavaScript expressions in JSX
* Using variables in JSX
* Creating functional components
* Rendering multiple components

### Practice

* Created my first React application using Vite
* Practiced JSX syntax
* Used JavaScript variables inside JSX
* Used JavaScript expressions inside JSX
* Created reusable components
* Created `Header`, `Profile`, and `Footer` components
* Rendered multiple components inside `App`

### Tech Used

* React
* JavaScript
* Vite
* ESLint

### Key Learning

React allows us to build user interfaces using reusable components.

JSX allows us to write HTML-like syntax inside JavaScript.

JavaScript expressions can be used inside JSX with `{}`.

### Day 01 Status

✅ Completed

## Day 02 — Props

### Topics Learned

- What are Props
- Passing data from Parent to Child
- Multiple Props
- Props Destructuring
- Reusable Components
- Props are Read-only
- `children` Prop

### Practice

- Passed name,  city and role using Props
- Used Props destructuring
- Reused the same component with different data
- Practiced the `children` Prop

### Key Learning

Props are used to pass data from a parent component to a child component.

Props are read-only and should not be modified inside the child component.

The same component can be reused with different data using Props.

### Day 02 Status

✅ Completed

## Day 03 — Events & Event Handling

### Topics Learned

- `onClick`
- Event Handler Functions
- Passing Arguments to Event Handlers
- `onChange`
- Event Object
- `event.target`
- `event.target.value`
- `onSubmit`
- `event.preventDefault()`

### Practice

- Handled button click events
- Passed values to event handler functions
- Read input values using `onChange`
- Used the Event Object
- Used `event.target.innerText`
- Created a form using `onSubmit`
- Prevented default form submission behavior
- Created a Login Form using React events

### Key Learning

Events allow React applications to respond to user actions such as clicks, typing, and form submission.

The Event Object provides information about the element and action that triggered the event.

### Day 03 Status

✅ Completed

## Day 04 — React useState

### Topics Learned

- Introduction to `useState`
- Initial State
- Updating State
- Re-rendering the UI when state changes
- Boolean State
- Conditional Rendering
- Ternary Operator

### Practice

- Created a Counter App
- Implemented Increase, Decrease
- Created a Show/Hide Text toggle button
- Updated state using `setCount` and `setIsVisible`
- Changed button text based on state

### Key Learning

`useState` is a React Hook used to manage state in functional components.

When state changes, React re-renders the component and updates the UI.

Conditional rendering allows us to display content based on a condition.

### Day 04 Status

✅ Completed

## Day 5: React Forms & Controlled Inputs

### Topics Covered
- Practiced controlled inputs using `useState`.
- Used `value` and `onChange` to manage input fields.
- Displayed input data on button click.
- Handled form submission using `onSubmit`.
- Used `event.preventDefault()` to prevent page reload.
- Practiced form validation using `required`.
- Used `type="email"` for email validation.
- Managed multiple form fields using object state.
- Updated object state using the spread operator (`...formData`).
- Created a Clear button to reset input fields and displayed data.
- Practiced storing submitted form data in an array.

### Practice Project
Created a form with Name and Email inputs, a Show button to display submitted data, and a Clear button to reset the form.

### Key Learnings
- How controlled inputs work in React.
- How to manage multiple input fields.
- How to handle form submission and validation.
- How to update object state without losing existing properties.
- How to reset form fields and displayed data.

**Status:** Day 5 Completed ✅

## Day 6: Conditional Rendering

### Topics Covered
- Conditional rendering using `if/else`
- Ternary operator (`? :`)
- Logical AND operator (`&&`)
- Login/Logout toggle using `useState`
- Role-based conditional rendering using nested ternary
- Showing content based on conditions
- Age-based voting eligibility condition

### Practice
- Displayed different messages based on login status.
- Showed the Dashboard only when logged in.
- Displayed different messages for Admin and User roles.
- Rendered content based on count and age conditions.

### Key Learning
Conditional rendering allows us to display different UI elements based on conditions and application state.
**Status:** Day 6 Completed ✅

## Day 7: Lists, map(), filter() & Product Search

### Topics Covered
- Rendering lists using `map()`
- Rendering arrays of objects
- Using the `key` prop with unique IDs
- Displaying product data in an HTML table
- Filtering products based on price using `filter()`
- Creating a product search using `useState`
- Handling input with `value` and `onChange`
- Searching products using `includes()`
- Case-insensitive search using `toLowerCase()`
- Showing a "Product not found" message when there are no matches

### Practice Project: Product List & Search
- Created a product list with ID, name, and price.
- Filtered products based on their price.
- Added a search input and Find button.
- Displayed matching products in a table.
- Used unique product IDs as React keys.

### Key Learning
- `map()` transforms array items into JSX elements.
- `filter()` creates a new array containing items that match a condition.
- `useState` stores and updates component state.
- `includes()` checks whether text contains a search term.
- `key` helps React identify list elements.

## Day 8: React useEffect Hook

### Topics Covered
- Introduction to the `useEffect` hook
- Using `useEffect` with `useState`
- Dependency array: `[]` and `[value]`
- Running effects when state changes
- Understanding the cleanup function
- Updating the browser tab title using `document.title`
- Using `setInterval()` inside `useEffect`
- Cleaning up timers using `clearInterval()`
- Understanding effect setup and cleanup
- Managing timer state with Start, Stop, and Reset buttons

### Practice Projects

**1. State Change Effect**
- Created a counter using `useState`.
- Used `useEffect` to detect changes in state.
- Logged messages when the effect ran.

**2. Browser Tab Title**
- Updated the browser tab title whenever the counter changed.
- Used `document.title` inside `useEffect`.

**3. Timer with Cleanup**
- Created a timer using `setInterval()`.
- Used a functional state updater to increment seconds.
- Cleaned up the interval using `clearInterval()`.

**4. Start, Stop, and Reset Timer**
- Added Start, Stop, and Reset buttons.
- Used `isRunning` state to control the timer.
- Used the dependency array to manage timer setup and cleanup.
- Disabled buttons when the corresponding action was unavailable.

### Key Learnings
- `useEffect` handles side effects in React components.
- An empty dependency array runs the effect on mount, with cleanup on unmount.
- A dependency array such as `[count]` reruns the effect when `count` changes.
- Cleanup prevents unnecessary timers and resource leaks.
- The functional state updater helps update state using its previous value.
- React Strict Mode may run an extra setup and cleanup cycle in development.

## Day 9: API Fetching in React

### Topics Covered
- Fetching data from an API using `fetch()`
- Using `useEffect` for API requests
- Storing API data using `useState`
- Displaying API data using `map()`
- Handling loading states
- Handling errors using `.catch()`
- Checking HTTP responses using `response.ok`
- Using `.finally()` to stop loading
- Searching API data using `filter()`
- Case-insensitive search using `toLowerCase()` and `includes()`

### Practice Project: API Users List
- Fetched users from JSONPlaceholder API.
- Displayed user names on the screen.
- Added a loading message while fetching data.
- Displayed an error message if the request failed.
- Added a search input to find users by name.
- Displayed "No users found" when no matching user exists.

### Key Learnings
- `fetch()` sends a request to an API.
- `response.json()` converts the response into JavaScript data.
- `useState` stores API data and UI state.
- `useEffect` runs the API request when the component mounts.
- `map()` renders the users list.
- `filter()` finds matching users without modifying the original array.
- `catch()` handles request errors.
- `finally()` runs after the request succeeds or fails.

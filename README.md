# React useState Hook: Direct State Modification
This repository demonstrates a common mistake when using the `useState` hook in React: directly modifying the state variable instead of using the setter function.  This leads to the component not re-rendering correctly.

## Bug
The bug lies in `bug.js`.  The `count` variable is incremented directly instead of using the `setCount` function.  React doesn't detect this direct manipulation, so the UI doesn't reflect the change.

## Solution
The solution, in `bugSolution.js`, shows the correct approach: always update state using the setter function provided by `useState`. This ensures React correctly updates the component's display.
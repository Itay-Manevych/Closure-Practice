# **FormService:**

1. **implement a closure function that will manage any form it will get.**
2. **mandatory arguments:**
    * form parent element - string(html)
    * onSubmit - function
3. **function return object:**
    * onSubmit method
    * isValid - boolean
    * onResetForm method
4. **usages:**
    * create form implementing your service with those inputs:
        1. First Name
        2. Last Name
        3. Email
        4. Age
5. **requirements:**
    * **you must not use browser native inputs validation.**
    * your form service will support inputs types:
        1. text - must be at least 2 characters
        2. number - must be number
        3. email - must be email convention
    * by every submit click you must validate all supported inputs.
    * add under every input error text colored by red if validation is not passing.
    * only if validation passes call onSubmit argument.



# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](/assets/images/Capture%20d'écran%202024-04-06%20174608.png)

### Links

- Solution URL: [Solution](https://your-solution-url.com)
- Live Site URL: [Live Site](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

Learned about checkValidity() method. Useful to check default required conditions of the html.

```js
if (email.checkValidity()) {
  registeredMail = email.value;
  document.getElementById('mail').textContent = registeredMail;
  document.querySelector('.signup').classList.add('hidden');
  document.querySelector('.success').classList.remove('hidden');
}
```

### Continued development

Write less CSS and optimize my media queries.

## Author

- Frontend Mentor - [@Mouwvfic](https://www.frontendmentor.io/profile/@mouwaficbdr)
- Twitter - [@DevOnRoad](https://www.twitter.com/DevOnRoad)

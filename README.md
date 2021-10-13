# HTML CSS and JavaScript Practice

This is my new official website (I recreated it from my old WordPress website).

## Table of contents
- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview
I had initially created my personal website on WordPress using Elementor (A drag and drop page builder) because for many years I have been a graphic designer (Illustrator and Photoshop expert) and a web & UI/UX designer (WordPress, Elementor, Figma, Divi expert) with no coding skills.

When I was accepted to [Google Africa Developer Scholarship (GADS 2021)] and started learning HTML, CSS and JavaScript, I wanted oneof the projects I chose to do for practice was to recreat a replica of the WordPress website by coding it.

After years of using drag-and-drop builders on WordPress, I can say learning HTML, CSS and Javascript has really opened up my eyes to opportunities that i neer knew existed before.


### The challenge
- Recreate my visually-built WordPress website by coding it in HTML, CSS and JavaScript.
<!-- - After creating it, I wanted to make it my official website by hosting it on GitHub. That means I will no longer continue working on the WordPress version of the website. This website is now where to find me. -->


<!-- ### Screenshot
I took screenshots of the web page and added them to the `/the-web-page-screenshots` folder. 
[Here's a screenshot of the website on mobile screens](./my-final-results/desktop-result.png)
[Here's a screenshot of the website on tablet screens](./my-final-results/mobile-result.png)
[Here's a screenshot of the website on desktop screens](./my-final-results/tablet-result.png) -->

<!-- 
### Links to the original and new websites
- Original WordPress URL: [Add solution URL here](https://your-solution-url.com)
- The new live site URL on GitHub: [Add live site URL here](https://your-live-site-url.com) -->


## My process
While I understand that checking online for solutions as I work on a project is important for me as a developer, I wanted to see if I could work on a single page project without watching or copying any tutorial.

The goal was to create a fully working website by applying the knowledge I've gained from the Pluralsight courses I've watched in the GADS 2021 program.


### I built this web page using:
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript


### What I learned
[Mobile-first-Approach]
By using a mobile-first worlflow, I was able to keep the css lean and clean from the start. 

When I first started practicing HTML, CSS by watching YouTube tuts, I was using a desktop-first approach, which meant more work in styiling it for other devices. 

Because I wanted the website to work well on mobile, I had to make the mobile menu look and work properly as well.

Below's the JS code snippet I used to achieve the toggle effect:

```JavaScript
function toggleMobileMenu() {
    const myMenu = document.getElementById('mobileMenu');
    if (myMenu.style.display === 'block') {
        myMenu.style.display = 'none';
    } else {
        myMenu.style.display = 'block';
    }
}
```

### Continued development
I would like to continue learning adding more pages and features to the website as I learn new concepts in HTML, CSS and JS. One of the feature I'd like to add is a sign-up form that saves user data to a database.


### Useful resources
- [Pluralsight Courses](https://www.pluralsight.com) - 
Plurasight courses are really helping me understand how to develop websites and web applications. By the time we finish the GADS program in DEC 2021, I want to have become a top-notch Mobile Web Specialist.


## Author
- Website - [www.kenmbesa.co.ke](https://www.kenmbesa.co.ke)
- Twitter - [@kenmbesa](https://www.twitter.com/kenmbesa)


## Acknowledgments
Many thanks to [Andela](https://www.andela.com), [Pluralsight](https://www.pluralsight.com) and Google for putting together the GADS program. 


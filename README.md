# library-app

https://email362.github.io/library-app/index.html
---
![App Screenshot](https://user-images.githubusercontent.com/13335957/125001286-19f7df80-e007-11eb-9ab3-f2e0e94d323e.png)
---

Library app is a web app built using vanilla JavaScript, HTML, and CSS that holds user inputted books in a digital library to
keep track of what you've read and what you want to read. The app has the ability to toggle the 
read status of the book as well as delete and add books that would like to be added and deleted.
Currently doesn't have memory but looking to implement local storage as well as some sort of cloud 
database setup in the future.

---

# Plan
**Q:** What is the interface used?

**A:** The user interacts with the app through their browser that accesses the site built using HTML, CSS, and JavaScript.

**Q:** What will the inputs be?

**A:** The user inputs the title, author, page count, and read status of the book they would like to add through a small input
form at the top of the page. They can also press a delete button or read button that can delete the book where the button is present
or change the read status of the book.

**Q:** What will the outputs be?

**A:** The output would be the display of the book collection that the user has decided on.

**Algorithm (Pseudocode):**

- [ ] Problem 1: Create front-end user interface

- [ ] Problem 2: Create functions to bring functionality to page

- [ ] Problem 3: Connect functions to interface

# Divide and Conquer
Division of the main problems into smaller pieces to be able to properly focus and function on one piece at a time to finish the project in an efficient manner.

## Problem 1: Create front-end user interface

* HTML Structure
  * Header
    * Page Title
    * Input Form
      * New Title
      * New Author
      * New Page Total
      * Read Status
      * Submit Button
  * Bookshelf
    * Book Entry
      * Buttons
        * Delete Button
        * Status Button
      * Title
      * Author
      * Total Pages
      * Read Status

* CSS
  * background cover page
  * align header center
  * choose book size, font, and colors
  * set bookshelf to flexbox for easy row manipulation and responsivity

## Problem 2: Create functions

* Book constructor

  * Usage: function used to create new book objects
  * Input: title, author, page count, read status
  * Output: object containing all the above properties

* addToLibrary Function
  * Usage: push new book to library display and add it to the bookshelf element
  * Input: none
  * Output: new dom element representing the book displayed in the bookshelf element

* removeBookFromLibrary Function
  * Usage: remove chosen book from display and from the library array
  * Input: array index of book to be destroyed
  * Output: removal of book from bookshelf 

* displayLibrary Function
  * Usage: read through the library array and display each book in the bookshelf element
  * Input: takes in an array, default array is myLibrary, but looking to add cloud storage
  * Output: a display of all books in the library, displayed in the bookshelf element

* changeStatus Function
  * Usage: change the read status from Read to Unread and vice versa on a book
  * Input: array index of book to be changed
  * Output: change the read status in the book object in library and reflect that on the element in the bookshelf

## Problem 3: Connect Front-End to Functions

* Use DOM methods and eventListeners to tie appropriate DOM elements to their appropriate function

## Future Plans/Updates

* Add permanent storage
* Pretty up the CSS a bit more
* Create full responsivity

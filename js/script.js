/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/**
 * This `showPage` function will create and insert/append the elements needed to display a "page" of nine students
 *
 * @param {array} list - This parameter represents an array of student objects.
 * @param {number} page - This parameter represents the requested page number.
 */

function showPage(list, page) {
   // The following two variables represent the index for the first and last student on the page
   const startIndex = (page * 9) - 9;
   const endIndex = page * 9;

   // Selecting the element with a class of `student-list` and assign it to the variable `studentList`
   const studentList = document.querySelector('.student-list');

   // Removing any existing students that might have been displayed previously.
   studentList.innerHTML = '';

   // A For loop that runs once for each object over the length of the `list` parameter.
   for (let i = 0; i < list.length; i++) {
      // Conditional statement to display the proper students.
      // if `i` is greater than or equal to the `startIndex` variable and less than the `endIndex` variable. 
      // The students at these indexes are the ones we want to display on the page.
      if (i >= startIndex && i < endIndex) {

         // Creating the elements needed to display the student information.
         let studentItem = document.createElement('li');
         studentItem.className = 'student-item cf';
         studentList.appendChild(studentItem);
         // insert the above elements
         studentItem.insertAdjacentHTML("afterbegin",
            `<div class="student-details">
            <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
            <h3>${list[i].name.first} ${list[i].name.last}</h3>
            <span class="email">${list[i].email}</span>
          </div>
          <div class="joined-details">
            <span class="date">${list[i].registered.date}</span>
          </div>
         `);

      }
   }

}



/**
 * This `addPagination` will create and insert/append the elements needed for the pagination buttons.
 * @param {array} list - This parameter represents an array of student objects.
 */

function addPagination(list) {

   // A variable called `numOfPages` to calculate the number of pages needed.
   const numOfPages = Math.ceil(list.length / 9);

   // Selecting the element with a class of `link-list` and assign it to the variable `linkList`.
   const linkList = document.querySelector('.link-list');

   // Removing any existing pagination buttons that might have been displayed previously.
   linkList.innerHTML = '';

   // A For loop that runs once over the number of pages needed: `numOfPages`.
   for (let i = 1; i <= numOfPages; i++) {

      // Creating the elements needed to display the pagination button. I have used the traversal method.
      let li = document.createElement('li');
      let button = document.createElement('button');
      button.type = 'button';
      button.textContent = i;
      li.appendChild(button);
      // insert the above elements
      linkList.appendChild(li);

   }

   // Giving the first pagination button a class of "active"
   const firstButton = linkList.firstElementChild.firstElementChild;
   firstButton.className = 'active';


   // Evvent listener on the `link-list` element.
   linkList.addEventListener('click', (e) => {
      // if the click target is a button:
      if (e.target.tagName === 'BUTTON') {
         // Then remove the "active" class from the previous button
         const previousButton = document.querySelector('.link-list .active');
         previousButton.className = '';
         // And add the active class to the clicked button element.
         const clickedButton = e.target;
         clickedButton.className = 'active';

         // Calling the showPage function passing the `list` parameter and page to display as arguments.
         showPage(list, clickedButton.textContent);
      }
   });
}

// Search Form
function search()  { 

   // Creating the elements needed to display a search Component dynamically.
   const header = document.querySelector('.header');
   const label = document.createElement('label');
   const input = document.createElement('input');
   const span = document.createElement('span');
   
   label.htmlFor = 'search';
   label.className = 'student-search';
   header.appendChild(label);

   input.type = 'search';
   input.id = 'search';
   input.placeholder = 'Search by name...';
   label.appendChild(input);

   span.textContent = 'Search by name';
   label.insertBefore(span, input);
   
   label.insertAdjacentHTML("beforeend", 
   `<button type="button">
      <img src="img/icn-search.svg" alt="Search icon">
   </button>`
   );

}


// Call functions
showPage(data, 1);
addPagination(data);
search();
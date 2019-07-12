/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];



function menuComponent (menuItems){
const menu = document.createElement ('div');
menu.classList.add('menu');
const ul = document.createElement('ul');
menu.appendChild(ul); 
const li = {}

menuItems.forEach((menuItems, i )=> {
  console.log(menuItems)
 li[i]= document.createElement('li');
li[i].textContent=menuItems; 
ul.appendChild(li[i]);
});

const menuButton = document.querySelector('.menu-button');

console.log('menu-button', menuButton)
menuButton.addEventListener('click', () => {
  console.log('click')
  menu.classList.toggle('menu--open');
});

return menu;
}

const menu = menuComponent(menuItems);
const header = document.querySelector('.header');
header.appendChild(menu);
// Step 1: Write a function that will create a menu component as seen below:
// /* <div class="menu">
//     <ul>
//       {each menu item as a list item}
//     </ul>
//   </div> */

/* 

  

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

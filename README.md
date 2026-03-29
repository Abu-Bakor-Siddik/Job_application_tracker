1. Difference between getElementById,getElementByClassName,querySelector,querySelectorAll
=> getElementById is used to select a element using its id. getElementByClassName is used to select multiple element that has same class name. querySelector uses CSS Selector and returns only the first matching element. querySelectorAll also uses CSS Selector but it returns all matching elements.

2. Creating and Inserting a new element into the DOM
=> First we have to use document.createElement(),then add content like text or html then to finally insert it into page we have to use method like- appendChild(),append.

3. Event Bubbling
=> It is a process where an event starts from its target element and then moves upward to its parent until the root.

4. Event Delegation
=> a way where instead of adding event listener  to multiple child elements , use it in the parent element and handle all children under that parent.

5. Difference between preventDefault() and stopPropagation()
=> preventDefault() is used for stop browser's default behavior, where stopPropagation() is use for stop the event from moving up in the DOM.Meaning the parent element will not receive the event from its children.
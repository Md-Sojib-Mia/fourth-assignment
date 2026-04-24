1. getElementById() --> A fixed element which is defined by specific id,,
 getElementByClassname() --> Some common elements which are defined by same specific class name,,
querySelector() --> This is the CSS selector which is selects the first match,,
querySelectorAll() --> This is the CSS selector which is selects all matche.

2. At first,, I will crate an Element by document.createElement('tag'),,And then I will set this element into specific place by appendChild().

3. Going towards the parent from the clicked element its called, Bubbling.

4. This is the method where we use the addEventListener to the parent,, not to the every child multiple times.

5. preventDefault() --> This method stops the browsers normal behavior/work.
   stopPropagation() --> This method dont allows the event to reach the next parent element.it stops the Bubbling.

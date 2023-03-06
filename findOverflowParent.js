// when you're trying to use `position:sticky` on an element
// you'll have trouble if any parent/ancestor element has 
// overflow set to anything other than "visible" (such as: auto,hidden,overlay,scroll)
// & turns out if a parent is `display:flex` it might need some love 
// (to remedy this you can set the `align-self` of your sticky element)
// see here for how the display & align-self properties affect: http://bit.ly/2ZaRu4o

// so, to find those troublesome parents...
// copy & paste this into Chrome Inspector/Dev Tools console
// (and be sure to change the #stickyElement below, if needed)

function findOverflowParents(element, initEl) {

  function notVisible(el) {
    let overflow = getComputedStyle(el).overflow;
    return overflow !== "visible";
  }

  function displayFlex(el) {
    let display = getComputedStyle(el).display;
    return display === "flex";
  }

  let thisEl = element;
  if (!initEl) console.log('** Overflow check commence!', thisEl);
  let origEl = initEl || thisEl;
  if (notVisible(thisEl)) console.warn("Overflow found on:", thisEl.tagName, { issue: "OVERFLOW IS NOT VISIBLE", tagName: thisEl.tagName, id: thisEl.id, class: thisEl.className, element: thisEl });
  if (displayFlex(thisEl)) console.warn("Flex found on:", thisEl.tagName, { issue: "DISPLAY IS FLEX", tagName: thisEl.tagName, id: thisEl.id, class: thisEl.className, element: thisEl });
  if (thisEl.parentElement) {
    return findOverflowParents(thisEl.parentElement, origEl);
  } else {
    return console.log('** Overflow check complete! original element:', origEl);
  }

}

// to use a selector, change `#stickyElement` to your desired selector
// findOverflowParents(document.querySelector('#stickyElement'));

// or use $0 for the last element selected in the Chrome Inspector
findOverflowParents($0);






// *more learnings...
// both `overflow-x` & `overflow-y` must === "visible" else sticky won't stick
// for each of the possible settings of `overflow`, this is how they compute
// (if "unset" is declared the getComputedStyle === "visible")
// "auto" computes to "auto" *nosticky
// "hidden" computes to "hidden" *nosticky
// "inherit" computes to "visible"
// "initial" computes to "visible"
// "overlay" computes to "overlay" *nosticky
// "scroll" computes to "scroll" *nosticky
// "unset" computes to "visible"
// "visible" computes to "visible"

// script.js
// =============================================================================
// =============================================================================
var banner = banner || {} ;
var getParent;
var navSet = document.getElementById('navMenu');
var navParts = navSet.children[1];
var navName = navSet.children[0];


// Start
// =============================================================================
// =============================================================================
// HANDLE NAV HOVER EVENTS

  navName.addEventListener("click", function( event ) {
    scroll(0,0);
  }, false);
  

  navParts.addEventListener("mouseover", function( event ) {
    // make the mouseover target bold
    event.target.style.fontWeight = "400";
  }, false);
  navParts.addEventListener("mouseout", function( event ) {
    // make the mouseover target regular weight
    event.target.style.fontWeight = "300";
    event.target.style.color = "black";
  }, false);


  // HANDLE NAV CLICK EVENTS

  // HANDLE NAV CLICK EVENTS
    navParts.addEventListener("mouseup", function( event ) {

      event.target.style.color = "black";
    }, false);



// HANDLE NAV CLICK EVENTS
  navParts.addEventListener("click", function( event ) {
    // make the mouseover target bold

    var scrollPos = window.scrollY || window.scollTop || document.getElementsByTagName("html")[0].scrollTop;
  console.log(scrollPos);
    if(event.target.id == "nav0"){
      scroll(0, 715)
    }
    else if(event.target.id == "nav1"){
      scroll(0, 1510)
    }
    else if(event.target.id == "nav2"){
      scroll(0, 2087)
    }
    else if(event.target.id == "nav3"){
      scroll(0, 2504)
    }
    else if(event.target.id == "nav4"){
      scroll(0, 2959)
    }
    else if(event.target.id == "nav5"){
      scroll(0, 3396)
    }
    else if(event.target.id == "nav6"){
      scroll(0, 4179)
    }
    else if(event.target.id == "nav7"){
      scroll(0, 4977)
    }
  }, false);

  navParts.addEventListener("click", function( event ) {
    // make the mouseover target regular weight
    event.target.style.fontWeight = "300";
  }, false);


// ONLOAD LISTENER
//=================================================================
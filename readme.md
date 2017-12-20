#Arboreal Company Website
Visit the [Arboreal website](https://spacecakes.github.io/arboreal/) on Github Pages.

##Purpose
Website originally made as a CSS and HTML excercise and is my first website created from scratch.

##Design choices
I wanted a lively, playful look with vivid colors. The look *does not* match the business-y corporation it's intended for, but since this wasn't a graphic design assignment I decided to go for my own look and view the content merely as placeholders.

It uses a (sticky) menubar, parallax scrolling and is fully responsive. Subtle use of animation to make some parts a little more interesting and playful.

It also uses a tiny bit of jQuery to enable smooth scrolling. Originally it used jQuery to fix the menu to the top after scrolling, but I replaced it with `position: sticky` because it's a cleaner (albeit not as well-supported) solution. The JS scrolling is still there but commented out.

##Responsiveness
The site is responsive from viewports ranging from `280px` wide and up. The breakpoints are very few and simple and they are mostly based on `max-width` in accordance with what work for the website rather than specific devices. For example, the menu bar does not collapse until there's a lack of screen width, meaning it's possible to have one appearance in landscape and another in portrait on mobile—whatever works best for the current viewing conditions. 

The breakpoints are:

* `1024px`: some font sizes decrease and hover animations turn off.
* `640px`: the top logo changes position to accommodate a more crowded menu bar, font sizes decrease once again and box shadows are slightly reduced.
* `480px`: navigation bar collapses into a hamburger menu with two columns, which is hidden by defaul. Font sizes are reduced again.
* `320px`: hides the header image and text, changes font sizes once more and displays the menu items as a single column.

##Feedback
I decided not to use the feedback gained on version 1 of this website. The feeback was focused on my use of absolute units (`px`), but in my view these are properly and sparingly used here, like changing the size of the top logo on mobile. I feel this is proper usage of the unit, and the website is still responsive.

##Compatibility
###Experimental features
The website has support for `sticky` headline and navigation, which fix them to the top when scrolling. This is an experimential feature that does not work in all browsers, but provide a better browsing experience in those that do. The menubar will simply be `fixed` from the beginning in unsupported browsers. This is placed within a `feature query`, but doesn't really need to be in it's current state since the only change is `sticky` which would simply be ignored by older browsers. Nice to have for future features, though. 

The slogan has a blurred background in Safari using `-webkit-backdrop-filter: blur()`. This will simply be a semi-transparent overlay in unsupported browsers.

###IE fixes
[html5shiv](https://github.com/aFarkas/html5shiv) is used to support older versions of IE that don't support semantic HTML. This is a script that simply replaces semantic elements with older generic versions.  

###Flexbox
The website is built using `display: flex` to align much of the content. This does not work in older browsers, but the site remains readable without it with one notable exception: the menubar. I made a simpler version using `float` that is compatible with old browsers.

###Tested browsers
* Safari 11
* Chrome 63
* Firefox Quantum 57
* Opera 49
* Internet Explorer 11
* Microsoft Edge 38


##Validation
The website validates with the exception of the above mentioned experimental, but non-critical features. I decided to keep these because they do not affect the experience poorly in any way. Instead, they provide tiny benefits in browsers that do support it, i.e. _progressive enhancement_.

**Everything else is fully functional and properly validates**.

###Errors
```
48	.slogan	Value Error : position sticky is not a position value : sticky
90	.nav-bar	Value Error : position sticky is not a position value : sticky
```

###Warnings
```
49		Property -webkit-sticky is an unknown vendor extension
53		Property -webkit-backdrop-filter is an unknown vendor extension
91		Property -webkit-sticky is an unknown vendor extension
135		Property -webkit-transition is an unknown vendor extension
274		Property -webkit-appearance is an unknown vendor extension
```
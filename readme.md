#Arboreal Company Website
Visit the [Arboreal website](https://spacecakes.github.io/arboreal/) on Github Pages.

##Purpose
Website originally made as a CSS and HTML excercise and is my first website created from scratch.

##Design choices
I wanted a lively, playful look with vivid colors. The look *does not* match the business-y corporation it's intended for, but since this wasn't a graphic design assignment I decided to go for my own look and view the content merely as placeholders.

It uses a (sticky) menubar, parallax scrolling and is fully responsive. Subtle use of animation to make some parts a little more interesting and playful.

It also uses a tiny bit of jQuery to enable smooth scrolling. Originally it used jQuery to fix the menu to the top after scrolling, but I replaced it with `position: sticky` because it's a cleaner (albeit not as well-supported) solution. The JS scrolling is still there but commented out.

##Compatibility
###Experimental features
The website has support for `sticky` headline and navigation, which fix them to the top when scrolling. This is an experimential feature that does not work in all browsers, but provide a better browsing experience in those that do. The menubar will simply be `fixed` from the beginning in unsupported browsers. This is placed within a `feature query`, but doesn't really need to be in it's current state since the only change is `sticky` which would simply be ignored by older browsers. Nice to have for future features, though. 

The slogan has a blurred background in Safari using ’-webkit-backdrop-filter: blur()`. This will simply be a semi-transparent overlay in unsupported browsers.

###IE fixes
html5shiv is used to support older versions of IE that don't support semantic HTML. This is a script that simply replaces semantic elements with older generic versions.  

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
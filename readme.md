#Arboreal Company Website
Visit the [Arboreal website](https://spacecakes.github.io/arboreal/) on Github Pages.

##Purpose
Website originally made as a CSS and HTML excercise and is my first website created from scratch.

##Design choices
I wanted a lively, playful look with vivid colors. The look *does not* match the business-y corporation it's intended for, but since this wasn't a graphic design assignment I decided to go for my own look and view the content merely as placeholders.

It uses a (sticky) menubar, parallax scrolling and is fully responsive. Subtle use of animation to make some parts a little more interesting and playful.

It also uses a tiny bit of jQuery to enable smooth scrolling. Originally it used jQuery to fix the menu to the top after scrolling, but I replaced it with `position: sticky` because it's a cleaner (albeit not as well-supported) solution. The JS scrolling is still there but commented out.

##Validation
The website validates with the exception of a few experimental, but non-critical features. I decided to keep these because they do not affect the experience poorly in any way. Instead, they provide tiny benefits in browsers that do support it: a sticky menubar and background blur (in Safari).

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
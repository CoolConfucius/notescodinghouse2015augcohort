/* 2015 9 26 
James Stone: agenda: css, clickable prototype with jquery... 
You always do tons of css. understand how the css is working. 
Separating content from visual component of the web is great. If you turn off the css, it should be mostly readable. One way to think of css is to think of everything as a div. Even circles are rectangles or squares? Rectangle and square, the only difference is their height and width. You get a circle by setting the Radius. you have four borders. You can take that and transform it and rotate it. In foundation, all components are built up with divs. 
Padding. There's also a short hand notation, but I stray away from that cuz it's not readable. 
There's the border. Padding is inside border. Margin is outside border. You can copy css attribute. 
Other used a lot css: 
background: blue;
(font) color: red;
color is the font. 
And we have another one for the border. 
border-color: violet; 
display: inline-block; // display: none; or display: hidden; 
If you want interactive, display hidden is used a lot. Go more advanced, then you usually use a class. 
float: right; 
(state) :hover 

padding and margin are oftened used for the same thing. margin is whitespace. 
panel sets background color and border. 

use inspect element on chrome to experiment. You can change the padding, border, and margin and see results right away. 

// will pollute all css elements on site
h1 { margin-bottom: rem-calc(45); }

//sepcial use-case that is reused alone
h1.leadin {margin-bottom: rem-calc(45);}

// complex module or view, either reused or single use on a site
.view-login {
  
}


// for testing css: 
* { border: solid 1px #f00;}
// this helps you make your structure obvious. 
.button { border: solid 2px #0f0; } 

h5 { background: #f00; }


starting with a header may not be the best approach. 

inline list puts everything side by side. 

a clear fix. when you have all your floats... just put a row by itself 
<div class="row"></div?> <!-- clearfix -->


.. fucked up my computer. 


// back to lecutre. jquery 
*/
// $(document).foundation(); 

// $(document).ready(function(){

//   $('.songs li').on('click', function(){
//     $(this).toggleClass('active'); 
//   })

// })
/*
search animate css 

css-tricks.com/useful-nth-child-recipies/


to make triangle: 

.triangle {
  height: 100px; 
  width: 100px; 
  background: #f00;

  border-top: solid 10px #0f0;
  border-bottom: solid 10px #00f;
  border-right: solid 10px #0ff;
  border-left: solid 10px #00f;
}

.triangle {
  height: 100px; 
  width: 100px; 
  background: #f00;

  border-top: solid 10px #0f0;
  border-bottom: solid 10px rgba(#000, 0.0);
  border-right: solid 10px rgba(#000, 0.0);
  border-left: solid 10px rgba(#000, 0.0);
}

basiclaly you need a translucent border? 


.triangle {
  height: 100px; 
  width: 100px; 
  background: #f00;

  border-top: solid 10px rgba(#000, 0.0);
  border-bottom: solid 10px #0f0;
  border-right: solid 10px rgba(#000, 0.0);
  border-left: solid 10px rgba(#000, 0.0);
}

.row>.medium-4.columns.medium-centered
>div.triangle

http://terabytenz.github.io/inuit.css-kitchensink/
Grap that to create a triangle. 

semantic html represents content only, nothing to do with visual. 

james@jamesstone.com


Cade: 
take all that you've learned from this foudnation workshop and what we learned to make your website. Make something awesome with your skills. We're gonna have a small workshop. this afternoon. 
As a developer, your digital business card matters more than your paper one. 

Jose Zamudio's website: josezamudio.me
First, you see his name. Who he is and what he does. He has a picture of his face. 
Notice the paralax in the background. The background is moving slower than the page. It's about math, percentage. It gives an effect of depth. If you have transparent images, you have greater paralax. It's just images moving around with paralax. 
Next, you see his resume, portfolio and stuff. There's his JavaScript Calculator that he made in Coding House. Is it super impressive? Maybe not to some, but it's not terrible. That's nice. It links to GitHub.io. 
Take a shitty painting and put a nice frame around it and it looks good. Make it look good! Now that you have these skills, you can make old projects look better. 
His weather app. You enter a zip code and you get a simple forecast. 
Open market is his trading app. 
The icons of what he's comfortable with. THe mouse over is nifty, pure css. He got his actual Twitter feed live on his page.You can do with with Twitter api.  
And he has his blog right here. Little pill bubble tags are nice. 
And here's that Contact Me thing. It'll trigger an email that'll be sent to Jose. You can do this with Mailgun api. 
They'll spend more time with this than your actual resume? 

Cade: squeezing huge image is a lot of work for the browser. 

Nick: to get inspiration for portfolios, go to Theme Forest. http://themeforest.net/ 
I like taking things I like, screen shot, piece them together. Don't buy a theme. Just look at with for inspiration. It'd be sad if you have a copyright. Cade: it's not gonna impress anybody. 


My website, may be modeled after Jose's

Have my picture, or Maru's picture. 

Can play Battle Ship against the AI. And play Black Jack. THere's also Tic Tac Toe, Towers of Hanoi, and the Calculator. Maybe have the Weather App there. Animal Shelter, Stock, and Bank. Perhaps have a code of solving mathematical and string puzzles. 

By clicking on a text, can navigate to extended resume. It summarizes my education and describes some projects I worked on. It lists the skills I have. I'll have a list of skills I'm relatively comfortable with and another list of skills that I learned, but will need to review before I can consider myself comfortable with. I might also have a list of skills I haven't learned, but can learn if I were to need them. 

Maybe talk about my interest in education, and how I'm good at explaining material that I understand. 

Gamify. Have users be able to create accounts on my website. A coolconfucius account. And they can score points or earn achievements. by testing out my projects. THey may post and discuss on my posts. 

Contact me for one on one tutorials or for whatever reasons. I can tutor on the basics of html, css, javascript, and jQuery. 
Maybe have a daily javascript challenge for users. 

Have recorded videos of me on the website. I may have videos of me explaining html, css, and javascript in a way that's fun or easily understandable. Perhaps I may walkthrough my in my videos the process of me creating the projects I did. I may talk about my thought process in making the projects. I'll emphasize that there's no one right way to do things, but if you're like me, this may help you out. 


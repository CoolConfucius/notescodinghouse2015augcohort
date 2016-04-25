/* 2015 9 25 
ZURB Foundation. James Stone. We'll talk about sublime text tools, grids, common patterns. clickable prototype. we'll talk about how to use css in foundation and pixel perfect. 

fast notes. 
Compass allows you to compiles lots of sass together. c compiled library lets you compile sass 10 times faster. grunt is a task runner. minimize javascript, can do really sophisticated stuff. bower is a package manager. lets you download from github automatically, get latest version, doesn't just pick newer version that may or may not be compatible. i observer we're moving towards node.js/ javascript. it's gonna be faster to compile. also might be moving towards gulp. 

philosophy. like bootstrap has a philosophy. but foundation is different, designed by ZURB. Foundation is less opinionated. bootstrap is strict? build upon foundation. 

foundation new testProject --libsass

don't want to go to css directly go to scss. 

the html file has a bunch of boilder plantes. we're also gonna use modernizr. 

to install foundation: 
foundation new testProject --libsass

grunt / libsass method: 

foundation new testProject --libsass
grunt

alternative method: 

foudnation new testProject
compass watch 

https://gumroad.com/l/foundationquickref/zurbcamp



<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Foundation</title>
    <link rel="stylesheet" href="css/app.css" />
    <script src="bower_components/modernizr/modernizr.js"></script>
  </head>
  <body>
    <!-- <br>
    <div class="row">
      <div class="medium-12 columns panel">
        <h1>12-columns</h1>
      </div>
    </div>

    <div class="row">
      <div class="medium-4 columns panel">
        <h1>Medium-4</h1>
      </div>
      <div class="medium-8 columns panel">
        <h1>Medium-8</h1>
      </div>
    </div> -->

    <!-- spaced apart by padding?  Use panel for spacing-->

    <!-- <div class="row">
      <div class="medium-12 columns">
        <div class='panel'>
          <h1>12-columns</h1>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="medium-4 columns">
        <div class="panel">
        <h1>Medium-4</h1>
          
        </div>
      </div>
      <div class="medium-8 columns">
        <div class="panel">
        <h1>Medium-8</h1>
          
        </div>
      </div>
    </div>

    <div class="row">
      <div class="medium-7 columns">
        <div class="panel">
        <h1>Medium-7</h1>
          
        </div>
      </div>
      <div class="medium-5 columns">
        <div class="panel">
        <h1>Medium-5</h1>
          
        </div>
      </div>
    </div> -->
<!-- Emmet is a time saver -->
<!-- .medium-4.columns*3>.panel>h1{Medium-4} -->
    <!-- <div class="row">
      <div class="medium-4 columns">
        <div class="panel">
          <h1>Medium-4</h1>
        </div>
      </div>
      <div class="medium-4 columns">
        <div class="panel">
          <h1>Medium-4</h1>
        </div>
      </div>
      <div class="medium-4 columns">
        <div class="panel">
          <h1>Medium-4</h1>
        </div>
      </div>
    </div> -->
<!-- Don't forget the row!  -->
<!-- <div class="row">
<div class="medium-3 columns">
  <div class="panel">
    <h1>Medium-3</h1>
  </div>
</div>
<div class="medium-3 columns">
  <div class="panel">
    <h1>Medium-3</h1>
  </div>
</div>
<div class="medium-3 columns">
  <div class="panel">
    <h1>Medium-3</h1>
  </div>
</div>
<div class="medium-3 columns">
  <div class="panel">
    <h1>Medium-3</h1>
  </div>
</div>
  
</div>
  
<div class="row">
  <div class="medium-6 columns">
    <div class="panel">
      <h1>medium-6</h1>
    </div>
  </div>
  <div class="medium-6 columns">
    <div class="panel">
      <h1>medium-6</h1>
    </div>
  </div>
</div>
 -->

<!-- To center. -->
<!-- <div class="row">
  <div class="medium-9 columns panel">
    <h1>not centered medium-9</h1>
  </div>
</div>
<div class="row">
  <div class="medium-9 columns medium-centered">
    <div class="panel">
      
    <h1>Centered medium-9</h1>
    </div>
  </div>
</div> -->

<!-- I usually start with medium. in medium, i can break point to mobile. Large breaks much more earlier.  -->

<!-- <div class="row">
  <div class="medium-12 columns">
    <img src="http://www.placehold.it/1500x500" alt="">
  </div>
</div> -->
<!-- <div class="row"><div class="medium-9 columns medium-centered"><hr></div></div> -->
<!-- <hr>
<div class="row">
  <div class="medium-4 columns"><img src="http://www.placehold.it/450x350" alt="">
  <h4>This is a content sectoin.</h4>
  <p>Lorem ipsum dolor</p>
  </div>
    <div class="medium-4 columns"><img src="http://www.placehold.it/450x350" alt="">
  <h4>This is a content sectoin.</h4>
  <p>Lorem ipsum dolor</p>
  </div>
    <div class="medium-4 columns"><img src="http://www.placehold.it/450x350" alt="">
  <h4>This is a content sectoin.</h4>
  <p>Lorem ipsum dolor</p>
  </div>
</div>
 -->
<!-- <div class="row">
  <div class="medium-12 columns">
    <div class="panel">
      <h4>Get in touch! </h4>
      <p>We'd Lorem dolor sit amet, consectetur </p>
      <a href="" class="button right">Contact Us</a>
    </div>
  </div>
</div> -->
<!-- <div class="row">
  <div class="medium-12 columns">
    <div class="panel">
      <a href="" class="button right">Contact Us</a>
      <h4>Get in touch! </h4>
      <p>We'd Lorem dolor sit amet, consectetur </p>
    </div>
  </div>
</div>

<div class="row"><medium-12 class="columns"><hr></medium-12></div>
 -->


<!-- ul.inline-list>li*4>a{Link $} -->

<!-- <div class="row">
  <div class="medium-12 columns">
  <ul class="inline-list">
    <li><a href="">Link 1</a></li>
    <li><a href="">Link 2</a></li>
    <li><a href="">Link 3</a></li>
    <li><a href="">Link 4</a></li>
  </ul>
  <p>Copyright Lorem ipsum dolor.</p>  
  </div>
</div>
 -->
 <!-- looks nicer to have a break at the top -->
<br>
<div class="row">
  <div class="medium-4 columns">
    <img src="http://www.placehold.it/600x600" alt="">

  </div>
  <div class="medium-8 columns">
    <div class="row">
      <div class="medium-4 columns">
        <div style="border: solid 1px #eee;">
          <img src="http://www.placehold.it/600x600" alt="">
          <p>Lorem ipsum dolor</p>
        </div>
      </div>
      <div class="medium-4 columns">
        <div style="border: solid 1px #eee;">
          <img src="http://www.placehold.it/600x600" alt="">
        </div>
      </div>
      <div class="medium-4 columns">
        <div style="border: solid 1px #eee;">
          <img src="http://www.placehold.it/600x600" alt="">
        </div>
      </div>
    </div>
  </div>
</div>




    <script src="bower_components/jquery/dist/jquery.min.js"></script>
    <script src="bower_components/foundation/js/foundation.min.js"></script>
    <script src="js/app.js"></script>
  </body>
</html>

http://foundation.zurb.com/templates.html




Our next topic is buttons, images and block grids. 

img helper class th makes thumbnail 

checkout _settings.scss line 98. 

<!-- &raquo; makes the arrow -->

checkout _settings.scss 
can use it to change button radius. Look here first before you want to override the css. 
some things are easy to do inline, but it's easier to memorize a few patterns and use them. 


<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Foundation</title>
    <link rel="stylesheet" href="css/app.css" />
    <script src="bower_components/modernizr/modernizr.js"></script>
  </head>
  <body>
    <br>
    <!-- http://lorempixel.com/400/200/sports/1/ -->
    <!-- <div class="row">
      <div class="medium-8 columns">
        <ul class="small-block-grid-2 medium-block-grid-3 large-block-grid-5">
          <li><img class="th" src="http://lorempixel.com/400/400/cats/1/" alt=""></li>
          <li><img class="th" src="http://lorempixel.com/400/400/cats/2/" alt=""></li>
          <li><img class="th" src="http://lorempixel.com/400/400/cats/3/" alt=""></li>
          <li><img class="th" src="http://lorempixel.com/400/400/cats/4/" alt=""></li>
          <li><img class="th" src="http://lorempixel.com/400/400/cats/5/" alt=""></li>
          <li><img class="th" src="http://lorempixel.com/400/400/cats/6/" alt=""></li>
          <li><img class="th" src="http://lorempixel.com/400/400/cats/7/" alt=""></li>
        </ul>
      </div>
      <div class="medium-4 columns">
        <h1>Sidebar</h1>        
      </div>
    </div> -->
    <div class="row">
      <div class="medium-8 columns">
        <a href="" class="button">Go there &raquo;</a>
        <a href="" class="button large">Go there &raquo;</a>
        <a href="" class="button small">Go there &raquo;</a>
        <a href="" class="button tiny">Go there &raquo;</a>

        <a href="" class="button secondary">Go there &raquo;</a>
        <a href="" class="button secondary large">Go there &raquo;</a>
        <a href="" class="button secondary small">Go there &raquo;</a>
        <a href="" class="button secondary tiny">Go there &raquo;</a>

        <a href="" class="button alert">Go there &raquo;</a>
        <a href="" class="button alert large">Go there &raquo;</a>
        <a href="" class="button alert small">Go there &raquo;</a>
        <a href="" class="button alert tiny">Go there &raquo;</a>

        <a href="" class="button secondary radius">Go there &raquo;</a>
        <a href="" class="button secondary radius large">Go there &raquo;</a>
        <a href="" class="button secondary radius small">Go there &raquo;</a>
        <a href="" class="button secondary radius tiny">Go there &raquo;</a>

        <a href="" class="button alert round">Go there &raquo;</a>
        <a href="" class="button alert round large">Go there &raquo;</a>
        <a href="" class="button alert round small">Go there &raquo;</a>
        <a href="" class="button alert round tiny">Go there &raquo;</a>
      </div>
      <div class="medium-4 columns">
        <h4>Sidebar</h1>     
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto nesciunt omnis accusamus provident nobis dolores magni totam ea, voluptatum. Quibusdam nihil qui ut facilis recusandae saepe iure sapiente distinctio pariatur.</p>
        <div class="row">
          <small-10 class="colums small-centered"><a href="" class="button expand">Subscribe &raquo;</a></small-10>
        </div>
      </div>
    </div>


<hr>
<h2>Button Groups</h2>
<ul class="button-group">
  <li><a href="" class="button">Text</a></li>
  <li><a href="" class="button">Text</a></li>
  <li><a href="" class="button">Text</a></li>
  <li><a href="" class="button">Text</a></li>
</ul>
<ul class="button-group small">
  <li><a href="" class="button tiny">Text</a></li>
  <li><a href="" class="button tiny">Text</a></li>
  <li><a href="" class="button tiny">Text</a></li>
  <li><a href="" class="button tiny">Text</a></li>
</ul>
<ul class="button-group right">
  <li><a href="" class="button tiny">Text</a></li>
  <li><a href="" class="button tiny">Text</a></li>
  <li><a href="" class="button tiny">Text</a></li>
  <li><a href="" class="button tiny">Text</a></li>
</ul>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, id?</p>

<hr>
<h1>Even demo</h1>
<ul class="button-group even 4">
  <li><a href="" class="button tiny">Text</a></li>
  <li><a href="" class="button tiny">Text</a></li>
  <li><a href="" class="button tiny">Text</a></li>
  <li><a href="" class="button tiny">Text</a></li>
</ul>
    
    <script src="bower_components/jquery/dist/jquery.min.js"></script>
    <script src="bower_components/foundation/js/foundation.min.js"></script>
    <script src="js/app.js"></script>
  </body>
</html>


my attempt at stuff: 
<div class="row">
      <div class="medium-8 columns">
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, assumenda, ipsum repudiandae aut iusto quis veniam, dolorem sequi eaque debitis ut facilis distinctio veritatis autem consequuntur vitae, amet similique optio.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum magni ipsam perferendis est quis, dignissimos voluptatem ex quam adipisci sed vel ut aspernatur, esse harum. Explicabo, esse nam? Placeat, velit?</p>

      <hr>
      <h3 class="text-center">Our CEO</h3>
      <div class="row">
        <div class="medium-4 columns medium-push-8">
          <img src="" alt="">
        </div>
        <div class="medium-8 columns medium-pull-4">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab totam eius quibusdam, culpa, non odit quos consequuntur temporibus repellat minus excepturi dolor eum earum nisi quas aliquid beatae. Laboriosam, consectetur.</p>
        </div>
      </div>

      </div>

<div class="medium-4 columns">
  <img src="http://www.placehold.it/100x100/ff0000/" alt="">
</div>


      <div class="medium-4 columns">
        <h3>Friends</h3>
        <ul class="medium-block-grid-3">
          <li><img src="http://www.placehold.it/100x100/ff0000/004400?text=1" alt=""></li>
          <li><img src="http://www.placehold.it/100x100/ff0000/004400?text=1" alt=""></li>
          <li><img src="http://www.placehold.it/100x100/ff0000/004400?text=1" alt=""></li>
          <li><img src="http://www.placehold.it/100x100/ff0000/004400?text=1" alt=""></li>
          <li><img src="http://www.placehold.it/100x100/ff0000/004400?text=1" alt=""></li>
          <li><img src="http://www.placehold.it/100x100/ff0000/004400?text=1" alt=""></li>
          <li><img src="http://www.placehold.it/100x100/ff0000/004400?text=1" alt=""></li>
          <li><img src="http://www.placehold.it/100x100/ff0000/004400?text=1" alt=""></li>
          <li><img src="http://www.placehold.it/100x100/ff0000/004400?text=1" alt=""></li>
          <li><img src="http://www.placehold.it/100x100/ff0000/004400?text=1" alt=""></li>
          <li><img src="http://www.placehold.it/100x100/ff0000/004400?text=1" alt=""></li>
          <li><img src="http://www.placehold.it/100x100/ff0000/004400?text=1" alt=""></li>` 
        </ul>
      </div>
    </div>


http://foundation.zurb.com/templates.html
Marketing 2 is pretty cool. Note the orbit content. 


checkbox. selected state. 

The JS components of Foundation...
Interchange. 

http://foundation.zurb.com/docs/components/offcanvas.html

<div class="off-canvas-wrap" data-offcanvas>
  <div class="inner-wrap">
    <nav class="tab-bar">
      <section class="left-small">
        <a class="left-off-canvas-toggle menu-icon" href="#"><span></span></a>
      </section>

      <section class="middle tab-bar-section">
        <h1 class="title">Foundation</h1>
      </section>

      <section class="right-small">
        <a class="right-off-canvas-toggle menu-icon" href="#"><span></span></a>
      </section>
    </nav>

    <aside class="left-off-canvas-menu">
      <ul class="off-canvas-list">
        <li><label>Foundation</label></li>
        <li><a href="#">The Psychohistorians</a></li>
        <li><a href="#">...</a></li>
      </ul>
    </aside>

    <aside class="right-off-canvas-menu">
      <ul class="off-canvas-list">
        <li><label>Users</label></li>
        <li><a href="#">Hari Seldon</a></li>
        <li><a href="#">...</a></li>
      </ul>
    </aside>

    <section class="main-section">
      <!-- content goes here -->
    </section>

  <a class="exit-off-canvas"></a>

  </div>
</div>

show-for-small-only
means only show when small. can also: 
hide-for-small-only 

&#215;  is the close button. 



//First class: All Hallows eve, Twilight, 
  // Second: blackboard, 
  // third class: pastels on dark, space cadet 


  Nick showed us a video. To be successful, we have to want success as much as we want to breathe. Make sacrifices, sacrifice sleep, forget to eat. 
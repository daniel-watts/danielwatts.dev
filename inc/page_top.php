<!--  

██████╗  █████╗ ███╗   ██╗██╗███████╗██╗               
██╔══██╗██╔══██╗████╗  ██║██║██╔════╝██║               
██║  ██║███████║██╔██╗ ██║██║█████╗  ██║               
██║  ██║██╔══██║██║╚██╗██║██║██╔══╝  ██║               
██████╔╝██║  ██║██║ ╚████║██║███████╗███████╗          
╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝╚══════╝╚══════╝          
                                                       
██╗    ██╗ █████╗ ████████╗████████╗███████╗           
██║    ██║██╔══██╗╚══██╔══╝╚══██╔══╝██╔════╝           
██║ █╗ ██║███████║   ██║      ██║   ███████╗           
██║███╗██║██╔══██║   ██║      ██║   ╚════██║           
╚███╔███╔╝██║  ██║   ██║      ██║   ███████║           
 ╚══╝╚══╝ ╚═╝  ╚═╝   ╚═╝      ╚═╝   ╚══════╝           
                                                       
██╗    ██╗███████╗██████╗     ██████╗ ███████╗██╗   ██╗
██║    ██║██╔════╝██╔══██╗    ██╔══██╗██╔════╝██║   ██║
██║ █╗ ██║█████╗  ██████╔╝    ██║  ██║█████╗  ██║   ██║
██║███╗██║██╔══╝  ██╔══██╗    ██║  ██║██╔══╝  ╚██╗ ██╔╝
╚███╔███╔╝███████╗██████╔╝    ██████╔╝███████╗ ╚████╔╝ 
 ╚══╝╚══╝ ╚══════╝╚═════╝     ╚═════╝ ╚══════╝  ╚═══╝  

Thanks for looking under the hood!
This site was hand-typed from scratch with honorable intentions.

© 2019 by Daniel Watts

This site was inspired by:
- http://www.adhamdannaway.com/
- https://jtom.me/portfolio/
- https://www.ybrikman.com/

--> 
<!DOCTYPE html>
<html lang="en">
    <head>

        <meta charset="UTF-8">
        <title><?php echo $request['page_title']; ?></title>

        <!-- Display -->
        <meta content="width=device-width" name="viewport">

        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400&display=swap">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap">

        <!-- Icons -->
        <link rel="icon" type="image/x-icon" href="/img/wattswork.ico" />
		<link rel="icon" type="image/png" href="/img/wattswork.png" />
		<link rel="icon" type="image/gif" href="/img/wattswork.svg" />

		<!-- JS Scripts -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

		<!-- Styles -->
        <style><?php

		require(DOC_ROOT . '/css/reset.css');
		require(DOC_ROOT . '/css/site.css');
		require(DOC_ROOT . '/css/text.css');
		if ($request['template'] == 'home') { require(DOC_ROOT . '/css/home.css'); }
		if ($request['template'] == 'project') { require(DOC_ROOT . '/css/project.css'); }
		if ($request['template'] == 'resume') { require(DOC_ROOT . '/css/resume.css'); }

		?>

		</style>

    </head>
    <body>
    	
		<header class="main-header">
			<div class="content">

				<a class="main-header-logo" href="/"><img alt="Black and white Wattswork logo." src="/img/wattswork.svg" /></a>

				<div id="menu-toggle" class="menu-toggle" role="button" aria-expanded="false">
			        <span class="screen-reader-text">Menu</span>
			        <svg class="icon icon-menu-toggle"
			             aria-hidden="true"
			             version="1.1"
			             xmlns="http://www.w3.org/2000/svg"
			             xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			             viewBox="0 0 100 100">
			            <g class="svg-menu-toggle">
			                <path class="line line-1" d="M5 13h100v8H5z"></path>
			                <path class="line line-2" d="M5 43h100v8H5z"></path>
			                <path class="line line-3" d="M5 73h100v8H5z"></path>
			            </g>
			        </svg>
			    </div>

			    <nav id="main-nav" class="main-nav">
		        	<ul>
		        		<li><a class="main-nav-item" href="/#featured-projects"><span>Featured Work</span></a></li>
		        		<li><a class="main-nav-item" href="/#projects"><span>Projects</span></a></li>
		        		<li class="main-nav-item">
		        			<ul>
		        				<li><a class="main-nav-sub-item email" target="_blank" href="mailto:daniel@danielwatts.dev"><span>Email</span></a></li>
		        				<li><a class="main-nav-sub-item linkedin" target="_blank" href="https://www.linkedin.com/in/daniel-watts-87643618/"><span>LinkedIn</span></a></li>
		        				<li><a class="main-nav-sub-item codepen" target="_blank" href="https://codepen.io/wattswork/"><span>CodePen</span></a></li>
		        				<li><a class="main-nav-sub-item github" target="_blank" href="https://github.com/daniel-watts?tab=repositories"><span>GitHub</span></a></li>
		        			</ul>
		        		</li>
		        	</ul>
		        </nav>

			</div>
		</header>

		<main class="main-page-content">

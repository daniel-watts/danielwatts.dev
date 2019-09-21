
    		<section class="splash">
    			<div class="splash-content content">
    				<img class="splash-pic" alt="A portrait of Daniel Watts smiling with a sort of cheezy expression." src="/img/daniel.jpg">
    				<h1 class="splash-title">Daniel Watts</h1>
    				<h2 class="splash-subtitle">Web Developer</h2>
    				<h3 class="splash-subsubtitle">Full-Stack - Apps - UI/UX - Media</h3>
    			</div>
    		</section>

    		<section id="featured-projects" class="featured-projects divider">
    			<div class="featured-projects-content content">
    				<div class="featured-projects-text text">
	    				<h2 class="featured-projects-title">Featured Work</h2>
	    			</div>
    				<ul class="featured-projects-list">
                        <?php foreach ($featured as $fpid) : ?>

    					<li class="featured-project-item-wrapper">
    						<a class="featured-project-item" href="/projects/<?php echo $projects[$fpid]['project']; ?>">
	    						<img class="featured-project-item-image responsive-image" alt="An image of the project." src="/images/<?php echo $projects[$fpid]['thumb']; ?>" />
	    						<span class="featured-project-item-title"><?php echo $projects[$fpid]['title']; ?></span>
	    						<span class="featured-project-item-category"><?php echo $projects[$fpid]['subtitle']; ?></span>
    						</a>
    					</li>
                    <?php endforeach; ?></ul>
    			</div>
    		</section>

            <section id="projects" class="projects divider">

                <div id="projects-timeline" class="projects-timeline content">

                    <div class="timeline-text text">

                        <h2 class="timeline-title">Projects</h2>
                        <p>
                            A timeline of web projects I helped make.
                        </p>
                    </div>

                    <ul class="projects-list">

                        <li class="project-item-wrapper">
                            <div class="project-item">
                                <span class="project-item-date">Right Now</span>
                                <div class="project-item-info">
                                    <span class="project-item-category"><strong>I am open to contribute to a new project or team.</strong></span>
                                    Currently experimenting with a bunch of front-end stuff like <em>Progressive Web Apps</em> using <em>Angular</em>, <em>Node</em>, <em>React</em>, and <em>Vue</em>.<br>
                                    Firing-up some personal projects as well.
                                </div>
                            </div>
                        </li>
                        <?php foreach ($projects as $pid => $pdata) : ?>

                        <li class="project-item-wrapper">
                            <div class="project-item">
                                <span class="project-item-date"><?php echo $pdata['datetxt']; ?></span>
                                <div class="project-item-info">
                                    <?php if ($pdata['title'] != '') : ?><span class="project-item-title"><?php echo $pdata['title']; ?></span><?php endif; ?>

                                    <?php if ($pdata['subtitle'] != '') : ?><span class="project-item-category"><?php echo $pdata['subtitle']; ?></span><?php endif; ?>

                                    <?php if ($pdata['tech'] != '') : ?><span class="project-item-tech"><?php echo $pdata['tech']; ?></span><?php endif; ?>

                                    <?php if ($pdata['desc'] != '') : ?><span class="project-item-description text"><?php echo $pdata['desc']; ?></span><?php endif; ?>

                                    <?php if ($pdata['thumb'] != '') : ?><img class="project-item-image responsive-image" alt="An image of the project." src="/images/<?php echo $pdata['thumb']; ?>" /><?php endif; ?>

                                </div>
                            </div>
                        </li>
                        <?php endforeach; ?>
                    </ul>

                </div>

                <div id="timeline-side" class="timeline-side">
                    <div class="timeline-slider-wrapper">
                        <div class="timeline-slider">
                            
                            <div class="profile-info">
                                <img class="profile-pic" alt="A portrait of Daniel Watts smiling with a sort of cheezy expression." src="/img/daniel.jpg">
                                <span class="profile-title">Daniel Watts</span>
                                <span class="profile-subtitle">Web Developer</span>
                                <span class="profile-subsubtitle">Full-Stack - Apps - UI/UX - Media</span>
                            </div>

                            <div class="profile-navs">
                                <nav class="profile-nav">
                                    <h3 class="profile-nav-title">Portfolio</h3>
                                    <ul>
                                        <li class="item-featured-work item"><a class="item-link" href="/#featured-projects"><span>Featured Work</span></a></li>
                                        <li class="item-projects item"><a class="item-link" href="/#projects"><span>Projects</span></a></li>
                                    </ul>
                                </nav>
                                <nav class="profile-nav">
                                    <h3 class="profile-nav-title">Contact</h3>
                                    <ul>
                                        <li class="item-email item"><a class="item-link" target="_blank" href="mailto:daniel@danielwatts.dev"><span>Email</span></a></li>
                                        <li class="item-linkedin item"><a class="item-link" target="_blank" href="https://www.linkedin.com/in/daniel-watts-87643618/"><span>LinkedIn</span></a></li>
                                        <li class="item-codepen item"><a class="item-link" target="_blank" href="https://codepen.io/wattswork/"><span>CodePen</span></a></li>
                                        <li class="item-github item"><a class="item-link" target="_blank" href="https://github.com/daniel-watts?tab=repositories"><span>GitHub</span></a></li>
                                    </ul>
                                </nav>
                                <nav class="profile-nav">
                                    <h3 class="profile-nav-title">Assets</h3>
                                    <ul>
                                        <li class="item-resume item"><a class="item-link" target="_blank" href="/resume"><span>Resume</span></a></li>
                                        <li class="item-devwattswork item"><a class="item-link" target="_blank" href="https://dev.wattswork.com/"><span>Devblog</span></a></li>
                                        <li class="item-devnews item"><a class="item-link" target="_blank" href="https://www.facebook.com/web.developer.info/"><span>Dev News</span></a></li>
                                    </ul>
                                </nav>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>

            </section>

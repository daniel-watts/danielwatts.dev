<?php

$project_data = $projects[$request['project_key']];

?>
<div id="project-page" class="project-page">
	<div class="project-page-content content">

		<header class="project-page-info">
			<h1 class="project-page-title"><?php echo $project_data['title']; ?></h1>
			<?php if ($project_data['subtitle'] != '') : ?><span class="project-page-subtitle"><?php echo $project_data['subtitle']; ?></span><?php endif; ?>
            <?php if ($project_data['datetxt'] != '') : ?><span class="project-page-date"><?php echo $project_data['datetxt']; ?></span><?php endif; ?>
            <?php if ($project_data['desc'] != '') : ?><span class="project-page-description"><?php echo $project_data['desc']; ?></span><?php endif; ?>
            <!-- <?php if ($project_data['tech'] != '') : ?><span class="project-page-tech"><?php echo $project_data['tech']; ?></span><?php endif; ?> -->
		</header>

		<div class="project-page-image">
			<img class="project-image" alt="An image of the project." src="/images/<?php echo $project_data['thumb']; ?>" />
		</div>

	</div>
</div>

<div id="page-content" class="page-content divider">
	<div class="page-content-liner content">
		<div class="coming-soon">
			<h2 class="page-content-title">Coming soon</h2>
			<p>
			This project will soon have an in-depth writup detailing the process used to create it.<br>
			Please come back later and check it out.
			</p>
		</div>
	</div>
</div>
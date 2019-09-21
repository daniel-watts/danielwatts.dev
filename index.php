<?php

function route_request($projects)
{
	// All requests are 404 by default.
	$return['template'] = 'error_404';

	$url = 'http' . (isset($_SERVER['HTTPS']) ? 's' : '' ) . '://' . "{$_SERVER['HTTP_HOST']}{$_SERVER['REQUEST_URI']}";
	$url_path = parse_url($url, PHP_URL_PATH);
	$url_path_parts = explode('/', $url_path);
	array_shift($url_path_parts);

	if ($url_path_parts[0] == '') {
		return array('template' => 'home');
	}

	if ($url_path_parts[0] == 'projects' && isset($url_path_parts[1])) {
		if (isset($projects[$url_path_parts[1]]) && $projects[$url_path_parts[1]]['has_url'] == 'true') {
			return array(
				'template' => 'project',
				'project_key' => $url_path_parts[1],
			);
		}
	}

	if ($url_path_parts[0] == 'resume' && !isset($url_path_parts[1])) {
		return array('template' => 'resume');
	}

	return $return;
}

if (!defined('DOC_ROOT')) {
	define('DOC_ROOT', dirname(__FILE__));
}

require(DOC_ROOT . '/inc/data.php');
$request = route_request($projects);

// Default DOC title.
$request['page_title'] = 'Daniel Watts - Web Developer Portfolio';

require(DOC_ROOT . '/inc/' . $request['template'] . '.php');

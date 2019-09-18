<?php

// Report all PHP errors.
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

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

	return $return;
}

if (!defined('DOC_ROOT')) {
	define('DOC_ROOT', dirname(__FILE__));
}

require(DOC_ROOT . '/inc/data.php');
$request = route_request($projects);

require(DOC_ROOT . '/inc/page_top.php');
require(DOC_ROOT . '/inc/' . $request['template'] . '.php');
require(DOC_ROOT . '/inc/page_bottom.php');

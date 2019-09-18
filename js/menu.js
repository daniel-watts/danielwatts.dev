
/**
 * -----------------------------------------------------------------------------
 * Main Menu - Hamburger open and close
 * -----------------------------------------------------------------------------
 */
function open_menu()
{
	$('#menu-toggle').addClass('active').attr('aria-expanded', 'true');
	$('#main-nav').addClass('open');
}

function close_menu()
{
	$('#menu-toggle').removeClass('active').attr('aria-expanded', 'false');
	$('#main-nav').removeClass('open');
}

$ ('#menu-toggle').on('click', function(e) {
	e.preventDefault();
	if (! $(this).hasClass('active')) {
		open_menu();
	} else {
		close_menu();
	}
});

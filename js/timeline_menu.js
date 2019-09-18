
/**
 * -----------------------------------------------------------------------------
 * Tinmeline aside becomes active after a specified scroll point
 * -----------------------------------------------------------------------------
 */
function update_timeline_side()
{
	if ($('#projects').length) {
		var position = $('#projects').position();
		if ($(document).scrollTop() >= position.top) {
			$('#timeline-side').addClass('active');
		} else {
			$('#timeline-side').removeClass('active');
		}
	}
}

$(window).scroll(function() {
	update_timeline_side();
});

update_timeline_side();

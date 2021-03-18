export default function bar(){
    var gridster;

$(function() {
	var $debug = $("#debug");
	console.log('yyy')
	function log(what) {
		console.warn("INFO", what);
		$debug.text(JSON.stringify(what, null, 1));
	}

	gridster = $('.gridster ul')
		.gridster({
			widget_selector: 'li',
			widget_margins: [10, 10],
			widget_base_dimensions: [150, 150],
			min_cols: 6,
			resize: {
				enabled: true
			},
			draggable: {
				start: function(event, ui) {
					console.log(event, ui);
				},
				stop: function(event, ui) {
					console.log(event, ui);
					log(gridster.serialize());
				}
			}
		})
		.data('gridster');
	
	$('.demo').css('opacity', 1);

	
});

}
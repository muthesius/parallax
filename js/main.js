$( function(){


	$('.blob-link').click(function() { $('#' + $(this).attr('data-blob-id') + '').css('display','table'); });
	
	$('.blob-wrapper').click(function() { $(this).hide(); });


});
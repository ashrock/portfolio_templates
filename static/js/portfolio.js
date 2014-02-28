$(document).ready(function(){
	// $('#portfolio_tab').tab()
	$('#wrapper').on('click','.project_link', function(e){
		e.preventDefault();
		$(this).parents('.project_list').find('.project_link.active').removeClass('active');
		var preview_pane = $(this).parents('.project_list').siblings('.preview_pane_container').find(' .preview_pane');
		var info_link = $(this).parents('.project_list').siblings('.preview_pane_container').find(' .info_link');
		preview_pane.html('<iframe src="'+ $(this).attr('href') +'" frameborder="0" width="100%" height="400px"></iframe>');
		var title_block = $(this).parents('.project_list').siblings('.preview_pane_container').find('h4');
		var description_block = $(this).parents('.project_list').siblings('.preview_pane_container').find('.project_description');
		var technologies_block = $(this).parents('.project_list').siblings('.preview_pane_container').find('.technologies_used');
		description_block.html($(this).attr('data-description'));
		title_block.html($(this).attr('data-title'));
		technologies_block.html('<b>Technologies Used:</b> '+ $(this).attr('data-technologies'));
		info_link.html('<a href="'+ $(this).attr('data-link') +'">'+ $(this).attr('data-link') +'</a>');
		$(this).addClass('active');
	});

	$('.project_list').each(function(){
		var list_item = $(this).find('.project_link:first-child');
		var preview_pane_container = $(this).siblings('.preview_pane_container')
		var preview_pane = preview_pane_container.find('.preview_pane');
		var info_link = preview_pane_container.find('.info_link');
		var title_block = preview_pane_container.find('h4');
		var description_block = preview_pane_container.find('.project_description');
		var technologies_block = preview_pane_container.find('.technologies_used');
		preview_pane.html('<iframe src="'+ list_item.attr('href') +'" frameborder="0" width="100%" height="400px"></iframe>');

		description_block.html(list_item.attr('data-description'));
		
		technologies_block.html('<b>Technologies Used:</b> '+ list_item.attr('data-technologies'));
		title_block.html(list_item.attr('data-title'));
		info_link.html('<a href="'+ list_item.attr('data-link') +'">'+ list_item.attr('data-link') +'</a>');
		list_item.addClass('active');
	});
})
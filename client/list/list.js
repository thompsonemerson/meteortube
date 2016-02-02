$(function(){

	var list = [
		{ title: 'An Introduction to Meteor', id: 'dOCMpoeuwTI' },
		{ title: 'Intro to Meteor.js', id: 'RpQTPWvD6HA' },
		{ title: 'Getting Started With Meteor Tutorial', id: 'O_3xigLvV0E' },
		{ title: 'Get started with Meteor and React', id: 'kVbVBp35keQ' },
		{ title: 'Building a Meteor.js mobile app with Cordova, MongoDB, and Ratchet', id: '7iqdkVwtuvg' },
		{ title: '#1 Building a Database application with Meteor JS', id: '9i3CCy3NpYM' },
		{ title: 'Building a simple Facebook clone in Meteor.js', id: 'Ml85Kvrz-5c' },
		{ title: 'Advanced Meteor.js - A Chat App', id: 'PVqsAZyXWQ8' },
		{ title: 'intro to Meteor JS tutorial part 1', id: 'Eoh4uhNlFt0' },
	];

	$('.list .items').html('');
	$(list).each(function( index ) {
		var title = $(this)[0].title,
			id = $(this)[0].id;

		$('.list .items').append('<a href="javascript:void(0)" class="item" data-video="'+id+'"><figure class="thumb"><img src="http://img.youtube.com/vi/'+id+'/hqdefault.jpg" alt=""></figure><div class="title">'+title+'</div></a>');
	
	});

	$('[data-video]').click(function(){
		var id = $(this).data('video'),
			video = '<iframe width="420" height="315" src="//www.youtube.com/embed/'+ id +'?rel=0&amp;showinfo=1&amp;autoplay=1" frameborder="0" allowfullscreen=""></iframe>';
		
		$('.player .play').html(video);
		$('.player').addClass('open');

		$("html, body").animate({ scrollTop: 0 }, "slow");

		return false;
	});
});
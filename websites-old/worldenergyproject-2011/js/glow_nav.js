		$(document).ready(function() {
			$('<div id="glow">supbro</div>').css({ 
				width: $('.nav li:first a').width() + 10,
				height: $('.nav li:first a').height() + 100,
				color: '#000'
			}).appendTo('.nav');
			$('.nav a').hover(function(){
				alert($(this).position().left);
				$('#glow').css(
				{width: $(this).width() + 10, 
				left: $(this).position().left}
				);
				alert("In");
			}, function() {
				
				$('#glow')
					.stop(true)
					.animate(
						{width: 'hide'},
						{duration: 'slow', easing: 'easeOutCirc', queue: false}
					)
					.animate(
						{left: $('.nav li:first a').position().left},
						'fast'
					);
				alert("out");
			});
		});
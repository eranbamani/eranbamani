$( function(){
	$( ".carousel-close" ).on('click', function(){
		var carousel_id = $(this).data("carousel-id");
		
		$("#" + carousel_id).fadeOut();
	});
	
	$( ".left-arrow" ).on('click', function(){
		
		var carousel_id = $(this).data("carousel-id");
		
		var img = $( "#" + carousel_id + " .img-center-carousel" );

		for (var i = 0; i < img.length; i++){
			if ($( img.eq(i) ).css("display") != "none"){
				$( img.eq(i) ).fadeOut();
				var j = i;
				if (j == 0){
					j = img.length - 1;
				}
				else {
					j = j - 1;
				}
				$( img.eq(j) ).fadeIn();
				break;
			}
		}
	});
	
	$( ".right-arrow" ).on('click', function(){
		
		var carousel_id = $(this).data("carousel-id");
		
		var img = $( "#" + carousel_id + " .img-center-carousel" );

		for (var i = 0; i < img.length; i++){
			if ($( img.eq(i) ).css("display") != "none"){
				$( img.eq(i) ).fadeOut();
				var j = i;
				if (j == img.length - 1){
					j = 0;
				}
				else {
					j = j + 1;
				}
				$( img.eq(j) ).fadeIn();
				break;
			}
		}
	});
	
	$( ".thumbnail" ).on('click', function(){
		
		//var Page = $(this).attr("class").split("-")[0];
		
		var carousel_id = $(this).data("id");
		
		$( "#" + carousel_id ).fadeIn();
	
	})
	
} );
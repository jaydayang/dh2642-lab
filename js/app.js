$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	// And create the instance of ExampleView
	var exampleView = new ExampleView($("#exampleView"), model);

	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */
	
	$(".plusGuest").click(function(){ 
			var add = $(this).siblings(".numberOfGuests"); 
			add.val(parseInt(add.val())+1) 
			addRoom();
		}); 
		
		/*单击减号按钮减少房间*/
	$(".minusGuest").click(function(){ 
			var min = $(this).siblings(".numberOfGuests"); 
			min.val(parseInt(min.val())-1) 
			if(parseInt(min.val())<1){ 
				min.val(1);

			}});
			

});

// JavaScript Documentvar SidebarViewController = function (view, model){	view.plusGuestBtn.on('click', function(event){		model.setNumberOfGuests(model.getNumberOfGuests() + 1);	})		view.minusGuestBtn.on('click', function(event){		model.setNumberOfGuests(model.getNumberOfGuests() - 1);	})	view.confirmBtn.on('click', function(event){				$("#sidebarView").hide();		$("#dishsearchView").hide();		$("#dinnerView").show();	})	//$("#ingredientList").addToMenuBtn.on('click',function(event){	//	model.addDishToMenu(2);	//})		}
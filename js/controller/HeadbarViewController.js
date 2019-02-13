// JavaScript Document
var HeadbarViewController = function (view, model,app){
	

	view.backBtn.on('click', function(event){
		app.hideAllViews();
		$('#sidebarView').show();
		$('#dishsearchView').show();
		
		
		

	})

	
}


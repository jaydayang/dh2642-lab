// JavaScript Document

var WelcomeViewController = function (view, model,app){
	
	view.createNewPlanBtn.on('click', function(event){
		app.hideAllViews();
		$('#sidebarView').show();
		$('#dishsearchView').show();
		//view.style.display = 'none';
		//view.contianer.hide();
	})
	
}
// JavaScript Document
var DishsearchViewController = function (view, model){


	view.searchBtn.on('click',function(event){

		
		//console.log("typeeoooooiiioioee"+view.type);
		//console.log("text"+view.text);
		model.getSelectedDish(this.type,this.text);
		
		
	})

	view.dishdisplay.on('click', '.meal', function(event){
 	   var id = $(this).attr('id'); 
 	   model.setDish(id);
 	   //console.log("idddddd"+id);
 	   view.hide();
 	   $("#detailView").show();
 	   $("#ingredientList").show();
      
 	})
	
}

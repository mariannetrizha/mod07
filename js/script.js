$("ul").on("click", "li", function() {
	// $(this).css("color", "lightgrey");
	// $(this).css("text-decoration", "line-through")
	$(this).toggleClass("completed");	
}); 

$("li").on("click", "input[type='checkbox']", function() {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
});

$("input[type='text']").keypress(function(event){
	if (event.which === 13) { //13 == enter key 
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><input type='checkbox'>" + todoText +" </li>");
	}
});
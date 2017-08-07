// Check off todos when clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// delete todo when x is clocked
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
	event.stopPropagation(); 
});

$("input[type='text']").keypress(function(event){
	if (event.which === 13){
		// record text input
		todoInput = $(this).val();
		// clear input
		$(this).val("");
		// create new li and add input
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoInput + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});
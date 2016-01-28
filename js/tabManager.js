var activeDoc, home, about, projects, contact, drawers, drawerWidth;


var switchTab =function(event){
		var target =event.target.id.substring(0,event.target.id.length-1);
		var targetNum =0;

		drawers[activeDoc].removeClass("active");
		switch(target){
			case "Home":
			targetNum=0;
			break;
			/*case "About":
			targetNum =1;
			break;*/
			case "Projects":
			targetNum=1;
			break;
			case "Contact":
			targetNum=2;
			break;				
		}
		console.log(targetNum);
		if(targetNum>activeDoc){	
			for(var i=0; i<targetNum;i++)
			{
				drawers[i].css("left",((i*5)-85)+"%");
			}
		}
		else if(targetNum<activeDoc){
			for(var i=targetNum; i<activeDoc;i++)
			{
				console.log("move " +i);
				drawers[i].css("left",((i*5)+"%"));
			}
		}


		activeDoc =targetNum;
		drawers[activeDoc].addClass("active");

};

$(window).load(function(){
  $(".loading").fadeOut("slow", function(){
    $(".content").fadeIn("slow");
  });
});

$(document).ready(function(){

	drawers = [$("#Home")/*, $("#About")*/,$("#Projects"),$("#Contact")];
	$(".button").click(switchTab);
	activeDoc=0;

});
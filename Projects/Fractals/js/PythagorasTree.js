var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.strokeStyle="#FF0000";
//draws rectangle knowing base and size
function angleSlider(ele)
{
	var ID = ele.id;
	if (ID =="theta1") {
		document.getElementById("theta2").value = (90 - parseInt(document.getElementById("theta1").value));

	} else if(ID == "theta2"){
		document.getElementById("theta1").value = 90 - parseInt(document.getElementById("theta2").value);
	};
	document.getElementById("theta1Value").innerHTML = document.getElementById("theta1").value;
	document.getElementById("theta2Value").innerHTML = document.getElementById("theta2").value;
}
function updateRectangle()
{
	var x1 = parseInt(document.getElementById("x1").value);
	var y1 =parseInt(document.getElementById("y1").value);
	var x2 =parseInt(document.getElementById("x2").value);
	var y2=  parseInt(document.getElementById("y2").value);
	var depth = parseInt(document.getElementById("reps").value);
	drawRectangle(x1,y1,x2,y2,depth);
}
function drawRectangle(x1,y1,x2,y2,max)
{
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.clearRect(0,0,1024,800);	
drawRectangleRe(x1,y1,x2,y2,1,max);


}
function drawRectangleRe(x1,y1,x2,y2,depth,max)
{
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");	
	if(depth<max){
		var color;
	var colorArr =["#1f3b08","#3b6119","#598037","#678c47","#83a367","#97b080"];
	if(depth <3){
		color = colorArr[0];
	}
	else if(depth>=3 && depth<5)
		color = colorArr[1];
	else if(depth>=5 && depth <12)
		color = colorArr[2];
	else if(depth>=12 && depth <18)
		color = colorArr[3];
	else if(depth>=18 & depth <24)
		color = colorArr[4];
	else
		color = colorArr[5];


	
	//Draw Box
	ctx.strokeStyle=color;
	ctx.fillStyle=color;
	ctx.beginPath();
	ctx.moveTo(x1,y1);
	ctx.lineTo(x2,y2);
	var x3 =((1*(y2-y1))+x2);
	var y3 = ((-1*(x2-x1))+y2);
	ctx.lineTo(x3,y3);
	var x4 = ((1*(y3-y2))+x3);
	var y4 =(-1*(x3-x2))+y3;
	ctx.lineTo(x4,y4);
	ctx.lineTo(x1,y1);
	ctx.closePath();
	//FILLS SQUARES
	ctx.fill();
	ctx.stroke();
	//Normal vector
	var xp =(y3-y4);
	var yp = (x4-x3);
	//Unit Vector at mid point
	var vecNorm = Math.sqrt((xp)*(xp) + (yp)*(yp));
	var xu = xp/vecNorm;
	var yu = yp/vecNorm;
	//Get proper norm
	var cos1 = Math.cos(parseInt(document.getElementById("theta1").value)*2*Math.PI*(1/360));
	var cos2 = Math.cos(parseInt(document.getElementById("theta2").value)*2*Math.PI*(1/360));
	var propNorm =(Math.sqrt((xp)*(xp) + (yp)*(yp)))*cos1*cos2;
	xp = xu*propNorm;
	yp = yu*propNorm;
	//Put at position
	xp += ((x4-x3)*(cos1*cos1))+x3;
	yp += ((y4-y3)*(cos1*cos1))+y3;
	//FILLS TRIANGLE
	
	ctx.beginPath();
	ctx.moveTo(x4,y4);
	ctx.lineTo(x3,y3);
	ctx.lineTo(xp,yp);
	ctx.closePath();
	ctx.fill();
	//Left
	drawRectangleRe(x4,y4,xp,yp,depth+1,max);
	//Right
	drawRectangleRe(xp,yp,x3,y3,depth+1,max);
}

}
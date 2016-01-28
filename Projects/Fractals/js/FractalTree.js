function showCoords(e)
		{
			var h= document.getElementById("myCanvas").height;
			var w = document.getElementById("myCanvas").width;
			var x = (e.clientX)*Math.PI/(4*h);
			var y = (e.clientY)*Math.PI/(4*w);
			drawTree(w/2,h,y,x);
			
		}
		function drawTree(x1,y1,angleChangeL,angleChangeR)
		{
			var max = document.getElementById("depth").value;
			var canvas = document.getElementById("myCanvas");
			var ctx = canvas.getContext("2d");
			ctx.clearRect(0,0,1024,800);
			drawTreeRe(x1,y1,-Math.PI/2,1,angleChangeL,angleChangeR,max);
		}
		function drawTreeRe(x1,y1,angle,depth,angleChangeL,angleChangeR,max)
		{
			if (depth<=max) {
			var size = document.getElementById("size").value;
			var canvas = document.getElementById("myCanvas");
			var ctx = canvas.getContext("2d");
			if(depth<4)
				{ctx.strokeStyle = "#33AD5C";}
			else if(depth>=4 && depth <6)
				ctx.strokeStyle = "#009933";
			else if(depth>=6 && depth <8)
				ctx.strokeStyle = "#009933";
			else
				ctx.strokeStyle = "#003D14";

			var ratio = (document.getElementById("ratio").value)/100;
			ctx.lineWidth = Math.pow(ratio,depth)*20;
			ctx.lineCap = "round";
			var x2 = x1 + (Math.cos(angle)*Math.pow(ratio,depth)*size);
			var y2 = y1 + (Math.sin(angle)*Math.pow(ratio,depth)*size);
			ctx.beginPath();
			ctx.moveTo(x1,y1);
			ctx.lineTo(x2,y2);
			ctx.stroke();
			ctx.strokeStyle ="003D14";
			//Left
			drawTreeRe(x2,y2,angle-angleChangeL,depth+1,angleChangeL,angleChangeR,max);
			//Right
			drawTreeRe(x2,y2,angle+angleChangeR, depth+1,angleChangeL,angleChangeR,max);
		} 	

		}
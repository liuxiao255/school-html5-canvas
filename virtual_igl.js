function draw_dashboard(canvas,x,y,width,height,range){     //画仪表盘的函数
	canvas.clearRect(x,y,width,height);
	canvas.fillStyle = '#CCCCCC';
	canvas.fillRect(x,y,width,height);
	canvas.fillStyle = 'black';
	canvas.fillRect(x+0.025*width,y+0.05*height,0.95*width,0.9*height);
	canvas.fillStyle = 'white'; 
	canvas.fillRect(x+0.05*width,y+0.1*height,0.9*width,0.8*height);
	canvas.translate(0.5*width,1.18*height);
	var deg=2*Math.PI/12;
	var step = range / 4;
	//数字
	canvas.save();
	canvas.beginPath();
	for(var i=0;i<=range;i+=step){
		var x1=Math.sin((i/step-2)*deg);
		var y1=-Math.cos((i/step-2)*deg);
		canvas.fillStyle="black";
		canvas.font="bold 30px Calibri";
		canvas.textAlign='center';
		canvas.textBaseline='middle';
		canvas.fillText(i,x+x1*width*0.39,y+y1*height*0.78);    
	}
	canvas.closePath();    
	canvas.restore(); 
	//大刻度
	canvas.save();
	canvas.beginPath();    
	for(var i=-2;i<3;i++){
		var x2=Math.sin(i*deg);
		var y2=-Math.cos(i*deg);
		canvas.moveTo(x+x2*width*0.5,y+y2*height);
		canvas.lineTo(x+x2*width*0.43,y+y2*height*0.86);    
	}    
	canvas.strokeStyle='black';
	canvas.lineWidth=4;
	canvas.stroke();
	canvas.closePath();
	canvas.restore(); 
	//小刻度
	canvas.save();
	var deg1=2*Math.PI/60;
	canvas.beginPath();    
	for(var i=-10;i<10;i++){
		var x2=Math.sin(i*deg1);
		var y2=-Math.cos(i*deg1);
		canvas.moveTo(x+x2*width*0.48,y+y2*height*0.96);
		canvas.lineTo(x+x2*width*0.445,y+y2*height*0.89);    
	}    
	canvas.strokeStyle='black';
	canvas.lineWidth=2;
	canvas.stroke();
	canvas.closePath();    
	canvas.restore();
	canvas.translate(-0.5*width,-1.18*height);
	canvas.restore();
}




function draw_blueRect(canvas,x,y,width,height){  //画蓝色矩形
	canvas.fillStyle = 'blue';
	canvas.fillRect(x,y,width,height);
}
function draw_blackRect(canvas,x,y,width,height){ //画黑色矩形
	canvas.fillStyle = 'black';
	canvas.fillRect(x,y,width,height);
}
function draw_purpleRect(canvas,x,y,width,height){ //画紫色矩形
	canvas.fillStyle = 'purple';
	canvas.fillRect(x,y,width,height);
}
function draw_redRect(canvas,x,y,width,height){ //画红色矩形
	canvas.fillStyle = 'red';
	canvas.fillRect(x,y,width,height);
}
function draw_greenRect(canvas,x,y,width,height){ //画绿色矩形
	canvas.fillStyle = 'green';
	canvas.fillRect(x,y,width,height);
}
function draw_yellowRect(canvas,x,y,width,height){ //画黄色矩形
	canvas.fillStyle = 'yellow';
	canvas.fillRect(x,y,width,height);
}
function draw_whiteRect(canvas,x,y,width,height){ //画白色矩形
	canvas.fillStyle = 'white';
	canvas.fillRect(x,y,width,height);
}
function draw_brownRect(canvas,x,y,width,height){ //画棕色矩形
	canvas.fillStyle = 'brown';
	canvas.fillRect(x,y,width,height);
}
function draw_pinkRect(canvas,x,y,width,height){ //画粉色矩形
	canvas.fillStyle = 'pink';
	canvas.fillRect(x,y,width,height);
}
function draw_greyRect(canvas,x,y,width,height){ //画灰色矩形
	canvas.fillStyle = 'grey';
	canvas.fillRect(x,y,width,height);
}
function draw_grey2Rect(canvas,x,y,width,height){ //画灰色矩形
	canvas.fillStyle = '#CCCCCC';
	canvas.fillRect(x,y,width,height);
}




function draw_blueGraduation(canvas,x,y,r,start,end){  //画蓝色刻度线
	canvas.translate(x,y);
	var deg=2*Math.PI/12;
	var start1 = start / deg - 3 , end1 = end / deg - 3 ;
	//大刻度
	canvas.save();
	canvas.beginPath();    
	for(var i=start1;i<=end1;i++){
		var x2=Math.sin(i*deg);
		var y2=-Math.cos(i*deg);
		canvas.moveTo(x2*r,y2*r);
		canvas.lineTo(x2*r*0.8,y2*r*0.8);    
	}    
	canvas.strokeStyle='blue';
	canvas.lineWidth=4;
	canvas.stroke();
	canvas.closePath();
	canvas.restore(); 
	//小刻度
	canvas.save();
	var deg1=2*Math.PI/60;
	var start2 = start / deg1 - 15 , end2 = end / deg1 - 15 ;
	canvas.beginPath();    
	for(var i=start2;i<=end2;i++){
		var x2=Math.sin(i*deg1);
		var y2=-Math.cos(i*deg1);
		canvas.moveTo(x2*r*0.95,y2*r*0.95);
		canvas.lineTo(x2*r*0.85,y2*r*0.85);    
	}    
	canvas.strokeStyle='blue';
	canvas.lineWidth=2;
	canvas.stroke();
	canvas.closePath();    
	canvas.restore();
	canvas.translate(-x,-y);
}
function draw_blackGraduation(canvas,x,y,r,start,end){  //画黑色刻度线
	canvas.translate(x,y);
	var deg=2*Math.PI/12;
	var start1 = start / deg - 3 , end1 = end / deg - 3 ;
	//大刻度
	canvas.save();
	canvas.beginPath();    
	for(var i=start1;i<=end1;i++){
		var x2=Math.sin(i*deg);
		var y2=-Math.cos(i*deg);
		canvas.moveTo(x2*r,y2*r);
		canvas.lineTo(x2*r*0.8,y2*r*0.8);    
	}    
	canvas.strokeStyle='black';
	canvas.lineWidth=4;
	canvas.stroke();
	canvas.closePath();
	canvas.restore(); 
	//小刻度
	canvas.save();
	var deg1=2*Math.PI/60;
	var start2 = start / deg1 - 15 , end2 = end / deg1 - 15 ;
	canvas.beginPath();    
	for(var i=start2;i<=end2;i++){
		var x2=Math.sin(i*deg1);
		var y2=-Math.cos(i*deg1);
		canvas.moveTo(x2*r*0.95,y2*r*0.95);
		canvas.lineTo(x2*r*0.85,y2*r*0.85);    
	}    
	canvas.strokeStyle='black';
	canvas.lineWidth=2;
	canvas.stroke();
	canvas.closePath();    
	canvas.restore();
	canvas.translate(-x,-y);
}
function draw_purpleGraduation(canvas,x,y,r,start,end){  //画紫色刻度线
	canvas.translate(x,y);
	var deg=2*Math.PI/12;
	var start1 = start / deg - 3 , end1 = end / deg - 3 ;
	//大刻度
	canvas.save();
	canvas.beginPath();    
	for(var i=start1;i<=end1;i++){
		var x2=Math.sin(i*deg);
		var y2=-Math.cos(i*deg);
		canvas.moveTo(x2*r,y2*r);
		canvas.lineTo(x2*r*0.8,y2*r*0.8);    
	}    
	canvas.strokeStyle='purple';
	canvas.lineWidth=4;
	canvas.stroke();
	canvas.closePath();
	canvas.restore(); 
	//小刻度
	canvas.save();
	var deg1=2*Math.PI/60;
	var start2 = start / deg1 - 15 , end2 = end / deg1 - 15 ;
	canvas.beginPath();    
	for(var i=start2;i<=end2;i++){
		var x2=Math.sin(i*deg1);
		var y2=-Math.cos(i*deg1);
		canvas.moveTo(x2*r*0.95,y2*r*0.95);
		canvas.lineTo(x2*r*0.85,y2*r*0.85);    
	}    
	canvas.strokeStyle='purple';
	canvas.lineWidth=2;
	canvas.stroke();
	canvas.closePath();    
	canvas.restore();
	canvas.translate(-x,-y);
}
function draw_redGraduation(canvas,x,y,r,start,end){  //画红色刻度线
	canvas.translate(x,y);
	var deg=2*Math.PI/12;
	var start1 = start / deg - 3 , end1 = end / deg - 3 ;
	//大刻度
	canvas.save();
	canvas.beginPath();    
	for(var i=start1;i<=end1;i++){
		var x2=Math.sin(i*deg);
		var y2=-Math.cos(i*deg);
		canvas.moveTo(x2*r,y2*r);
		canvas.lineTo(x2*r*0.8,y2*r*0.8);    
	}    
	canvas.strokeStyle='red';
	canvas.lineWidth=4;
	canvas.stroke();
	canvas.closePath();
	canvas.restore(); 
	//小刻度
	canvas.save();
	var deg1=2*Math.PI/60;
	var start2 = start / deg1 - 15 , end2 = end / deg1 - 15 ;
	canvas.beginPath();    
	for(var i=start2;i<=end2;i++){
		var x2=Math.sin(i*deg1);
		var y2=-Math.cos(i*deg1);
		canvas.moveTo(x2*r*0.95,y2*r*0.95);
		canvas.lineTo(x2*r*0.85,y2*r*0.85);    
	}    
	canvas.strokeStyle='red';
	canvas.lineWidth=2;
	canvas.stroke();
	canvas.closePath();    
	canvas.restore();
	canvas.translate(-x,-y);
}
function draw_greenGraduation(canvas,x,y,r,start,end){
	canvas.translate(x,y);
	var deg=2*Math.PI/12;
	var start1 = start / deg - 3 , end1 = end / deg - 3 ;
	//大刻度
	canvas.save();
	canvas.beginPath();    
	for(var i=start1;i<=end1;i++){
		var x2=Math.sin(i*deg);
		var y2=-Math.cos(i*deg);
		canvas.moveTo(x2*r,y2*r);
		canvas.lineTo(x2*r*0.8,y2*r*0.8);    
	}    
	canvas.strokeStyle='green';
	canvas.lineWidth=4;
	canvas.stroke();
	canvas.closePath();
	canvas.restore(); 
	//小刻度
	canvas.save();
	var deg1=2*Math.PI/60;
	var start2 = start / deg1 - 15 , end2 = end / deg1 - 15 ;
	canvas.beginPath();    
	for(var i=start2;i<=end2;i++){
		var x2=Math.sin(i*deg1);
		var y2=-Math.cos(i*deg1);
		canvas.moveTo(x2*r*0.95,y2*r*0.95);
		canvas.lineTo(x2*r*0.85,y2*r*0.85);    
	}    
	canvas.strokeStyle='green';
	canvas.lineWidth=2;
	canvas.stroke();
	canvas.closePath();    
	canvas.restore();
	canvas.translate(-x,-y);
}
function draw_yellowGraduation(canvas,x,y,r,start,end){
	canvas.translate(x,y);
	var deg=2*Math.PI/12;
	var start1 = start / deg - 3 , end1 = end / deg - 3 ;
	//大刻度
	canvas.save();
	canvas.beginPath();    
	for(var i=start1;i<=end1;i++){
		var x2=Math.sin(i*deg);
		var y2=-Math.cos(i*deg);
		canvas.moveTo(x2*r,y2*r);
		canvas.lineTo(x2*r*0.8,y2*r*0.8);    
	}    
	canvas.strokeStyle='yellow';
	canvas.lineWidth=4;
	canvas.stroke();
	canvas.closePath();
	canvas.restore(); 
	//小刻度
	canvas.save();
	var deg1=2*Math.PI/60;
	var start2 = start / deg1 - 15 , end2 = end / deg1 - 15 ;
	canvas.beginPath();    
	for(var i=start2;i<=end2;i++){
		var x2=Math.sin(i*deg1);
		var y2=-Math.cos(i*deg1);
		canvas.moveTo(x2*r*0.95,y2*r*0.95);
		canvas.lineTo(x2*r*0.85,y2*r*0.85);    
	}    
	canvas.strokeStyle='yellow';
	canvas.lineWidth=2;
	canvas.stroke();
	canvas.closePath();    
	canvas.restore();
	canvas.translate(-x,-y);
}
function draw_whiteGraduation(canvas,x,y,r,start,end){
	canvas.translate(x,y);
	var deg=2*Math.PI/12;
	var start1 = start / deg - 3 , end1 = end / deg - 3 ;
	//大刻度
	canvas.save();
	canvas.beginPath();    
	for(var i=start1;i<=end1;i++){
		var x2=Math.sin(i*deg);
		var y2=-Math.cos(i*deg);
		canvas.moveTo(x2*r,y2*r);
		canvas.lineTo(x2*r*0.8,y2*r*0.8);    
	}    
	canvas.strokeStyle='white';
	canvas.lineWidth=4;
	canvas.stroke();
	canvas.closePath();
	canvas.restore(); 
	//小刻度
	canvas.save();
	var deg1=2*Math.PI/60;
	var start2 = start / deg1 - 15 , end2 = end / deg1 - 15 ;
	canvas.beginPath();    
	for(var i=start2;i<=end2;i++){
		var x2=Math.sin(i*deg1);
		var y2=-Math.cos(i*deg1);
		canvas.moveTo(x2*r*0.95,y2*r*0.95);
		canvas.lineTo(x2*r*0.85,y2*r*0.85);    
	}    
	canvas.strokeStyle='white';
	canvas.lineWidth=2;
	canvas.stroke();
	canvas.closePath();    
	canvas.restore();
	canvas.translate(-x,-y);
}
function draw_brownGraduation(canvas,x,y,r,start,end){
	canvas.translate(x,y);
	var deg=2*Math.PI/12;
	var start1 = start / deg - 3 , end1 = end / deg - 3 ;
	//大刻度
	canvas.save();
	canvas.beginPath();    
	for(var i=start1;i<=end1;i++){
		var x2=Math.sin(i*deg);
		var y2=-Math.cos(i*deg);
		canvas.moveTo(x2*r,y2*r);
		canvas.lineTo(x2*r*0.8,y2*r*0.8);    
	}    
	canvas.strokeStyle='brown';
	canvas.lineWidth=4;
	canvas.stroke();
	canvas.closePath();
	canvas.restore(); 
	//小刻度
	canvas.save();
	var deg1=2*Math.PI/60;
	var start2 = start / deg1 - 15 , end2 = end / deg1 - 15 ;
	canvas.beginPath();    
	for(var i=start2;i<=end2;i++){
		var x2=Math.sin(i*deg1);
		var y2=-Math.cos(i*deg1);
		canvas.moveTo(x2*r*0.95,y2*r*0.95);
		canvas.lineTo(x2*r*0.85,y2*r*0.85);    
	}    
	canvas.strokeStyle='brown';
	canvas.lineWidth=2;
	canvas.stroke();
	canvas.closePath();    
	canvas.restore();
	canvas.translate(-x,-y);
}
function draw_pinkGraduation(canvas,x,y,r,start,end){
	canvas.translate(x,y);
	var deg=2*Math.PI/12;
	var start1 = start / deg - 3 , end1 = end / deg - 3 ;
	//大刻度
	canvas.save();
	canvas.beginPath();    
	for(var i=start1;i<=end1;i++){
		var x2=Math.sin(i*deg);
		var y2=-Math.cos(i*deg);
		canvas.moveTo(x2*r,y2*r);
		canvas.lineTo(x2*r*0.8,y2*r*0.8);    
	}    
	canvas.strokeStyle='pink';
	canvas.lineWidth=4;
	canvas.stroke();
	canvas.closePath();
	canvas.restore(); 
	//小刻度
	canvas.save();
	var deg1=2*Math.PI/60;
	var start2 = start / deg1 - 15 , end2 = end / deg1 - 15 ;
	canvas.beginPath();    
	for(var i=start2;i<=end2;i++){
		var x2=Math.sin(i*deg1);
		var y2=-Math.cos(i*deg1);
		canvas.moveTo(x2*r*0.95,y2*r*0.95);
		canvas.lineTo(x2*r*0.85,y2*r*0.85);    
	}    
	canvas.strokeStyle='pink';
	canvas.lineWidth=2;
	canvas.stroke();
	canvas.closePath();    
	canvas.restore();
	canvas.translate(-x,-y);
}
function draw_greyGraduation(canvas,x,y,r,start,end){
	canvas.translate(x,y);
	var deg=2*Math.PI/12;
	var start1 = start / deg - 3 , end1 = end / deg - 3 ;
	//大刻度
	canvas.save();
	canvas.beginPath();    
	for(var i=start1;i<=end1;i++){
		var x2=Math.sin(i*deg);
		var y2=-Math.cos(i*deg);
		canvas.moveTo(x2*r,y2*r);
		canvas.lineTo(x2*r*0.8,y2*r*0.8);    
	}    
	canvas.strokeStyle='grey';
	canvas.lineWidth=4;
	canvas.stroke();
	canvas.closePath();
	canvas.restore(); 
	//小刻度
	canvas.save();
	var deg1=2*Math.PI/60;
	var start2 = start / deg1 - 15 , end2 = end / deg1 - 15 ;
	canvas.beginPath();    
	for(var i=start2;i<=end2;i++){
		var x2=Math.sin(i*deg1);
		var y2=-Math.cos(i*deg1);
		canvas.moveTo(x2*r*0.95,y2*r*0.95);
		canvas.lineTo(x2*r*0.85,y2*r*0.85);    
	}    
	canvas.strokeStyle='grey';
	canvas.lineWidth=2;
	canvas.stroke();
	canvas.closePath();    
	canvas.restore();
	canvas.translate(-x,-y);
}




function draw_blueCircular(canvas,x,y,r,start,end){  //画各种颜色的圆
	canvas.beginPath();
	canvas.fillStyle = 'blue';
	canvas.arc(x,y,r,start+Math.PI,end+Math.PI,false);
	canvas.fill();
}
function draw_blackCircular(canvas,x,y,r,start,end){
	canvas.beginPath();
	canvas.fillStyle = 'black';
	canvas.arc(x,y,r,start+Math.PI,end+Math.PI,false);
	canvas.fill();
}
function draw_purpleCircular(canvas,x,y,r,start,end){
	canvas.beginPath();
	canvas.fillStyle = 'purple';
	canvas.arc(x,y,r,start+Math.PI,end+Math.PI,false);
	canvas.fill();
}
function draw_redCircular(canvas,x,y,r,start,end){
	canvas.beginPath();
	canvas.fillStyle = 'red';
	canvas.arc(x,y,r,start+Math.PI,end+Math.PI,false);
	canvas.fill();
}
function draw_greenCircular(canvas,x,y,r,start,end){
	canvas.beginPath();
	canvas.fillStyle = 'green';
	canvas.arc(x,y,r,start+Math.PI,end+Math.PI,false);
	canvas.fill();
}
function draw_yellowCircular(canvas,x,y,r,start,end){
	canvas.beginPath();
	canvas.fillStyle = 'yellow';
	canvas.arc(x,y,r,start+Math.PI,end+Math.PI,false);
	canvas.fill();
}
function draw_whiteCircular(canvas,x,y,r,start,end){
	canvas.beginPath();
	canvas.fillStyle = 'white';
	canvas.arc(x,y,r,start+Math.PI,end+Math.PI,false);
	canvas.fill();
}
function draw_brownCircular(canvas,x,y,r,start,end){
	canvas.beginPath();
	canvas.fillStyle = 'brown';
	canvas.arc(x,y,r,start+Math.PI,end+Math.PI,false);
	canvas.fill();
}
function draw_pinkCircular(canvas,x,y,r,start,end){
	canvas.beginPath();
	canvas.fillStyle = 'pink';
	canvas.arc(x,y,r,start+Math.PI,end+Math.PI,false);
	canvas.fill();
}
function draw_greyCircular(canvas,x,y,r,start,end){
	canvas.beginPath();
	canvas.fillStyle = 'grey';
	canvas.arc(x,y,r,start+Math.PI,end+Math.PI,false);
	canvas.fill();
}




function draw_bluepoint(canvas,x,y,length,start,end){      //指针函数
	var i=0;
	function point_animate(){
		canvas.translate(x,y);
		canvas.rotate(start);
		canvas.clearRect(-length,-length,2*length,2*length);
		canvas.rotate((end-start)/100);
		canvas.beginPath();
		canvas.arc(0,0,0.015*x,0,2*Math.PI,true);
		canvas.fillStyle = 'blue';
		canvas.fill();
		canvas.strokeStyle='blue';
		canvas.moveTo(0,0);
		canvas.lineTo(-length,0);
		canvas.lineWidth=2;
		canvas.stroke();
		if(i<99){
			i++;
			canvas.rotate(-start);
			canvas.translate(-x,-y);
			requestAnimationFrame(point_animate);
		}
		canvas.restore();
	}
	point_animate();
}
function draw_blackpoint(canvas,x,y,length,start,end){      //指针函数
	var i=0;
	function point_animate(){
		canvas.translate(x,y);
		canvas.rotate(start);
		canvas.clearRect(-length,-length,2*length,2*length);
		canvas.rotate((end-start)/100);
		canvas.beginPath();
		canvas.arc(0,0,0.015*x,0,2*Math.PI,true);
		canvas.fillStyle = 'black';
		canvas.fill();
		canvas.strokeStyle='black';
		canvas.moveTo(0,0);
		canvas.lineTo(-length,0);
		canvas.lineWidth=2;
		canvas.stroke();
		if(i<99){
			i++;
			canvas.rotate(-start);
			canvas.translate(-x,-y);
			requestAnimationFrame(point_animate);
		}
		canvas.restore();
	}
	point_animate();
}
function draw_purplepoint(canvas,x,y,length,start,end){      //指针函数
	var i=0;
	function point_animate(){
		canvas.translate(x,y);
		canvas.rotate(start);
		canvas.clearRect(-length,-length,2*length,2*length);
		canvas.rotate((end-start)/100);
		canvas.beginPath();
		canvas.arc(0,0,0.015*x,0,2*Math.PI,true);
		canvas.fillStyle = 'purple';
		canvas.fill();
		canvas.strokeStyle='purple';
		canvas.moveTo(0,0);
		canvas.lineTo(-length,0);
		canvas.lineWidth=2;
		canvas.stroke();
		if(i<99){
			i++;
			canvas.rotate(-start);
			canvas.translate(-x,-y);
			requestAnimationFrame(point_animate);
		}
		canvas.restore();
	}
	point_animate();
}
function draw_redpoint(canvas,x,y,length,start,end){      //指针函数
	var i=0;
	function point_animate(){
		canvas.translate(x,y);
		canvas.rotate(start);
		canvas.clearRect(-length,-length,2*length,2*length);
		canvas.rotate((end-start)/100);
		canvas.beginPath();
		canvas.arc(0,0,0.015*x,0,2*Math.PI,true);
		canvas.fillStyle = 'red';
		canvas.fill();
		canvas.strokeStyle='red';
		canvas.moveTo(0,0);
		canvas.lineTo(-length,0);
		canvas.lineWidth=2;
		canvas.stroke();
		if(i<99){
			i++;
			canvas.rotate(-start);
			canvas.translate(-x,-y);
			requestAnimationFrame(point_animate);
		}
		canvas.restore();
	}
	point_animate();
}
function draw_greenpoint(canvas,x,y,length,start,end){      //指针函数
	var i=0;
	function point_animate(){
		canvas.translate(x,y);
		canvas.rotate(start);
		canvas.clearRect(-length,-length,2*length,2*length);
		canvas.rotate((end-start)/100);
		canvas.beginPath();
		canvas.arc(0,0,0.015*x,0,2*Math.PI,true);
		canvas.fillStyle = 'green';
		canvas.fill();
		canvas.strokeStyle='green';
		canvas.moveTo(0,0);
		canvas.lineTo(-length,0);
		canvas.lineWidth=2;
		canvas.stroke();
		if(i<99){
			i++;
			canvas.rotate(-start);
			canvas.translate(-x,-y);
			requestAnimationFrame(point_animate);
		}
		canvas.restore();
	}
	point_animate();
}
function draw_yellowpoint(canvas,x,y,length,start,end){      //指针函数
	var i=0;
	function point_animate(){
		canvas.translate(x,y);
		canvas.rotate(start);
		canvas.clearRect(-length,-length,2*length,2*length);
		canvas.rotate((end-start)/100);
		canvas.beginPath();
		canvas.arc(0,0,0.015*x,0,2*Math.PI,true);
		canvas.fillStyle = 'yellow';
		canvas.fill();
		canvas.strokeStyle='yellow';
		canvas.moveTo(0,0);
		canvas.lineTo(-length,0);
		canvas.lineWidth=2;
		canvas.stroke();
		if(i<99){
			i++;
			canvas.rotate(-start);
			canvas.translate(-x,-y);
			requestAnimationFrame(point_animate);
		}
		canvas.restore();
	}
	point_animate();
}
function draw_whitepoint(canvas,x,y,length,start,end){      //指针函数
	var i=0;
	function point_animate(){
		canvas.translate(x,y);
		canvas.rotate(start);
		canvas.clearRect(-length,-length,2*length,2*length);
		canvas.rotate((end-start)/100);
		canvas.beginPath();
		canvas.arc(0,0,0.015*x,0,2*Math.PI,true);
		canvas.fillStyle = 'white';
		canvas.fill();
		canvas.strokeStyle='white';
		canvas.moveTo(0,0);
		canvas.lineTo(-length,0);
		canvas.lineWidth=2;
		canvas.stroke();
		if(i<99){
			i++;
			canvas.rotate(-start);
			canvas.translate(-x,-y);
			requestAnimationFrame(point_animate);
		}
		canvas.restore();
	}
	point_animate();
}
function draw_brownpoint(canvas,x,y,length,start,end){      //指针函数
	var i=0;
	function point_animate(){
		canvas.translate(x,y);
		canvas.rotate(start);
		canvas.clearRect(-length,-length,2*length,2*length);
		canvas.rotate((end-start)/100);
		canvas.beginPath();
		canvas.arc(0,0,0.015*x,0,2*Math.PI,true);
		canvas.fillStyle = 'brown';
		canvas.fill();
		canvas.strokeStyle='brown';
		canvas.moveTo(0,0);
		canvas.lineTo(-length,0);
		canvas.lineWidth=2;
		canvas.stroke();
		if(i<99){
			i++;
			canvas.rotate(-start);
			canvas.translate(-x,-y);
			requestAnimationFrame(point_animate);
		}
		canvas.restore();
	}
	point_animate();
}
function draw_pinkpoint(canvas,x,y,length,start,end){      //指针函数
	var i=0;
	function point_animate(){
		canvas.translate(x,y);
		canvas.rotate(start);
		canvas.clearRect(-length,-length,2*length,2*length);
		canvas.rotate((end-start)/100);
		canvas.beginPath();
		canvas.arc(0,0,0.015*x,0,2*Math.PI,true);
		canvas.fillStyle = 'pink';
		canvas.fill();
		canvas.strokeStyle='pink';
		canvas.moveTo(0,0);
		canvas.lineTo(-length,0);
		canvas.lineWidth=2;
		canvas.stroke();
		if(i<99){
			i++;
			canvas.rotate(-start);
			canvas.translate(-x,-y);
			requestAnimationFrame(point_animate);
		}
		canvas.restore();
	}
	point_animate();
}
function draw_greypoint(canvas,x,y,length,start,end){      //指针函数
	var i=0;
	function point_animate(){
		canvas.translate(x,y);
		canvas.rotate(start);
		canvas.clearRect(-length,-length,2*length,2*length);
		canvas.rotate((end-start)/100);
		canvas.beginPath();
		canvas.arc(0,0,0.015*x,0,2*Math.PI,true);
		canvas.fillStyle = 'grey';
		canvas.fill();
		canvas.strokeStyle='grey';
		canvas.moveTo(0,0);
		canvas.lineTo(-length,0);
		canvas.lineWidth=2;
		canvas.stroke();
		if(i<99){
			i++;
			canvas.rotate(-start);
			canvas.translate(-x,-y);
			requestAnimationFrame(point_animate);
		}
		canvas.restore();
	}
	point_animate();
}





function draw_voltmeter(canvas,x,y,width,height,range,start,end,type){    //画电压表、电流表、电阻表的函数
	var i=0,length=200,start = start/range*2*Math.PI/3+Math.PI/6,end=end/range*2*Math.PI/3+Math.PI/6;
	function point_animate(){
		canvas.clearRect(-length,-length,2*length,2*length);
		draw_dashboard(canvas,x,y,width,0.5*height,range);
		canvas.translate(0.5*width,0.59*height);
		canvas.rotate(start);
		canvas.rotate(i*(end-start)/100);
		canvas.beginPath();
		canvas.arc(0,0,0.015*0.5*width,0,2*Math.PI,true);
		canvas.fillStyle = 'red';
		canvas.fill();
		canvas.strokeStyle='red';
		canvas.moveTo(0,0);
		canvas.lineTo(-length,0);
		canvas.lineWidth=2;
		canvas.stroke();
		canvas.rotate(-i*(end-start)/100);
		canvas.rotate(-start);
		canvas.translate(-0.5*width,-0.59*height);
		if(i<100){
			i++; 
			requestAnimationFrame(point_animate);
		}
		canvas.restore();
		draw_grey2Rect(canvas,x,0.475*height,width,0.25*height);
		var k=0.49;
		for(var j=0;j<8;j++){
			draw_whiteRect(canvas,x+0.025*width,k*height,0.95*width,0.015*height);
			k += 0.025;
		}
		draw_greenRect(canvas,x,0.698*height,width,0.25*height);
		draw_whiteCircular(canvas,0.2*width,0.828*height,0.05*width,0,2*Math.PI);
		draw_whiteCircular(canvas,0.8*width,0.828*height,0.05*width,0,2*Math.PI);
		draw_blueCircular(canvas,0.2*width,0.828*height,0.04*width,0,2*Math.PI);
		draw_redCircular(canvas,0.8*width,0.828*height,0.04*width,0,2*Math.PI);
		draw_blackCircular(canvas,0.2*width,0.828*height,0.028*width,0,2*Math.PI);
		draw_blackCircular(canvas,0.8*width,0.828*height,0.028*width,0,2*Math.PI);
		canvas.font="30px Verdana";
		canvas.fillStyle = 'black';
		if(type == 'v'){
			canvas.fillText("V",0.48*width,0.37*height);
		}
		if(type == 'a'){
			canvas.fillText("A",0.48*width,0.37*height);
		}
		if(type == 'r'){
			canvas.fillText("Ω",0.48*width,0.37*height);
		}
	}
	point_animate();
}




function draw_pressure_gauge(canvas,x,y,r,range,start,end){      //画压力表的函数
	start=start/range*5*Math.PI/3-Math.PI/3;end=end/range*5*Math.PI/3-Math.PI/3;
	var length=0.7*r,step=range/10,deg=2*Math.PI/12;
	var i=0;
	function point_animate(){
		canvas.translate(x,y);
		canvas.clearRect(-length,-length,2*length,2*length);
		draw_blueCircular(canvas,0,0,r,0,2*Math.PI);
		draw_whiteGraduation(canvas,0,0,0.96*r,-Math.PI/3,4*Math.PI/3);
		canvas.save();
		canvas.beginPath();
		for(var m=0;m<=range;m+=step){
			var x1=Math.sin((m/step-5)*deg);
			var y1=-Math.cos((m/step-5)*deg);
			canvas.fillStyle="#7FFF00";
			canvas.font="bold 30px Calibri";
			canvas.textAlign='center';
			canvas.textBaseline='middle';
			canvas.fillText(m,x1*r*0.7,y1*r*0.7);
			canvas.fillText('MPa',0,r*0.4);   
			canvas.fillText('压力表',0,r*0.7);
		}
		canvas.closePath();    
		canvas.restore();
		canvas.rotate(start);
		canvas.beginPath();
		canvas.rotate(i*(end-start)/100);
		canvas.arc(0,0,0.015*x,0,2*Math.PI,true);
		canvas.fillStyle = 'white';
		canvas.fill();
		canvas.strokeStyle='white';
		canvas.moveTo(0,0);
		canvas.lineTo(-length,0);
		canvas.lineWidth=2;
		canvas.stroke();
		canvas.rotate(-i*(end-start)/100);
		canvas.rotate(-start);
		canvas.translate(-x,-y);
		if(i<100){
			i++;
			requestAnimationFrame(point_animate);
		}
		canvas.restore();
	}
	point_animate();
}





function draw_canvasclock(canvas,width,height){    //绘制canvas时钟的函数，要求“width”和“height”的值相等。
	var canvasclock = canvas;
	function canvasclock_animate(){
		canvasclock.fillStyle = 'white';
		canvasclock.fillRect(0,0,width,height);
		canvasclock.save();
		canvasclock.translate(0.5*width,0.5*height);
		var deg=2*Math.PI/12;    
		//表盘
		canvasclock.save();    
		canvasclock.beginPath();    
		for(var i=0;i<13;i++){
			var x=Math.sin(i*deg);
			var y=-Math.cos(i*deg);
			canvasclock.lineTo(x*width*0.5,y*height*0.5);     
		}
		canvasclock.fillStyle='#00FF7F';
		canvasclock.fill();
		canvasclock.closePath();    
		canvasclock.restore();
		//数字
		canvasclock.save();
		canvasclock.beginPath();
		for(var i=1;i<13;i++){
			var x1=Math.sin(i*deg);
			var y1=-Math.cos(i*deg);
			canvasclock.fillStyle="#fff";
			canvasclock.font="bold 30px Calibri";
			canvasclock.textAlign='center';
			canvasclock.textBaseline='middle';
			canvasclock.fillText(i,x1*width*0.4,y1*height*0.4);    
		}
		canvasclock.closePath();    
		canvasclock.restore(); 
		//大刻度
		canvasclock.save();
		canvasclock.beginPath();    
		for(var i=0;i<12;i++){
			var x2=Math.sin(i*deg);
			var y2=-Math.cos(i*deg);
			canvasclock.moveTo(x2*width*0.48,y2*height*0.48);
			canvasclock.lineTo(x2*width*0.43,y2*height*0.43);    
		}    
		canvasclock.strokeStyle='#fff';
		canvasclock.lineWidth=4;
		canvasclock.stroke();
		canvasclock.closePath();
		canvasclock.restore(); 
		//小刻度
		canvasclock.save();
		var deg1=2*Math.PI/60;
		canvasclock.beginPath();    
		for(var i=0;i<60;i++){
			var x2=Math.sin(i*deg1);
			var y2=-Math.cos(i*deg1);
			canvasclock.moveTo(x2*width*0.47,y2*height*0.47);
			canvasclock.lineTo(x2*width*0.445,y2*height*0.445);    
		}    
		canvasclock.strokeStyle='#fff';
		canvasclock.lineWidth=2;
		canvasclock.stroke();
		canvasclock.closePath();    
		canvasclock.restore(); 
		//文字
		canvasclock.save();
		canvasclock.strokeStyle="#fff";
		canvasclock.font='bold 34px Calibri';
		canvasclock.textAlign='center';
		canvasclock.textBaseline='middle';
		canvasclock.strokeText('canvas',0,height*0.2);    
		canvasclock.restore();
	
		//获取时间
		var time=new Date();
		var h=(time.getHours()%12)*2*Math.PI/12;
		var m=time.getMinutes()*2*Math.PI/60;
		var s=time.getSeconds()*2*Math.PI/60;
		//时针
		canvasclock.save();
		canvasclock.rotate( h + m/12 + s/720) ;
		canvasclock.beginPath();
		canvasclock.moveTo(0,6);
		canvasclock.lineTo(0,-width*0.28);
		canvasclock.strokeStyle="#fff";
		canvasclock.lineWidth=6;
		canvasclock.stroke();
		canvasclock.closePath();
		canvasclock.restore();
		//分针
		canvasclock.save();
		canvasclock.rotate( m+s/60 ) ;
		canvasclock.beginPath();
		canvasclock.moveTo(0,8);
		canvasclock.lineTo(0,-width*0.33);
		canvasclock.strokeStyle="#fff";
		canvasclock.lineWidth=4;
		canvasclock.stroke();
		canvasclock.closePath();
		canvasclock.restore();
		//秒针
		canvasclock.save();
		canvasclock.rotate( s ) ;
		canvasclock.beginPath();
		canvasclock.moveTo(0,10);
		canvasclock.lineTo(0,-width*0.37);
		canvasclock.strokeStyle="white";
		canvasclock.lineWidth=2;
		canvasclock.stroke();
		canvasclock.closePath();
		canvasclock.restore();    
		canvasclock.restore(); //栈出
		requestAnimationFrame(canvasclock_animate);
	}
	requestAnimationFrame(canvasclock_animate);
}





function draw_thermograph(canvas,width,height,start,end){  //绘制温度计的函数，要求width：height=2:5
	var thermograph = canvas;
	var bs1 = 50*(start/10)+100,bs2 = 50*(end/10)+100;
	thermograph.fillStyle = 'black';
	thermograph.fillRect(0,0,width,height);
	thermograph.fillStyle = 'white';
	thermograph.fillRect(0.025*width,0.01*height,0.95*width,0.98*height);
	thermograph.fillStyle = '#CCCCCC';
	thermograph.fillRect(0.4*width,0.07*height,0.2*width,0.8*height);
	thermograph.arc(0.5*width,0.9*height,0.17*width,0,2 * Math.PI,true);
	thermograph.fill();
	
	thermograph.beginPath();  //画刻度线和数标开始
	var h = 0.1*height;
	for(var i=0;i<=35;i++){
		if( (i%5) == 0 ){
			thermograph.moveTo(0.2*width,h);
		}else{
			thermograph.moveTo(0.3*width,h);
		}
		thermograph.lineTo(0.38*width,h);
		thermograph.lineWidth = height / 500;
		thermograph.strokeStyle = 'black';
		thermograph.stroke();
		h += 0.02*height;
	}
	var h = 0.1*height;
	for(var i=0;i<=35;i++){
		if( (i%5) == 0 ){
			thermograph.moveTo(0.8*width,h);
		}else{
			thermograph.moveTo(0.7*width,h);
		}
		thermograph.lineTo(0.62*width,h);
		thermograph.lineWidth = height / 500;
		thermograph.strokeStyle = 'black';
		thermograph.stroke();
		h += 0.02*height;
	}
	var num = 50 , h = 0.116*height , w1 = 0.037*width , w2 = 0.963*width;
	thermograph.font="23px Verdana";
	thermograph.fillStyle = 'black';
	for(var i=0;i<=7;i++){
		if(i==5){
			w1 = 0.07*width;
			w2 = 0.85*width;
			thermograph.fillText(Math.abs(num),w1,h); 
			thermograph.fillText(Math.abs(num),w2,h); 
		}else{
			w1 = 0.037*width;
			w2 = 0.817*width;
			thermograph.fillText(Math.abs(num),w1,h); 
			thermograph.fillText(Math.abs(num),w2,h); 
		}
		h += 0.1*height;
		num -= 10;
	}
	thermograph.fillText('℃',0.44*width,0.06*height);
	thermograph.closePath();   //画刻度线和数标结束
	
	var beishu = 0;
	var m = bs1*0.002;
	function shousuo(){
		beishu += 1;
		if(start<end){
			m += 0.002;
		}
		if(end<start){
			m -= 0.002;
		}
		thermograph.translate(0.5*width,0.8*height);
		thermograph.fillStyle = 'red';
		thermograph.clearRect(-0.07*width,0,0.14*width,-0.7*height);
		thermograph.fillRect(-0.07*width,0,0.14*width,-m*height);
		thermograph.translate(-0.5*width,-0.8*height);
		if(beishu < Math.abs(bs1-bs2)){
			requestAnimationFrame(shousuo);
		}
	}
	requestAnimationFrame(shousuo);
	
	thermograph.fillStyle = 'red';
	thermograph.fillRect(0.43*width,0.8*height,0.14*width,0.1*height);
	thermograph.arc(0.5*width,0.9*height,0.13*width,0,2 * Math.PI,true);
	thermograph.fill();
}
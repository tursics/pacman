//主程序,业务逻辑
(function () {
//	'use strict';

	var _DATA = [		//地图数据
		[35,10, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,43,53,43,53, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,11,36],
		[17,35, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,63,73,63,73, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,36,12],
		[ 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6],
		[ 5, 6, 0,35,10,11,36, 0,35,36,35,36, 0, 5, 6, 5, 6, 0,35,36,35,36, 0,35,10,11,36, 0, 5, 6],
		[ 5, 6, 0,17,35,36,12, 0,16,45,46,13, 0,16,45,46,13, 0,16,45,46,13, 0,17,35,36,12, 0, 5, 6],
		[ 5, 6, 0,45,46,45,46, 0,45,15,14,46, 0,45,15,14,46, 0,45,15,14,46, 0,45,46,45,46, 0, 5, 6],
		[ 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6],
		[ 5, 6, 0,35, 3, 3,36, 0,35,36, 0,35, 3, 3,43,53, 3, 3,36, 0,35,36, 0,35, 3, 3,36, 0, 5, 6],
		[ 5, 6, 0,45, 4, 4,46, 0, 5, 6, 0,45, 4, 4,63,73, 4, 4,46, 0, 5, 6, 0,45, 4, 4,46, 0, 5, 6],
		[ 5, 6, 0, 0, 0, 0, 0, 0, 5, 6, 0, 0, 0, 0, 5, 6, 0, 0, 0, 0, 5, 6, 0, 0, 0, 0, 0, 0, 5, 6],
		[ 5,45, 3, 3, 3,11,36, 0, 5,45, 3, 3,36, 0, 5, 6, 0,35, 3, 3,46, 6, 0,35,10, 3, 3, 3,46, 6],
		[ 5,35, 4, 4, 4,36,12, 0, 5,35, 4, 4,46, 0,45,46, 0,45, 4, 4,36, 6, 0,17,35, 4, 4, 4,36, 6],
		[ 5, 6, 1, 1, 1, 5, 6, 0, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6, 0, 5, 6, 1, 1, 1, 5, 6],
		[16,45, 3, 3, 3,46,13, 0, 5, 6, 0,35, 3, 3, 2, 2, 3, 3,36, 0, 5, 6, 0,16,45, 3, 3, 3,46,13],
		[45,15, 4, 4, 4,14,46, 0,45,46, 0, 5, 2, 2, 2, 2, 2, 2, 6, 0,45,46, 0,45,15, 4, 4, 4,14,46],
		[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 2, 2, 2, 2, 2, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[35,10, 3, 3, 3,11,36, 0,35,36, 0, 5, 2, 2, 2, 2, 2, 2, 6, 0,35,36, 0,35,10, 3, 3, 3,11,36],
		[17,35, 4, 4, 4,36,12, 0, 5, 6, 0,45, 4, 4, 4, 4, 4, 4,46, 0, 5, 6, 0,17,35, 4, 4, 4,36,12],
		[ 5, 6, 1, 1, 1, 5, 6, 0, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6, 0, 5, 6, 1, 1, 1, 5, 6],
		[ 5,45, 3, 3, 3,46,13, 0, 5, 6, 0,35, 3, 3,43,53, 3, 3,36, 0, 5, 6, 0,16,45, 3, 3, 3,46, 6],
		[ 5,35, 4, 4, 4,14,46, 0,45,46, 0,45, 4, 4,63,73, 4, 4,46, 0,45,46, 0,45,15, 4, 4, 4,36, 6],
		[ 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6],
		[ 5, 6, 0,35, 3,11,36, 0,35, 3, 3, 3,36, 0, 5, 6, 0,35, 3, 3, 3,36, 0,35,10, 3,36, 0, 5, 6],
		[ 5, 6, 0,45, 4,36,12, 0,45, 4, 4, 4,46, 0,45,46, 0,45, 4, 4, 4,46, 0,17,35, 4,46, 0, 5, 6],
		[ 5, 6, 0, 0, 0, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6, 0, 0, 0, 5, 6],
		[ 5,45, 3,36, 0, 5, 6, 0,35,36, 0,35, 3, 3,43,53, 3, 3,36, 0,35,36, 0, 5, 6, 0,35, 3,46, 6],
		[ 5,35, 4,46, 0,45,46, 0, 5, 6, 0,45, 4, 4,63,73, 4, 4,46, 0, 5, 6, 0,45,46, 0,45, 4,36, 6],
		[ 5, 6, 0, 0, 0, 0, 0, 0, 5, 6, 0, 0, 0, 0, 5, 6, 0, 0, 0, 0, 5, 6, 0, 0, 0, 0, 0, 0, 5, 6],
		[ 5, 6, 0,35, 3, 3, 3, 3,46,45, 3, 3,36, 0, 5, 6, 0,35, 3, 3,46,45, 3, 3, 3, 3,36, 0, 5, 6],
		[ 5, 6, 0,45, 4, 4, 4, 4, 4, 4, 4, 4,46, 0,45,46, 0,45, 4, 4, 4, 4, 4, 4, 4, 4,46, 0, 5, 6],
		[ 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6],
		[16,45, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,46,13],
		[45,15, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,14,46]
	],
	_GOODS = {			//energy beans
		'2,4':1,
		'27,4':1,
		'2,24':1,
		'27,24':1
	},
	_COS = [1,0,-1,0],
	_SIN = [0,1,0,-1],
	_COLOR = ['#F00','#F93','#0CF','#F9C'],//red, orange
	_LIFE = 3,
	_SCORE = 0;
	_IMAGES = {
		regioLeft0: null,
		regioRight0: null,
		regioFront0: null,
		regioBack0: null,
		iceWhite: null,
		iceBlue: null,
		iceGreen: null,
		iceOrange: null,
		icePink: null,
		iceEye: null
	};

	var game = new Game('canvas');
	//启动页
	(function(){
		var stage = game.createStage();
		//logo
		stage.createItem({
			x:game.width/2,
			y:game.height*.4,
			width:100,
			height:100,
			frames:3,
			draw:function(context){
/*				var t = Math.abs(5-this.times%10);
				context.fillStyle = '#FFE600';
				context.beginPath();
				context.arc(this.x,this.y,this.width/2,t*.04*Math.PI,(2-t*.04)*Math.PI,false);
				context.lineTo(this.x,this.y);
				context.closePath();
				context.fill();
				context.fillStyle = '#000';
				context.beginPath();
				context.arc(this.x+5,this.y-27,7,0,2*Math.PI,false);
				context.closePath();
				context.fill();*/
//				context.drawImage(_IMAGES.regioFront0, this.x - this.width, this.y - this.width, this.width*2, this.width*2);
			}
		});
		//游戏名
		stage.createItem({
			x:game.width/2,
			y:game.height*.6,
			draw:function(context){
				context.font = 'bold 42px Helvetica';
				context.textAlign = 'center';
				context.textBaseline = 'middle';
				context.fillStyle = '#FFF';
				context.fillText('Pac-Train',this.x,this.y);
			}
		});
/*		stage.createItem({
			x:game.width-12,
			y:game.height-5,
			draw:function(context){
				context.font = '14px Helvetica';
				context.textAlign = 'right';
				context.textBaseline = 'bottom';
				context.fillStyle = '#AAA';
				context.fillText('© xxx',this.x,this.y);
			}
		});*/
		stage.bind('keydown',function(e){
			switch(e.keyCode){
				case 13:
				case 32:
				game.nextStage();
				break;
			}
		});
	})();
	//游戏主程序
	(function(){
		var stage,map,beans,player,times;
		stage = game.createStage({
			update:function(){
				var stage = this;

				if(stage.status==1){
					//normal scene
					items.forEach(function(item){
						if(map&&!map.get(item.coord.x,item.coord.y)&&!map.get(player.coord.x,player.coord.y)){
							var dx = item.x-player.x;
							var dy = item.y-player.y;
							if(dx*dx+dy*dy<750&&item.status!=4){		//物体检测
								if(item.status==3){
									item.status = 4;
									_SCORE += 10;
								}else{
									stage.status = 3;
									stage.timeout = 30;
								}
							}
						}
					});
					if(JSON.stringify(beans.data).indexOf(0)<0){	//当没有物品的时候，进入结束画面
						game.nextStage();
					}
				}else if(stage.status==3){
					//temporary scene
					if(!stage.timeout){
						_LIFE--;
						if(_LIFE){
							stage.resetItems();
						}else{
							game.nextStage();
							return false;
						}
					}
				}
			}
		});
		//draw the map
		map = stage.createMap({
			x:60,
			y:10,
			data:_DATA,
			cache:true,
			draw:function(context){
				context.lineWidth = 2;
				for(var j=0; j<this.y_length; j++){
					for(var i=0; i<this.x_length; i++){
						var value = this.get(i,j);
						if(value){
							context.strokeStyle=value==2?"#FFF":"#559cb2";
							var pos = this.coord2position(i,j);
							var dist = this.size/2;
							switch(value){
								case 35:
									context.beginPath();
									context.arc(pos.x+this.size/2,pos.y+this.size/2,this.size/2,Math.PI,1.5*Math.PI,false);
									context.stroke();
									context.closePath();
									break;
								case 36:
									context.beginPath();
									context.arc(pos.x-this.size/2,pos.y+this.size/2,this.size/2,1.5*Math.PI,2*Math.PI,false);
									context.stroke();
									context.closePath();
									break;
								case 46:
									context.beginPath();
									context.arc(pos.x-this.size/2,pos.y-this.size/2,this.size/2,0,.5*Math.PI,false);
									context.stroke();
									context.closePath();
									break;
								case 45:
									context.beginPath();
									context.arc(pos.x+this.size/2,pos.y-this.size/2,this.size/2,.5*Math.PI,1*Math.PI,false);
									context.stroke();
									context.closePath();
									break;
//								case 2:
								case 3:
									context.beginPath();
									context.moveTo(pos.x-dist,pos.y);
									context.lineTo(pos.x+dist,pos.y);
									context.moveTo(pos.x,pos.y);
									context.lineTo(pos.x,pos.y+dist);
									context.stroke();
									context.closePath();
									break;
								case 43:
									context.beginPath();
									context.moveTo(pos.x-dist,pos.y);
									context.lineTo(pos.x+dist,pos.y);
									context.moveTo(pos.x+dist/2,pos.y);
									context.lineTo(pos.x-dist/4,pos.y+dist*2);
									context.stroke();
									context.closePath();
									break;
								case 53:
									context.beginPath();
									context.moveTo(pos.x-dist,pos.y);
									context.lineTo(pos.x+dist,pos.y);
									context.arc(pos.x-this.size/2,pos.y+this.size/2,this.size/2,1.5*Math.PI,2*Math.PI,false);
									context.stroke();
									context.closePath();
									break;
								case 63:
									context.beginPath();
									context.moveTo(pos.x-dist,pos.y);
									context.lineTo(pos.x+dist,pos.y);
									context.arc(pos.x-this.size/2,pos.y+this.size/2,this.size/2,1.5*Math.PI,2*Math.PI,false);
									context.stroke();
									context.closePath();
									break;
								case 73:
									context.beginPath();
									context.moveTo(pos.x-dist,pos.y);
									context.lineTo(pos.x+dist,pos.y);
									context.moveTo(pos.x,pos.y-dist);
									context.lineTo(pos.x,pos.y+dist);
									context.moveTo(pos.x-dist*2,pos.y+dist/2);
									context.lineTo(pos.x,pos.y-dist/4);
									context.stroke();
									context.closePath();
									break;
								case 10:
									context.beginPath();
									context.moveTo(pos.x-dist,pos.y);
									context.lineTo(pos.x+dist,pos.y);
									context.moveTo(pos.x-dist/4,pos.y);
									context.lineTo(pos.x+dist/2,pos.y+dist*2);
									context.stroke();
									context.closePath();
									break;
								case 11:
									context.beginPath();
									context.moveTo(pos.x-dist,pos.y);
									context.lineTo(pos.x+dist,pos.y);
									context.moveTo(pos.x+dist/2,pos.y);
									context.lineTo(pos.x-dist/4,pos.y+dist*2);
									context.stroke();
									context.closePath();
									break;
								case 4:
									context.beginPath();
									context.moveTo(pos.x-dist,pos.y);
									context.lineTo(pos.x+dist,pos.y);
									context.moveTo(pos.x,pos.y-dist);
									context.lineTo(pos.x,pos.y);
									context.stroke();
									context.closePath();
									break;
								case 14:
									context.beginPath();
									context.moveTo(pos.x-dist,pos.y);
									context.lineTo(pos.x+dist,pos.y);
									context.moveTo(pos.x-dist/4,pos.y-dist*2);
									context.lineTo(pos.x+dist/2,pos.y);
									context.stroke();
									context.closePath();
									break;
								case 15:
									context.beginPath();
									context.moveTo(pos.x-dist,pos.y);
									context.lineTo(pos.x+dist,pos.y);
									context.moveTo(pos.x+dist/2,pos.y-dist*2);
									context.lineTo(pos.x-dist/4,pos.y);
									context.stroke();
									context.closePath();
									break;
								case 5:
									context.beginPath();
									context.moveTo(pos.x,pos.y-dist);
									context.lineTo(pos.x,pos.y+dist);
									context.moveTo(pos.x,pos.y);
									context.lineTo(pos.x+dist,pos.y);
									context.stroke();
									context.closePath();
									break;
								case 16:
									context.beginPath();
									context.moveTo(pos.x,pos.y-dist);
									context.lineTo(pos.x,pos.y+dist);
									context.moveTo(pos.x,pos.y+dist/2);
									context.lineTo(pos.x+dist*2,pos.y-dist/4);
									context.stroke();
									context.closePath();
									break;
								case 17:
									context.beginPath();
									context.moveTo(pos.x,pos.y-dist);
									context.lineTo(pos.x,pos.y+dist);
									context.moveTo(pos.x,pos.y-dist/4);
									context.lineTo(pos.x+dist*2,pos.y+dist/2);
									context.stroke();
									context.closePath();
									break;
								case 6:
									context.beginPath();
									context.moveTo(pos.x,pos.y-dist);
									context.lineTo(pos.x,pos.y+dist);
									context.moveTo(pos.x-dist,pos.y);
									context.lineTo(pos.x,pos.y);
									context.stroke();
									context.closePath();
									break;
								case 12:
									context.beginPath();
									context.moveTo(pos.x,pos.y-dist);
									context.lineTo(pos.x,pos.y+dist);
									context.moveTo(pos.x-dist*2,pos.y+dist/2);
									context.lineTo(pos.x,pos.y-dist/4);
									context.stroke();
									context.closePath();
									break;
								case 13:
									context.beginPath();
									context.moveTo(pos.x,pos.y-dist);
									context.lineTo(pos.x,pos.y+dist);
									context.moveTo(pos.x-dist*2,pos.y-dist/4);
									context.lineTo(pos.x,pos.y+dist/2);
									context.stroke();
									context.closePath();
									break;
							}
						}
					}
				}
			}
		});
		//items
		beans = stage.createMap({
			x:60,
			y:10,
			data:_DATA,
			frames:8,
			draw:function(context){
				for(var j=0; j<this.y_length; j++){
					for(var i=0; i<this.x_length; i++){
						if(!this.get(i,j)){
							var pos = this.coord2position(i,j);
							if(_GOODS[i+','+j]){
								context.fillStyle = "#fff";
								context.beginPath();
								context.arc(pos.x,pos.y,4+this.times%4,0,2*Math.PI,true);
								context.fill();
								context.closePath();
							}else{
								context.fillStyle = "#e6bd2d";
								context.beginPath();
								context.arc(pos.x,pos.y,2.5,0,2*Math.PI,true);
								context.fill();
								context.closePath();
							}
						}
					}
				}
			}
		});
		//score
		stage.createItem({
			x:690,
			y:100,
			draw:function(context){
				context.font = 'bold 28px Helvetica';
				context.textAlign = 'left';
				context.textBaseline = 'bottom';
				context.fillStyle = '#de4027';
				context.fillText('bahn.bonus Punkte',this.x,this.y);
				context.font = '28px Helvetica';
				context.textAlign = 'left';
				context.textBaseline = 'top';
				context.fillStyle = '#559cb2';
				context.fillText(_SCORE,this.x+12,this.y);
			}
		});
		//status
		stage.createItem({
			x:690,
			y:320,
			frames:25,
			draw:function(context){
				if(stage.status==2/*&&this.times%2*/){
					context.font = '24px Helvetica';
					context.textAlign = 'left';
					context.textBaseline = 'center';
					context.fillStyle = '#559cb2';
					context.fillText('Außerplanmäßiger Halt',this.x,this.y);
				}
			}
		});
		//lifes
		stage.createItem({
			x:705,
			y:540,
			width:30,
			height:30,
			draw:function(context){
				for(var i=0;i<_LIFE-1;i++){
					var x=this.x+80*i,y=this.y;
					context.drawImage(_IMAGES.regioFront0, x - this.width, y - this.width, this.width*2, this.width*2);
				}
			}
		});
		//NPC
		for(var i=0;i<4;i++){
			stage.createItem({
				width:30,
				height:30,
				orientation:3,
				color:_COLOR[i],
				location:map,
				coord:{x:13+i,y:15},
				vector:{x:13+i,y:15},
				type:2,
				frames:10,
				speed:1,
				timeout:Math.floor(Math.random()*120),
				update:function(){
					var new_map;
					if(this.status==3&&!this.timeout){
						this.status = 1;
					}
					if(!this.coord.offset){			//到达坐标中心时计算
						if(this.status==1){
							if(!this.timeout){		//定时器
								new_map = JSON.parse(JSON.stringify(map.data).replace(/2/g,0));
								var id = this._id;
								items.forEach(function(item){
									if(item._id!=id&&item.status==1){	//NPC将其它所有还处于正常状态的NPC当成一堵墙
										new_map[item.coord.y][item.coord.x]=1;
									}
								});
								this.path = map.finder({
									map:new_map,
									start:this.coord,
									end:player.coord
								});
								if(this.path.length){
									this.vector = this.path[0];
								}
							}
						}else if(this.status==3){
							new_map = JSON.parse(JSON.stringify(map.data).replace(/2/g,0));
							var id = this._id;
							items.forEach(function(item){
								if(item._id!=id){
									new_map[item.coord.y][item.coord.x]=1;
								}
							});
							this.path = map.finder({
								map:new_map,
								start:player.coord,
								end:this.coord,
								type:'next'
							});
							if(this.path.length){
								this.vector = this.path[Math.floor(Math.random()*this.path.length)];
							}
						}else if(this.status==4){
							new_map = JSON.parse(JSON.stringify(map.data).replace(/2/g,0));
							this.path = map.finder({
								map:new_map,
								start:this.coord,
								end:this._params.coord
							});
							if(this.path.length){
								this.vector = this.path[0];
							}else{
								this.status = 1;
							}
						}
						//是否转变方向
						if(this.vector.change){
							this.coord.x = this.vector.x;
							this.coord.y = this.vector.y;
							var pos = map.coord2position(this.coord.x,this.coord.y);
							this.x = pos.x;
							this.y = pos.y;
						}
						//方向判定
						if(this.vector.x>this.coord.x){
							this.orientation = 0;
						}else if(this.vector.x<this.coord.x){
							this.orientation = 2;
						}else if(this.vector.y>this.coord.y){
							this.orientation = 1;
						}else if(this.vector.y<this.coord.y){
							this.orientation = 3;
						}
					}
					this.x += this.speed*_COS[this.orientation];
					this.y += this.speed*_SIN[this.orientation];
				},
				draw:function(context){
					var isSick = false;
					if(this.status==3){
						isSick = this.timeout>80||this.times%2?true:false;
					}
					if(this.status!=4){
						if (isSick) {
							context.drawImage(_IMAGES.iceWhite, this.x - this.width/2, this.y - this.width/2, this.width, this.width);
						} else {
							switch( this.color) {
								case '#F00':
									context.drawImage(_IMAGES.iceGreen, this.x - this.width/2, this.y - this.width/2, this.width, this.width);
									break;
								case '#F93':
									context.drawImage(_IMAGES.iceOrange, this.x - this.width/2, this.y - this.width/2, this.width, this.width);
									break;
								case '#0CF':
									context.drawImage(_IMAGES.iceBlue, this.x - this.width/2, this.y - this.width/2, this.width, this.width);
									break;
								case '#F9C':
									context.drawImage(_IMAGES.icePink, this.x - this.width/2, this.y - this.width/2, this.width, this.width);
									break;
							}
						}
					}
					if(!isSick){
						context.drawImage(_IMAGES.iceEye, this.x - this.width/2, this.y - this.width/2, this.width, this.width);
					}
				}
			});
		}
		items = stage.getItemsByType(2);
		//主角
		player = stage.createItem({
			width:30,
			height:30,
			type:1,
			location:map,
			coord:{x:14.5,y:24},
			orientation:2,
			speed:2,
			frames:10,
			update:function(){
				var coord = this.coord;
				if(!coord.offset){
					if(this.control.orientation!='undefined'){
						if(!map.get(coord.x+_COS[this.control.orientation],coord.y+_SIN[this.control.orientation])){
							this.orientation = this.control.orientation;
						}
					}
					this.control = {};
					var value = map.get(coord.x+_COS[this.orientation],coord.y+_SIN[this.orientation]);
					if(value==0){
						this.x += this.speed*_COS[this.orientation];
						this.y += this.speed*_SIN[this.orientation];
					}else if(value<0){
						this.x -= map.size*(map.x_length-1)*_COS[this.orientation];
						this.y -= map.size*(map.y_length-1)*_SIN[this.orientation];
					}
				}else{
					if(!beans.get(this.coord.x,this.coord.y)){	//吃豆
						_SCORE++;
						beans.set(this.coord.x,this.coord.y,1);
						if(_GOODS[this.coord.x+','+this.coord.y]){	//吃到能量豆
							items.forEach(function(item){
								if(item.status==1||item.status==3){	//如果NPC为正常状态，则置为临时状态
									item.timeout = 450;
									item.status = 3;
								}
							});
						}
					}
					this.x += this.speed*_COS[this.orientation];
					this.y += this.speed*_SIN[this.orientation];
				}
			},
			draw:function(context){
				context.fillStyle = '#FFE600';
				context.beginPath();
				if(stage.status!=3){	//玩家正常状态
					if(this.times%2){
						context.arc(this.x,this.y,this.width/2,(.5*this.orientation+.20)*Math.PI,(.5*this.orientation-.20)*Math.PI,false);
					}else{
						context.arc(this.x,this.y,this.width/2,(.5*this.orientation+.01)*Math.PI,(.5*this.orientation-.01)*Math.PI,false);
					}
				}else{	//玩家被吃
					if(stage.timeout) {
						context.arc(this.x,this.y,this.width/2,(.5*this.orientation+1-.02*stage.timeout)*Math.PI,(.5*this.orientation-1+.02*stage.timeout)*Math.PI,false);
					}
				}
				context.lineTo(this.x,this.y);
				context.closePath();
//				context.fill();
				switch(this.orientation) {
					case 0:
						context.drawImage(_IMAGES.regioRight0, this.x - this.width/2, this.y - this.width/2, this.width, this.width);
						break;
					case 1:
						context.drawImage(_IMAGES.regioFront0, this.x - this.width/2, this.y - this.width/2, this.width, this.width);
						break;
					case 2:
						context.drawImage(_IMAGES.regioLeft0, this.x - this.width/2, this.y - this.width/2, this.width, this.width);
						break;
					case 3:
						context.drawImage(_IMAGES.regioBack0, this.x - this.width/2, this.y - this.width/2, this.width, this.width);
						break;
				}
			}
		});
		//事件绑定
		stage.bind('keydown',function(e){
			switch(e.keyCode){
				case 13: //回车
				case 32: //空格
				this.status = this.status==2?1:2;
				break;
				case 39: //右
				player.control = {orientation:0};
				break;
				case 40: //下
				player.control = {orientation:1};
				break;
				case 37: //左
				player.control = {orientation:2};
				break;
				case 38: //上
				player.control = {orientation:3};
				break;
			}
		});
	})();
	//结束画面
	(function(){
		var stage = game.createStage();
		//游戏结束
		stage.createItem({
			x:game.width/2,
			y:game.height*.35,
			draw:function(context){
				context.fillStyle = '#FFF';
				context.font = 'bold 48px Helvetica';
				context.textAlign = 'center';
				context.textBaseline = 'middle';
				context.fillText('GAME OVER',this.x,this.y);
			}
		});
		//记分
		stage.createItem({
			x:game.width/2,
			y:game.height*.5,
			draw:function(context){
				context.fillStyle = '#FFF';
				context.font = '20px Helvetica';
				context.textAlign = 'center';
				context.textBaseline = 'middle';
				context.fillText('FINAL SCORE: '+(_SCORE+50*Math.max(_LIFE-1,0)),this.x,this.y);
			}
		});
		//事件绑定
		stage.bind('keydown',function(e){
			switch(e.keyCode){
				case 13: //回车
				case 32: //空格
				_SCORE = 0;
				_LIFE = 3;
				var st = game.setStage(1);
				st.reset();
				break;
			}
		});
	})();
	function loadImages() {
		_IMAGES.regioBack0 = new Image;
		_IMAGES.regioBack0.src = 'assets/regio-back-0.png';
		_IMAGES.regioLeft0 = new Image;
		_IMAGES.regioLeft0.src = 'assets/regio-left-0.png';
		_IMAGES.regioRight0 = new Image;
		_IMAGES.regioRight0.src = 'assets/regio-right-0.png';
		_IMAGES.regioFront0 = new Image;
		_IMAGES.regioFront0.src = 'assets/regio-front-0.png';
		_IMAGES.iceWhite = new Image;
		_IMAGES.iceWhite.src = 'assets/ice-white.png';
		_IMAGES.iceBlue = new Image;
		_IMAGES.iceBlue.src = 'assets/ice-blue.png';
		_IMAGES.iceGreen = new Image;
		_IMAGES.iceGreen.src = 'assets/ice-green.png';
		_IMAGES.iceOrange = new Image;
		_IMAGES.iceOrange.src = 'assets/ice-orange.png';
		_IMAGES.icePink = new Image;
		_IMAGES.icePink.src = 'assets/ice-pink.png';
		_IMAGES.iceEye = new Image;
		_IMAGES.iceEye.src = 'assets/ice-eyes.png';
	}
	game.init();
	loadImages();
})();

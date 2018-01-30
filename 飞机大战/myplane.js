//获取页面元素
var myplanebox=document.getElementById('plane');//游戏界面
var gameScore=document.getElementsByTagName('strong')[0];//游戏分数
var totalScore=0;

//我方飞机构造
function Myplane(obj){
    this.w=obj.w;
    this.h=obj.h
    this.x=obj.x
    this.y=obj.y;
    this.imgurl=obj.imgurl;
    this.boomurl=obj.boomurl;
    this.createMyplane();
}
//构造我方飞机 
Myplane.prototype.createMyplane=function(){
    this.imgmyplane=document.createElement('img');
    this.imgmyplane.src=this.imgurl;
    this.imgmyplane.style.cssText='width:'+this.w+'px;height:'+this.h+'px;position:absolute;left:'+this.x+'px;top:'+this.y+'px;';
    myplanebox.appendChild(this.imgmyplane);
    // this.myplaneMove();
    // this.myplaneshoot();
};
var ourplane=new Myplane({x:66,y:80,w:(myplanebox.offsetWidth-66)/2,H:myplanebox.offsetHeight-80,imgurl:'img/myplane.gif',boomurl:'img/myplaneBoom.gif'});
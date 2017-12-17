var rinyDrag=function(options){

	this.options=options;
	this.el=document.getElementById(this.options.el);

	this.drag();
};

rinyDrag.prototype.drag=function(){

	var _this=this;

	this.el.addEventListener('touchstart',function(e){

		var disX=e.touches[0].pageX-e.target.getBoundingClientRect().left,
			disY=e.touches[0].pageY-e.target.getBoundingClientRect().top;

		this.addEventListener('touchmove',function(e){

			var l=e.touches[0].pageX-disX-e.target.getBoundingClientRect().left+e.target.offsetLeft,
				t=e.touches[0].pageY-disY-e.target.getBoundingClientRect().top+e.target.offsetTop;

				_this.leftmost=0;
				_this.rightmost=e.target.offsetParent.clientWidth-e.target.offsetWidth;
				_this.topmost=0;
				_this.bottommost=e.target.offsetParent.clientHeight-e.target.offsetHeight;

			//回调函数
			_this.options.callback && _this.options.callback(_this);

			l= l<=_this.leftmost? _this.leftmost:l;
			l= l>=_this.rightmost? _this.rightmost:l;
			t= t<=_this.topmost? _this.topmost:t;
			t= t>=_this.bottommost? _this.bottommost:t;

			e.target.style.left=l+'px';
			e.target.style.top=t+'px';

		},false);
		

	},false);

};
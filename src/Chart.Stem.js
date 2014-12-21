(function() {
	//add an error bar class to the basic chart elements
	Chart.ErrorBar = Chart.Rectangle.extend({
		draw : function() {
			var ctx = this.ctx,
				halfWidth = this.width/2,
				leftX = this.x - halfWidth,
				rightX = this.x + halfWidth,
				top = this.base - (this.base - this.yUp),
				bottom = this.base - (this.base - this.yDown),
				middle = this.base - (this.base - this.y)
			ctx.strokeStyle = this.errorStrokeColor;
			ctx.lineWidth = this.errorStrokeWidth;
			//draw upper error bar
			if (this.errorDir != "down") {		
				ctx.beginPath();
				ctx.moveTo(this.x, middle);
				ctx.lineTo(this.x, top);
				ctx.stroke();
				ctx.beginPath();
				ctx.moveTo(leftX, top);
				ctx.lineTo(rightX, top);
				ctx.stroke();
			}			
			//draw lower error bar
			if (this.errorDir != "up") {						
				ctx.beginPath();
				ctx.moveTo(this.x, middle);
				ctx.lineTo(this.x, bottom);
				ctx.stroke();
				ctx.beginPath();
				ctx.moveTo(leftX, bottom);
				ctx.lineTo(rightX, bottom);
				ctx.stroke();					
			}
		}
	})
}).call(this);	


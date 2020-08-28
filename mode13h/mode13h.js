function Mode13h() {
	this.screenWidth = 320;
	this.screenHeight = 200;
	this.bytesPerPixel = 4;

	this._init();
}

Mode13h.prototype = {
	constructor: Mode13h,

	setPaletteColor: function(index, r, g, b) {
		this.palette[index] = {
			r: r,
			g: g,
			b: b
		};
	},

	putPixel: function(x, y, color) {
		x = Math.floor(x);
		y = Math.floor(y);

		var paletteColor = this.palette[color];
		var paletteBufferIndex = y * this.screenWidth + x;
		var index = paletteBufferIndex * 4;

		this.buffer[index] = paletteColor.r;
		this.buffer[index + 1] = paletteColor.g;
		this.buffer[index + 2] = paletteColor.b;
		this.buffer[index + 3] = 255;

		this.paletteBuffer[paletteBufferIndex] = color;
	},

	getPixel: function(x, y) {
		return this.paletteBuffer[y * this.screenWidth + x];
	},

	clear: function(color) {
		color = color || 0;
		var paletteColor = this.palette[color];

		var k = 0;
		for (let i = 0; i < this.bufferSize; i += 4) {
			this.buffer[i] = paletteColor.r;
			this.buffer[i + 1] = paletteColor.g;
			this.buffer[i + 2] = paletteColor.b;
			this.buffer[i + 3] = 255;

			this.paletteBuffer[k++] = color;
		}

		this.bufferImageData.data.set(this.buffer);
		this.ctx.putImageData(this.bufferImageData, 0, 0);
	},

	flip: function() {
		this.bufferImageData.data.set(this.buffer);
		this.ctx.putImageData(this.bufferImageData, 0, 0);
	},

	_init: function() {
		this._initPalette();
		this._initCanvas();
		this._initBuffer();
	},

	_initBuffer: function() {
		this.bufferImageData = this.ctx.getImageData(0, 0, this.screenWidth, this.screenHeight);
		this.bufferSize = this.screenWidth * this.screenHeight * this.bytesPerPixel;
		this.buffer = new Uint8ClampedArray(this.bufferSize);
		this.paletteBuffer = new Uint8ClampedArray(this.screenWidth * this.screenHeight);
	},

	_initPalette: function() {
		this.palette = {};
		var i = 0;

		for (i = 0; i < 4; i++) {
			this.palette[i] = {
				r: i * 85,
				g: i * 85,
				b: i * 85
			};
		}

		for (var r = 0; r < 6; r++) {
			for (var g = 0; g < 7; g++) {
				for (var b = 0; b < 6; b++) {
					this.palette[i++] = {
						r: r * 42,
						g: g * 36,
						b: b * 42
					};
				}
			}
		}
	},

	_initCanvas: function() {
		this.canvas = document.createElement("canvas");
		this.canvas.width = this.screenWidth;
		this.canvas.height = this.screenHeight;

		this.ctx = this.canvas.getContext("2d");
	}
};

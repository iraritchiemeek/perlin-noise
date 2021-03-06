function Particle() {
	this.pos = createVector(random(width),random(height))
	this.vel = createVector(0,0)
	this.acc = createVector(0,0)
	this.maxspeed = 4

	this.colors = [0, 0, 0]

	this.prevPos = this.pos.copy()

	this.update = function () {
		this.vel.add(this.acc)
		this.vel.limit(this.maxspeed)
		this.pos.add(this.vel)
		this.acc.mult(0)
	}

	this.applyForce = function(force) {
		this.acc.add(force)
	}

	this.show = function () {
		// console.log(this.colors[0])
		// console.log(this.colors[2])
		stroke(this.colors[0], this.colors[1], this.colors[2], 20)
		strokeWeight(1)
		line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y)
		// point(this.pos.x, this.pos.y)
		this.updatePrev()
	}

	this.updatePrev = function () {
		this.prevPos.x = this.pos.x
		this.prevPos.y = this.pos.y
	}

	this.edges = function () {
		if(this.pos.x > width) {
			this.pos.x = 0
			this.updatePrev()
		}
		if(this.pos.x < 0) {
			this.pos.x = width
			this.updatePrev()
		}
		if(this.pos.y > height) {
			this.pos.y = 0
			this.updatePrev()
		}
		if(this.pos.y < 0) {
			this.pos.y = height
			this.updatePrev()
		}
	}

	this.follow = function (vectors) {
		var x = floor(this.pos.x / scl)
		var y = floor(this.pos.y / scl)
		var index = x + y * cols
		var force = vectors[index]
		this.applyForce(force)
	}

	this.color = function (index) {
		this.colors[0] = this.pos.x / 2 + index / 8
		this.colors[1] = this.pos.y / 2 + index / 8
		this.colors[2] = this.pos.x / 2 + index / 8
		// for (var i = 0; i < this.colors.length; i++) {
			// if (this.colors[i] >= 255  || this.colors[i] <= 0) {
			// 	this.colors[i] = random(255)
			// }
			// this.colors[i] += floor(map(angle, 0, 5, 0, 255)) / 20
		// }
	}
}
var inc = 0.1
var scl = 10
var cols, rows

var zoff = 0

var fr

var particles = []

var flowField

function setup() {
	createCanvas(400, 400)
	cols = floor(width/scl)
	rows = floor(height/scl)
	fr = createP('')

	flowField = new Array(cols * rows)

	for (var i = 0; i < 500; i++) {
		particles[i] = new Particle()
	}

	background(0)
}

function draw() {
	var yoff = 0
	for (var y = 0; y < rows; y++) {
		var xoff = 0
		for (var x = 0; x < cols; x++) {
			var index = x + y * cols
			flowField[index] = v
			var angle = noise(xoff, yoff, zoff) * TWO_PI
			var v = p5.Vector.fromAngle(angle)
			v.setMag(3)
			xoff += inc
			// stroke(0, 50)
			// strokeWeight(1)
			// push()
			// translate(x * scl, y * scl)
			// rotate(v.heading())
			// line(0, 0, scl, 0)
			// pop()
		}
		yoff += inc
		zoff += 0.0003
	}
	for (var i = 0; i < particles.length; i++) {
		particles[i].color(angle)
		particles[i].follow(flowField)
		particles[i].edges()
		particles[i].show()
		particles[i].update()
	}
	fr.html(floor(frameRate()))
}

export default function sketch(p) {
	let N = 10;

	p.setup = function() {
		p.createCanvas(200, 200);
	};

	p.myCustomRedrawAccordingToNewPropsHandler = function(props) {
		console.log(props);
		if (props.seed) {
			p.randomSeed(props.seed);
		}

		if (props.width && props.height) {
			p.resizeCanvas(props.width, props.height);
		}
	};

	p.draw = function() {
		p.background(127);
		for (let i = 0; i < p.width / N; i++) {
			for (let j = 0; j < p.height / N; j++) {
				let c = p.random(0, 255);
				p.fill(
					c + p.random(-20, 20),
					c + p.random(-20, 20),
					c + p.random(-20, 20)
				);
				p.noStroke();
				p.rect(i * N, j * N, N, N);
			}
		}
		p.noLoop();
	};
}

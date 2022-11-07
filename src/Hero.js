function HeroText() {
	return <>
	  <h2>Stitch Monkey</h2>
	  <div>
		The Stitch Monkey project is a collection of 5,555 unique monkey NFTs collectables. Your Stitch Monkey is a living attachment of multiple parts of many different animals, representing all the diverse and vibrant global cultures.
		<br/><br/>
		Every holder (scientist) will be a representative of "stitching" together our vibrant and collaborative community. Having the ability to just own a "part" of a larger whole will enable any and all individuals to come together. What will you create?
	  </div>
	</>;
}

function Hero() {
return <>
	<div className="view-desktop container">
		<div className="row">
			<div className="col">
				<p><img src="assets/images/tri-reveal.jpg" className="hero-img" alt="hero" /></p>
			</div>
			<div className="col hero-right text-start d-flex align-content-center flex-wrap">
				<h3>Uniting NFTs and the World</h3>
				<HeroText />
			</div>
		</div>
	</div>
	<div className="view-mobile container">
		<div className="row">
			<div className="col text-start">
				<div className="text-center"><img src="assets/images/tri-reveal.jpg" className="hero-img" alt="hero" /></div>
				<div>
					<h3 style={{ fontWeight:"100" }}>Uniting NFTs and the World</h3>
					<HeroText />
				</div>
			</div>
		</div>
	</div>
</>;
}

export default Hero;
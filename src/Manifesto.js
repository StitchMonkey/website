function ManifestoText() {
	return <>
		<p className="block-text-left">
			In the dark, lies a spooky lab,<br/>
			For which only the chosen few collab.<br/>
			The "metaverse" is still vague,<br/>
			Where the "DegenLab" wants to be the next plague.<br/><br/>

			The Stitch Monkeys are definitely not pretty,<br/>
			Fallen off a tree as there are many,<br/>
			But this is not the time to be petty&mdash;<br/>
			For within our community, degens are plenty.<br/><br/>
			
			The future may not seem that bright,<br/>
			But within all of us there's a strong might,<br/>
			For all of us together, we can hold a fight,<br/>
			And with this knowledge, power is within sight!
		</p>
	</>;
}

function Manifesto() {
	return <>
		<div className="container">
			<div className="col">
				<div className="view-desktop man-block">
					<div className="row block">
						<div className="col-6">
							<img src="assets/images/anim-experiment.gif" className="img br-10" alt="experiment" />
						</div>
						<div className="col-6 d-flex align-content-center flex-wrap">
							<h2 className="text-start">Manifesto</h2>
							<ManifestoText />
						</div>
					</div>
				</div>
				<div className="view-mobile man-block">
					<div className="row block">
						<div className="col">
							<h2 className="text-center">Manifesto</h2>
							<ManifestoText />
						</div>
						<div className="col-12">
							<img src="assets/images/anim-experiment.gif" className="img br-10" alt="experiment" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</>;
}

export default Manifesto;
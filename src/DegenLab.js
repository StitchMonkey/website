function DegenLabText() {
	return <>
		<p className="block-text-left">
			The DegenLab is where you (scientists) will be able to "stitch" together multiple NFT parts into a new, unique whole PFP NFT, that's only unique to you.
			<br/><br/>
			The DegenLab is also a gateway to introduce you to another world of economics, and we will introduce rewards and a special token for all holders.
			<br/><br/>
			<a href="https://www.youtube.com/watch?v=nbY7zskgWNg" target="_blank" rel="noreferrer">A sneak peek of what the DegenLab will look like can be found here.</a>
			<br/><br/>
			<a href="https://www.muse.place/stitch-monkey-lab" target="_blank" className="clean" rel="noreferrer"><img src="assets/images/test_tube.png" alt="DegenLab" /></a>
		</p>
	</>;
}

function DegenLab() {
	return <>
		<div className="container">
			<div className="col">
				<div className="view-desktop lab-block">
					<div className="row block">
						<div className="col-6">
							<img src="assets/images/corridor.gif" className="img br-10" alt="DegenLab Preview" />
						</div>
						<div className="col-6 d-flex align-content-center flex-wrap">
							<h2 className="text-start">DegenLab</h2>
							<DegenLabText />
						</div>
					</div>
				</div>
				<div className="view-mobile man-block">
					<div className="row block">
						<div className="col">
							<h2 className="text-center">DegenLab</h2>
							<DegenLabText />
						</div>
						<div className="col-12">
							<img src="assets/images/corridor.gif" className="img br-10" alt="DegenLab Preview" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</>;
}

export default DegenLab;
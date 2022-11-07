function LoreText() {
	return <>
		<p className="block-text-left">
			A top secret project that was never seen by the public until a found footage film was obtained. Some say it's a conspiracy and this is all a distraction.<br/><br/>
			
			Upon release of the footage a group ventures into the secret location greeted by a sealed door. On the wall there was a note that had strange symbols scribbled. The group has to solve this puzzle to get through and make their way to the next door with a seal.<br/><br/>
			
			Around them was a lab that seemed to smell of roadkill and dead carcasses. They are greeted with another obscure note with more cryptic symbols. This one was different, it required them to push 2 buttons on each side of the room. The group splits up and presses both buttons at the same time.<br/><br/>
			
			Upon the seal breaking they hear a loud thunder and swirling static and they were in shock. Surrounding them were capsules filled with green liquid and inside where monstrosities. Some in the group were shaken and begin to run back towards the door only for it to seal behind them.<br/><br/>
			
			They had to progress through the lab and reach the center plays. The GORZ have awoken and the scientist appears....
		</p>
	</>;
}

function Lore() {
	return <>
		<div className="container">
			<div className="view-desktop">
				<div className="row">
					<div className="col d-flex align-content-center flex-wrap">
						<h2 className="text-start">Lore</h2>
						<LoreText />
					</div>
					<div className="col">
						<img src="assets/images/lore.png" className="img br-10" alt="Lore" />
					</div>
				</div>
			</div>
			<div className="view-mobile">
				<div className="row">
					<div className="col">
						<h2 className="text-center">Lore</h2>
						<LoreText />
						<img src="assets/images/lore.png" className="img br-10" alt="Lore" />
					</div>
				</div>
			</div>
		</div>

	</>;
}

export default Lore;
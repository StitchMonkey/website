function EcosystemText() {
	return <>
		<p className="block-text-left">
			We want our community to reap the benefits of the overall economy. A lot of things we will present to the community are rewards such as staking and revenue share.<br/><br/>
			The <a href='#degendao'>DegenDAO</a> will be partly responsible for executing what goes and what stays; how much should be allocated to the community and to the team. We want to allow the community to have their voice heard and all the power needed to keep the project moving forward in the future.
			<br/><br/>
			In addition to the usual staking/holder rewards, we will also throw regular giveaways & raffles as appreciation for joining our project, and to help w/ the overall longetivity of the project core.
		</p>
	</>;
}

function Ecosystem() {
	return <>
		<div className="container">
			<div className="view-desktop">
				<div className="row">
					<div className="col d-flex align-content-center flex-wrap">
						<h2 className="text-start">Ecosystem</h2>
						<EcosystemText />
					</div>
					<div className="col">
						<img src="assets/images/eco.png" className="img br-10" alt="ecosystem" />
					</div>
				</div>
			</div>
			<div className="view-mobile">
				<div className="row">
					<div className="col">
						<h2 className="text-center">Ecosystem</h2>
						<EcosystemText />
						<img src="assets/images/eco.png" className="img br-10" alt="ecosystem" />
					</div>
				</div>
			</div>
		</div>
	</>;
}

export default Ecosystem;
function DegenDAOText() {
	return <>
		<p className="block-text-left">
			The DegenDAO is a community backed organization that will empower holders to vote on pivotal points of the project's future.
			<br/><br/>
			Many things such as voting for the future of the project, to how much shared revenue to allocate between the founders and the holders will be decided and dictated by the DAO members. Other aspects can include whatever the community wants to help further the future and success of the project.
			<br/><br/>
			In other words, it won't be solely up to the team to make decisions; it will be up to our holders and community overall.
		</p>
	</>;
}

function DegenDAO() {
	return <>
		<div className="container">
			<div className="view-desktop">
				<div className="row">
					<div className="col">
						<img src="assets/images/degendao.png" className="img br-10" alt="DegenDAO" />
					</div>
					<div className="col d-flex align-content-center flex-wrap">
						<h2 className="text-start">DegenDAO</h2>
						<DegenDAOText />
					</div>
				</div>
			</div>
			<div className="view-mobile">
				<div className="row">
					<div className="col">
						<h2 className="text-center">DegenDAO</h2>
						<DegenDAOText />
						<img src="assets/images/degendao.png" className="img br-10" alt="DegenDAO" />
					</div>
				</div>
			</div>
		</div>
	</>;
}

export default DegenDAO;
function Team() {
	const members = [
		{
			image: 'asset1.jpg',
			name: 'Stitched Up Leader',
			twitter: 'nft_stitch',
			title: 'Founder & Dev'
		},
		{
			image: 'pfp-slayffin.png',
			name: 'Slayffin',
			twitter: 'Slayffin2',
			title: 'Head Degen'
		},
		{
			image: 'pfp-pwo.png',
			name: 'Pwoseidon',
			twitter: 'Pwoseidonn',
			title: 'Mad Scientist'
		},
		{
			image: 'pfp-sculptor.png',
			name: 'Black.SOL',
			twitter: 'BlackkkSol',
			title: 'Collab Manager'
		},
		{
			image: 'pfp-nur.png',
			name: '◎nur',
			twitter: '0xc06',
			title: 'Influencer & Collab Manager'
		},
		{
			image: 'pfp-robreena.png',
			name: 'Robreena',
			twitter: 'cheyennelabs',
			title: 'Collab Manager'
		},
		{
			image: 'asset4.png',
			name: 'Bullish Brad',
			twitter: '',
			title: 'Front-End Dev'
		},
		{
			image: 'asset5.png',
			name: 'Spatula',
			twitter: '',
			title: 'Back-End & 3D Dev'
		},
		{
			image: 'asset6.png',
			name: 'Paul G.',
			twitter: '',
			title: 'Lead Artist'
		}
	];

	return <>
		<div className="container">
			<div className="col-12">
				<div className="row block text-center">
					<h2>Team</h2>
					{
						members.map((val,key) => {
							return (
								<div className="col pfp-block" key={key}>
									<img src={'assets/images/' + val.image} className="pfp-img" alt="PFP" />
									<br/>
									<p>
										<span className="pfp-name">{val.name}</span><br/>
										{ val.twitter !== '' ? <><span className="pfp-title"><a href={'https://twitter.com/' + val.twitter} target="_blank" rel="noreferrer" style={{ border: "none" }}><img src="assets/images/twitter.png" alt="twitter" className="pfp-twitter" /> @{val.twitter}</a></span><br/></> : null }
										<span className="pfp-title">{val.title}</span>
									</p>
								</div>
							)
						})
					}
				</div>
			</div>
		</div>
	</>;
}

export default Team;
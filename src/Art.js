import Marquee from "react-fast-marquee";

function Art() {
	return <>
		<div className='container'>
			<div className='col-12'>
				<h2 className='text-center'>Art</h2>
				<Marquee className='art-marquee' gradientColor='[0, 0, 0]'>
					{[...Array(8).keys()].map((_,i) => {return <div key={i} className='art-item'><img src={'./assets/images/monkeys/' + (i + 1) + '.png'} alt='Stitch Monkey' /></div>})}
				</Marquee>
			</div>
		</div>
	</>;
}

export default Art;
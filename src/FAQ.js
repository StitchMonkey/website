import React,{ useState } from 'react';
import AnimateHeight from 'react-animate-height';

function FAQ() {
	let showSpeed = 500;
	const [answerHeight1, setAnswerHeight1] = useState(0);
	const [answerHeight2, setAnswerHeight2] = useState(0);
	const [answerHeight3, setAnswerHeight3] = useState(0);
	const [answerHeight4, setAnswerHeight4] = useState(0);
	const [answerHeight5, setAnswerHeight5] = useState(0);

	const handleClick = (event) => {
		if(event.currentTarget.style.backgroundColor === 'white') {
			event.currentTarget.style.backgroundColor = '#030303';
			event.currentTarget.style.color = 'white';
		} else {
			event.currentTarget.style.backgroundColor = 'white';
			event.currentTarget.style.color = '#030303';
		}

		var data_id = event.currentTarget.dataset.id;
		switch(data_id) {
			case '0': setAnswerHeight1(answerHeight1 === 0 ? 'auto' : 0);break;
			case '1': setAnswerHeight2(answerHeight2 === 0 ? 'auto' : 0);break;
			case '2': setAnswerHeight3(answerHeight3 === 0 ? 'auto' : 0);break;
			case '3': setAnswerHeight4(answerHeight4 === 0 ? 'auto' : 0);break;
			case '4': setAnswerHeight5(answerHeight5 === 0 ? 'auto' : 0);break;
			default: break;
		}
	};

	const data = [
		{
			q: 'Mint price?',
			a: 'TBD.'
		},
		{
			q: 'How many?',
			a: '5,555.'
		},
		{
			q: 'Is there WL (Monkey List)?',
			a: "Yes, follow our <a href='https://twitter.com/nft_stitch' target='_blank' rel='noreferrer'>Twitter</a> account and join <a href='https://discord.gg/stitch-monkey' target='_blank' rel='noreferrer'>Discord</a>. WL will get to mint before public."
		},
		{
			q: 'Wen mint?',
			a: "Follow our <a href='https://twitter.com/nft_stitch' target='_blank' rel='noreferrer'>Twitter</a> account and join <a href='https://discord.gg/stitch-monkey' target='_blank' rel='noreferrer'>Discord</a> for all the alpha."
		},
		{
			q: 'Can this collection get any uglier?',
			a: 'Beauty is in the eye of the beholder, but only true degens know the answer!'
		}
	];

	const renderHTML = (rawHTML: string) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });

	return <>
		<div className='container'>
			<div className='col-12'>
				<div className='view-desktop'>
					<div className='row block'>
						<div className='col-12'>
							<h2 className='text-center'>FAQ</h2>
							<div className='block-text-left'>
								{
									data.map((val,key) => {
										var height = 0;
										switch(key) {
											case 0: height = answerHeight1; break;
											case 1: height = answerHeight2; break;
											case 2: height = answerHeight3; break;
											case 3: height = answerHeight4; break;
											case 4: height = answerHeight5; break;
											default: break;
										}
										return (
											<div className='faq-block' onClick={handleClick} data-id={key} key={key}>
												<div className='faq-ques row'>
													<div className='col-6 text-start'>{val.q}</div>
													<div className='col-6 text-end ques-expand'>{height ? <>&times;</> : '+'}</div>
												</div>
												<AnimateHeight duration={showSpeed} height={height}>
													<div className='faq-ans'>{renderHTML(val.a)}</div>
												</AnimateHeight>
											</div>
										)
									})
								}
							</div>
						</div>
					</div>
				</div>
				<div className='view-mobile'>
					<div className='row'>
						<div className='col-12'>
							<h2>FAQ</h2>
							<div className='block-text-left'>
								{
									data.map((val,key) => {
										var height = 0;
										switch(key) {
											case 0: height = answerHeight1; break;
											case 1: height = answerHeight2; break;
											case 2: height = answerHeight3; break;
											case 3: height = answerHeight4; break;
											case 4: height = answerHeight5; break;
											default: break;
										}
										return (
											<div className='faq-block' onClick={handleClick} data-id={key} key={key}>
												<div className='faq-ques row'>
													<div className='col-10 text-start'>{val.q}</div>
													<div className='col-2 text-end ques-expand'>{height ? <>&times;</> : '+'}</div>
												</div>
												<AnimateHeight duration={showSpeed} height={height}>
													<div className='faq-ans'>{renderHTML(val.a)}</div>
												</AnimateHeight>
											</div>
										)
									})
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</>;
}

export default FAQ;
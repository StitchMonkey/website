import { useState } from 'react';
import AnimateHeight from 'react-animate-height';

function MenuItems() {
	return <>
		<div className='nav-item'><a className='nav-link' href='#manifesto'>manifesto</a></div>
		<div className='nav-item'><a className='nav-link' href='#ecosystem'>rewards & staking</a></div>
		<div className='nav-item'><a className='nav-link' href='#roadmap'>roadmap</a></div>
		<div className='nav-item'><a className='nav-link' href='#team'>team</a></div>
		<div className='nav-item'><a className='nav-link' href='https://discord.gg/stitch-monkey' target='_blank' rel='noreferrer'><img className='social-links' src='assets/images/discord.png' alt='discord'/></a></div>
		<div className='nav-item'><a className='nav-link' href='https://twitter.com/nft_stitch' target='_blank' rel='noreferrer'><img className='social-links' src='assets/images/twitter.png' alt='twitter'/></a></div>
	</>;
}

function Header() {
	let showSpeed = 1000;
	const [mobileMenu, setMobileMenu] = useState(0);

	const menuOpen = (event) => {
		event.currentTarget.style.color = '#030303';
		setMobileMenu('auto');
	}

	const menuClose = () => {
		setMobileMenu(0);
		document.getElementById('menu').style.color = '#eee';
	}

	return <>
	  	<header>
			<div className='view-desktop container'>
			<div className='row'>
				<div className='col'>
					<div className='head-logo-block'>
						<a className='nav-link' href='#top'><img src='assets/images/logo_banner.png' className='header-logo' alt='logo'/></a>
					</div>
				</div>
				<div className='col menu-items-desktop' style={{ textAlign: 'right',marginTop: '6px' }}>
					<MenuItems />
				</div>
			</div>
			</div>
			<div className='view-mobile container'>
				<div className='d-flex'>
					<div className='flex-shrink-1'><div className='menu' id='menu' onClick={menuOpen}>&#9776;</div></div>
					<div className='w-100'>
					<div className='head-logo-block'><a className='nav-link' href='#top'><img src='assets/images/logo_banner.png' className='header-logo' alt='logo'/></a></div>
					</div>
				</div>
			</div>
		</header>
		<AnimateHeight duration={showSpeed} height={mobileMenu}>
			<div className='menu-items-mobile text-center' onClick={menuClose}>
				<div className='menu-close'>&times;</div>
				<MenuItems />
			</div>
		</AnimateHeight>
	</>;
}

export default Header;
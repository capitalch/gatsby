import { Link } from 'gatsby';
import React from 'react';
import styles from './header.module.scss';
// import { useMetaData } from '../../hooks/site-metadata';
import { imageProcessor } from '../../hooks/image-processor-hook';

const Header = () => {
  const temp = imageProcessor('logo', 'fixed');
	return (
		<div className={styles.container}>
			<div className={styles.brandLogo}>
				<Link to="/">
					{temp}
				</Link>
			</div>

			<div className={styles.menu}>
				<Link to="/" >
					Home
				</Link>
				<Link to="/aboutUs/" >
					About
				</Link>
				<Link to="/contacts/" >
					Contacts
				</Link>
				<Link to="/service/" >
					Service
				</Link>
				<Link to="/showcase/" >
					Showcase
				</Link>
				<Link to="/shop/" >
					Shop
				</Link>
				<Link to="/workshop/" >
					Camera-Workshop
				</Link>
				<Link to="/casioService/" >
					Casio-Service
				</Link>
			</div>

			<div className={styles.brandName}>
				Capital Chowringhee Pvt. Ltd.
			</div>

		</div>
	);
};
export default Header;

/*
  
*/

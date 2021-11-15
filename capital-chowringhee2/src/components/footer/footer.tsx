import React, { useState } from 'react';
import settings from '../../settings.json';
import styles from './footer.module.scss';
import fetch from 'isomorphic-unfetch';

function Footer() {
	const [, setHitCount] = useState(0);

	const loadHitCount = async () => {
		// console.log(settings.hitCountUrl);
		const res = await fetch(settings.hitCountUrl);
		const tempHitCount = await res.json();
		if (tempHitCount && tempHitCount.hits) {
			settings.hitCount = tempHitCount.hits;
			setHitCount(tempHitCount.hits); //forced client side refresh of page
		}
	};

	if (!settings.hitCount) {
		if (typeof window !== 'undefined') {
			loadHitCount();
		}
	}

	return (
		<footer className={styles.footer}>
			<div>
				<span className={styles.hits}>Hits:{settings.hitCount}</span>
				<span>&copy;</span> Kush Infotech
			</div>
		</footer>
	);
}
export default Footer;

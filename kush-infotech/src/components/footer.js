import React, { useState } from "react";
import { StaticQuery, graphql } from "gatsby";
import * as footerStyles from "./footer.module.scss";
import fetch from 'isomorphic-unfetch';
import settings from '../assets/settings.json';



function Footer() {
	const [hitCount, setHitCount] = useState(0);

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
        <div className={footerStyles.footerContainer}>
            <div className={footerStyles.footerContent}>
                <span>&copy;</span> 
                    <StaticQuery
                    query={graphql`
                        query SiteAuthorQuery {
                            site {
                            siteMetadata {
                                author
                            }
                        }
                        }
                    `}
                    render={data =>(<> {data.site.siteMetadata.author} </>)} />
            </div>
            <span className={footerStyles.hits}>Hits: {settings.hitCount}</span>
        </div>
	);
}
export default Footer;
import PropTypes from 'prop-types';

import Link from 'next/link';

import styles from '../../../styles/navButton.module.css';

export default function NavButton({ url = '', buttonText = '' }) {
    return (
        <div className={styles.navbutton}>
            <Link href={url}>
                <a><div className={styles.navbtn}>{buttonText}</div></a>
            </Link>
        </div>
    );
}

NavButton.propTypes = {
    buttonText: PropTypes.string,
    url: PropTypes.string,
};

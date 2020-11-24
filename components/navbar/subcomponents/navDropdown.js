import PropTypes from 'prop-types';

import styles from '../../../styles/navDropdown.module.css';

export default function NavDropdown({ buttonText, listItems, urlPrefix }) {
    return (
        <div className={styles.navdropdown}>
            <div className={styles.navdropbtn}>{buttonText}</div>
            <div className={styles.navdropdownContent}>
                {listItems.map(item => (
                    <div className={styles.item} key={item.id}>
                        <a href={urlPrefix + item.href}>{item.text}</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

NavDropdown.propTypes = {
    buttonText: PropTypes.string,
    urlPrefix: PropTypes.string,
    listItems: PropTypes.array,
};

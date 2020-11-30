import Link from 'next/link';

import styles from '../styles/seasonDropdown.module.css';
import PropTypes from 'prop-types';

function Dropdown({ currentSeason, buttonText, listItems, handleSeasonId }) {
    // console.log('listItems', listItems);
    return (
        <>
            <div className={styles.dropdown}>
                <button className={styles.dropbtn}>{buttonText}<div className={styles.down}></div></button>
                <ul className={styles.dropdownContent}>
                    {listItems.map(item => (
                        <Link href={'/standings/' + item.season_id} key={item.season_id}>
                            <a><li>{item.season_name + ' - ' + item.year}</li></a>
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    );
}

Dropdown.propTypes = {
    currentSeason: PropTypes.object,
    buttonText: PropTypes.string,
    listItems: PropTypes.array,
    handleSeasonId: PropTypes.func,
};

export default Dropdown;

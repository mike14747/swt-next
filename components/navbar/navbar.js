import PropTypes from 'prop-types';

import NavDropdown from './subcomponents/navDropdown';
import NavButton from './subcomponents/navButton';

const NavBar = ({ displaySchedule = 0, storesInSchedule = [], error }) => {
    return (
        <div className="row mt-1 mb-4">
            <div className="col-12 justify-content-center text-center">
                <NavButton buttonText="Standings" url="/standings" />
                <NavDropdown buttonText="Results +" urlPrefix="/results" listItems={storesInSchedule} />
                {displaySchedule === 1 &&
                    <NavDropdown buttonText="Schedule +" urlPrefix="/schedule" listItems={storesInSchedule} />
                }
            </div>
        </div>
    );
};

export default NavBar;

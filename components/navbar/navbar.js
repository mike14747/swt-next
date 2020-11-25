import { useContext } from 'react';
import NavbarContext from '../../context/NavbarContext';

import NavDropdown from './subcomponents/navDropdown';
import NavButton from './subcomponents/navButton';

const NavBar = ({ displaySchedule = 1 }) => {
    const navbarSettings = useContext(NavbarContext);

    return (
        <div className="row mt-1 mb-4">
            <div className="col-12 justify-content-center text-center">
                <NavButton buttonText="Standings" url="/standings" />
                <NavDropdown buttonText="Results +" urlPrefix="/results" listItems={navbarSettings} />
                {displaySchedule === 1 &&
                    <NavDropdown buttonText="Schedule +" urlPrefix="/schedule" listItems={navbarSettings} />
                }
            </div>
        </div>
    );
};

export default NavBar;

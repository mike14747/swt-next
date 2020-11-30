import { useContext } from 'react';
import NavbarContext from '../../context/navbarContext';

import NavDropdown from './subcomponents/navDropdown';
import NavButton from './subcomponents/navButton';

const NavBar = () => {
    const { displaySchedule, storesInSchedule } = useContext(NavbarContext);

    return (
        <div className="row mt-1 mb-4">
            <div className="col-12 justify-content-center text-center">
                <NavButton buttonText="Standings" url="/standings/24" />
                <NavDropdown buttonText="Results +" urlPrefix="/results" listItems={storesInSchedule} />
                {displaySchedule === 1 &&
                    <NavDropdown buttonText="Schedule +" urlPrefix="/schedule" listItems={storesInSchedule} />
                }
            </div>
        </div>
    );
};

export default NavBar;

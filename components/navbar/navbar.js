import { useContext } from 'react';
import NavbarContext from '../../context/navbarContext';

import NavDropdown from './subcomponents/navDropdown';
import NavButton from './subcomponents/navButton';

const NavBar = () => {
    const { currentSeasonId = 0, displaySchedule = 0, storesInSchedule = [] } = useContext(NavbarContext);

    return (
        <div className="row mt-1 mb-4">
            <div className="col-12 justify-content-center text-center">
                <NavButton buttonText="Standings" url={`/standings/${currentSeasonId}`} />
                <NavDropdown buttonText="Results +" urlPrefix={`/results/${currentSeasonId}`} listItems={storesInSchedule} />
                {displaySchedule === 1 &&
                    <NavDropdown buttonText="Schedule +" urlPrefix={`/schedules/${currentSeasonId}`} listItems={storesInSchedule} />
                }
            </div>
        </div>
    );
};

export default NavBar;

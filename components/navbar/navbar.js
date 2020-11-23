import { useState, useEffect } from 'react';
import NavDropdown from './subcomponents/navDropdown';
import NavButton from './subcomponents/navButton';

function NavBar() {
    const currentSeasonId = 24;
    const displaySchedule = 1;

    const [storeDivisionArr, setStoreDivisionArr] = useState([]);

    // useEffect(() => {
    //     if (currentSeasonId) {
    //         axios.get('/api/schedules/navbar/' + currentSeasonId)
    //             .then((response) => {
    //                 const storeDivArray = response.data.map(storeDiv => (
    //                     {
    //                         id: storeDiv.store_division,
    //                         text: storeDiv.store_city + ' (' + storeDiv.day_name + ')',
    //                         href: '/' + storeDiv.store_id + '/' + storeDiv.division_id,
    //                     }
    //                 ));
    //                 setStoreDivisionArr(storeDivArray);
    //             })
    //             .catch(error => console.log(error));
    //     }
    // }, [currentSeasonId]);

    return (
        <div className="row mt-1 mb-4">
            <div className="col-12 justify-content-center text-center">
                <NavButton buttonText="Standings" url="/standings" />
                <NavDropdown buttonText="Results +" urlPrefix="/results" listItems={storeDivisionArr} />
                {displaySchedule === 1 &&
                    <NavDropdown buttonText="Schedule +" urlPrefix="/schedule" listItems={storeDivisionArr} />
                }
            </div>
        </div>
    );
}

export default NavBar;

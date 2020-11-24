import NavDropdown from './subcomponents/navDropdown';
import NavButton from './subcomponents/navButton';

const NavBar = () => {
    const currentSeasonId = 24;
    const displaySchedule = 1;

    return (
        <div className="row mt-1 mb-4">
            <div className="col-12 justify-content-center text-center">
                <NavButton buttonText="Standings" url="/standings" />
                <NavDropdown buttonText="Results +" urlPrefix="/results" listItems={[]} />
                {displaySchedule === 1 &&
                    <NavDropdown buttonText="Schedule +" urlPrefix="/schedule" listItems={[]} />
                }
            </div>
        </div>
    );
};

// NavBar.propTypes = {
//     storesInSchedule: PropTypes.array,
//     error: PropTypes.object,
// };

// export async function getServerSideProps({ req, query }) {
//     console.log('inside getServerSideProps() in navbar.js:', storesInSchedule);
//     const protocol = req.headers['x-forwarded-proto'] || 'http';
//     const host = req.headers['x-forwarded-host'] || req.headers.host;

//     const response = await fetch(`${protocol}://${host}/api/schedules/navbar/24`);
//     if (response.ok) {
//         const data = await response.json();
//         return { props: data };
//     } else {
//         const error = { statusCode: response.status, message: 'An error occurred trying to fetch data!' };
//         return { props: { error } };
//     }
// }

export default NavBar;

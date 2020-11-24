import PropTypes from 'prop-types';

const Settings = ({ settings, error }) => {
    return (
        <>
            {settings || error}
        </>
    );
};

Settings.propTypes = {
    settings: PropTypes.object,
    error: PropTypes.object,
};

export async function getServerSideProps({ req, query }) {
    const protocol = req.headers['x-forwarded-proto'] || 'http';
    const host = req.headers['x-forwarded-host'] || req.headers.host;

    const response = await fetch(`${protocol}://${host}/api/settings`);
    if (response.ok) {
        const data = await response.json();
        return { props: data };
    } else {
        const error = { statusCode: response.status, message: 'An error occurred trying to fetch data!' };
        return { props: { error } };
    }
}

export default Settings;

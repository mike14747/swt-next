import ReactHtmlParser from 'react-html-parser';
import PageHeading from '../components/pageHeading';
import PropTypes from 'prop-types';

const Rules = ({ rules, error }) => {
    return (
        <>
            {rules
                ? <>
                    <PageHeading text={rules.content_heading} />
                    {ReactHtmlParser(rules.page_content)}
                </>
                : error && <h4 className="text-danger text-center mt-4">An error occurred fetching rules!</h4>
            }
        </>
    );
};

Rules.propTypes = {
    rules: PropTypes.object,
    error: PropTypes.object,
};

export async function getServerSideProps({ req, query }) {
    const protocol = req.headers['x-forwarded-proto'] || 'http';
    const host = req.headers['x-forwarded-host'] || req.headers.host;

    const response = await fetch(`${protocol}://${host}/api/pages/rules`);
    if (response.ok) {
        const data = await response.json();
        return { props: data };
    } else {
        const error = { statusCode: response.status, message: 'An error occurred trying to fetch state info!' };
        return { props: { error } };
    }
}

export default Rules;

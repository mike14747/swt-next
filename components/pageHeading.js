import PropTypes from 'prop-types';

const PageHeading = ({ text }) => {
    return (
        <>
            <h2 className="text-center">{text}</h2>
            <hr />
        </>
    );
};

PageHeading.propTypes = {
    text: PropTypes.string,
};

export default PageHeading;

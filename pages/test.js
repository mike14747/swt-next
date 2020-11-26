import getCurrentSeasonId from '../pages/api/test';

const Test = ({ currentSeasonId }) => {
    console.log('test.js currentSeasonId prop:', currentSeasonId);

    return (
        <div>This is the test page!</div>
    );
};

export async function getServerSideProps({ req, res }) {
    // return { props: {} };

    const response = await getCurrentSeasonId(req, res);
    if (!response) return { notFound: true };
    return { props: { currentSeasonId: response.current_season_id } };
}

export default Test;

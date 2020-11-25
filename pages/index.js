// import Link from 'next/link';

const Home = () => {
    return (
        <>
            <h2>This is the home page!</h2>
        </>
    );
};

export async function getStaticProps(context) {
    return {
        props: {},
    };
}

export default Home;

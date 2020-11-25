const Test = () => {
    return (
        <div>This is the test page!</div>
    );
};

export async function getStaticProps(context) {
    return {
        props: {},
    };
}

export default Test;

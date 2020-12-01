const Test = () => {
    return (
        <div>This is the test page!</div>
    );
};

export async function getServerSideProps(context) {
    return { props: {} };
}

export default Test;

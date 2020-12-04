import { getSomething } from '../lib/api/?';

export async function getServerSideProps({ params }) {
    try {
        const someResponse = await getSomething();
        const someJson = JSON.parse(JSON.stringify(someResponse));

        if (!someResponse.error) return { props: { data: someJson } };
        throw new Error(someResponse.error);
    } catch (error) {
        console.log(error.message);
        return { props: { error: { message: 'An error occurred trying to fetch data!' } } };
    }
}

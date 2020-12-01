import { useRouter } from 'next/router';

const Criteria = () => {
    const router = useRouter();
    const { criteria } = router.query;

    return (
        <div>Search page! Crtieria passed was: {criteria}</div>
    );
};

export default Criteria;

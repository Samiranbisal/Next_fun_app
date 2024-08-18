import { useRouter } from "next/router";
const rd = () => {
    const {query} = useRouter();
    // mm.query.readom
    // console.log(mm);
    return <h1>OMG {query.readom}</h1>;
};

export default rd;

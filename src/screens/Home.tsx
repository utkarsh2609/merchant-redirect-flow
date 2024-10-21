import { useSearchParams } from "react-router-dom";

const Home = () => {
    let [searchParams] = useSearchParams();
    let id = searchParams.get('id');
    const pwQueryObject = Object.fromEntries(searchParams.entries());
    console.log('searchParams', id);
    console.log('sara object', pwQueryObject)
    if(id) {

    } else {
        
    }

    return (
        <>
        <h1>Home Component</h1>
        {import.meta.env.VITE_APP_ENV}
        </>
    )
}

export default Home;
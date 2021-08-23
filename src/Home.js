import Bloglist from './Bloglist';
import useFetch from './useFetch';


const Home = () => {
    const {data: blogs, isPending, error} = useFetch('https://my-json-server.typicode.com/BergFulton/walter-json/blogs');

    return (<div className="home">
        {error && <div>Werps, something went super bad. Try again later?</div>}
        {isPending && <div>Getting cute Walter content...</div>}
        {blogs && <Bloglist blogs={blogs} title="All Blogs About Walter"/>}
    </div>  );
}
 
export default Home;

import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry, you're barking up the wrong tree</h2>
            <p>We can't find what you're looking for</p>
            <Link to="/">Back to the homepage</Link>
        </div>
     );
}
 
export default NotFound;

const Bio = () => {
    return (
    <div className="bio">
        <h2>About Walter</h2>
        <div className="bio-layout">
            <div className="img-container">
                <img src={`${process.env.PUBLIC_URL}/walter_scarf.jpg`} alt="Walter the schnabrador, a fuzzy black dog wearing a purple camo scarf while he rides in a Honda Fit" />
            </div>
            <div>
                <p>Meet Walter! Walter is affectionately referred to as a Giant Schnabrador, though we're not entirely sure what his mix is (whatever it is, it is adorable and perfect).</p>
                <p>Walter was rescued from the Gurnsey County Dog Warden by the Western PA Humane Society, and was adopted before he could even make it to the website.</p>
                <p>Walter is deeply loved by many people, and has a neighborhood fan club.</p>
                <p><strong>Age:</strong> About 12, but we're not sure! The shelter estimated he was 3 when he was adopted.</p>
                <p><strong>Weight:</strong> About 60lbs.</p>
                <p><strong>Fitness Regimen:</strong>Three walks a day, every day for socializing and business.</p>
                <p><strong>Favorite Human:</strong>The Boy, paws down.</p>
                <p><strong>Nicknames:</strong> Bodach, Mungo, Big Guy, Sir, Bubba, Wallabee, The Wiley Wallabee, Wally Doggy Doodle, etc.</p>
                <p><strong>Walter Likes</strong></p>
                <ul>
                    <li>Snuggles</li>
                    <li>Cheese</li>
                    <li>Car rides</li>
                    <li>Naps</li>
                    <li>Popcorn</li>
                </ul>
                <p><strong>Walter Does Not Like</strong></p>
                <ul>
                    <li>Motorcycles</li>
                    <li>Cats (sorry, they're just not his thing)</li>
                    <li>Spinach</li>
                    <li>Having his feets touched</li>
                </ul>
                <p><strong>Favorite Toys:</strong> Food Cube and Busy Buddy with Cheese!</p>
            </div>
        </div>
    </div>
    );
}
 
export default Bio;
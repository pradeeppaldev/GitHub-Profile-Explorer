import { useEffect, useState } from "react";

function Body(){

    const [inputValue, setInputValue] = useState(7);

    const [Profile, setProfile] = useState([]);

    async function generateProfile(inputValue) {
        const response = await fetch(`https://api.github.com/users?per_page=${inputValue}`);
        const data = await response.json();

        setProfile(data);
    }

    useEffect(() => {
        generateProfile();
    }, []);

    function searchProfile(){
        generateProfile(inputValue)
    }

    function handleChange(event) {
        return setInputValue(event.target.value); // Update state when input changes
    }

    return(

        <>

        <div className="userInput">
        <input type="number" value={inputValue} onChange={handleChange} />
            <button onClick={searchProfile}>Search</button>
        </div>

        <div className="profiles">
            {
                Profile.map((value) => {
                     return <div key={value.id} className="cards">
                        <img src={value.avatar_url}></img>
                        <h2>{value.login}</h2>
                        <a href={value.html_url} target="_blank">Profile</a>
                    </div>
                })
            }
        </div>
        </>
    );

}
export default Body;
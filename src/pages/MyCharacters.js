import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import characterService from '../services/characterService'

export default function MyCharacters ({ user }) {

    const [characterList, setCharacterList] = useState([])

    const getAllCharacters = async () => {
        try {
            const response = await characterService.index()
            setCharacterList(response.data.characters)

        } catch (error) {
            console.log(error)
        }
    }

    //todo: limit by user
    useEffect(() => {
      getAllCharacters()
    }, [])

    return ( 
        <div className="container mt-3">
            <h2>Profile</h2>
            <p>username: {user}</p>
            {/* <p>email: {email}</p> */}
            
            <h2>My Characters</h2>
                {characterList.map(t => 
                    <div key={t._id}> 
                    <Link to={`/${t._id}`}>
                    {t.characterName}
                    </Link>
                    </div>
                )}
           

        </div>
    );
}
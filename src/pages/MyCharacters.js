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

    useEffect(() => {
      getAllCharacters()
    }, [])

    return ( 
        <div>
            <h1>My Characters</h1>

            
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
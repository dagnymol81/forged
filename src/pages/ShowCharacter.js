import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShowInfo from "../components/ShowInfo";
import Status from "../components/Status";
import characterService from '../services/characterService'

export default function MyCharacters () {

    const [character, setCharacter] = useState()

    const params = useParams()
    console.log(params.id)

    useEffect(() => {
      const getCharacter = async () => {
        try {
            const response = await characterService.find(params.id)
            setCharacter(response.data.character)
        } catch (error) {
            console.log(error)
        }
    }
      let currentCharacter = getCharacter()
      setCharacter(currentCharacter)
      console.log(currentCharacter)
    }, [])

    return ( 
        <div>
          <h1>Show</h1>
            {character && character.characterName}
            {character && <ShowInfo character={character} />}
            {character && <Status character={character} />}
        </div>
    );
}
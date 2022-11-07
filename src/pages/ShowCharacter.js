import { useEffect, useState } from "react";

import characterService from '../services/characterService'

export default function MyCharacters () {

    const [character, setCharacter] = useState()

    const getCharacter = async () => {
        try {
            const response = await characterService.show()
            setCharacter(response.data.character)
            console.log(character)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
      getCharacter()
    }, [])

    return ( 
        <div>
          <h1>Show</h1>
              
        </div>
    );
}
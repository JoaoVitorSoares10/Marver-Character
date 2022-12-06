import { useState } from 'react';
import md5 from 'md5';

import {api} from '../../services/api';

import { Container, CharactersList } from './styles';
import { CardList } from '../CardList';

const timestamp = Number(new Date());
const hash = md5(timestamp + process.env.REACT_APP_PRIVATE_KEY! + process.env.REACT_APP_PUBLIC_KEY);

interface onNoInternetConectionProps {
    onNoInternetConection:  React.Dispatch<React.SetStateAction<boolean>>;
}

interface CharacterItem {
    id: string,
    name: string,
    description: string,
    thumbnail: {
        path: string
    },
    urls: [
        {
            type: string,
            url: string
        }  
    ]
}

export function Characters ({onNoInternetConection}:onNoInternetConectionProps){
    const [characterName, setCharacterName] = useState("");
    const [characterData, setCharacterData] = useState<[CharacterItem]>();
    const [isNotFound, setIsNotFound] = useState(false);

    const handleGetCharacter = async () => {
        await api.get(`characters?nameStartsWith=${characterName}&ts=${timestamp}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${hash}`)
        .then((response) => {
            setCharacterData(response.data.data.results)
            response.data.data.results.length === 0 ? setIsNotFound(true) : setIsNotFound(false);
            onNoInternetConection(false)
        })
        .catch(err=> err.code === "ERR_NETWORK" && onNoInternetConection(true));
    }

    return(
        <>
            <Container>
            <input value={characterName} onChange={(e)=>setCharacterName(e.target.value)} type="text" placeholder="Enter the character's name"/>
            <button onClick={()=>handleGetCharacter()}>Search</button>
            </Container>   
            <CharactersList>
                {characterData && !isNotFound ?
                    characterData.map((item)=>(
                        <CardList 
                            key={item.id}
                            CharacterInfo={item}
                        />
                    ))    
                : <p>No results found</p>
                }
            </CharactersList>    
        </>
    )
}
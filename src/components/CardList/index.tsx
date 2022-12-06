import { Container, CharacterDesc, CharacterButtons } from './styles';

interface CharacterInfoProps {
    CharacterInfo: {
        id: string,
        name: string,
        description: string
        thumbnail: {
            path: string
        }
        urls: [
            {
                type: string
                url: string
            }
        ],
    }
}

export function CardList({ CharacterInfo }: CharacterInfoProps) {
    return (
        <Container>
            <div>
                <img src={`${CharacterInfo.thumbnail.path}/portrait_fantastic.jpg`} alt="" />
            </div>
            <CharacterDesc>
                <div>
                    <h2>{CharacterInfo.name}</h2>
                    <h3>{CharacterInfo.description}</h3>
                </div>
                <CharacterButtons>
                    {CharacterInfo.urls.map((item) => (
                        item.type === 'detail' && <a target="_blank" key={item.type} href={item.url}>More Information</a>
                    ))}
                </CharacterButtons>
            </CharacterDesc>
        </Container>
    )
}
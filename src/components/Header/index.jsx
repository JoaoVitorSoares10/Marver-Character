import { Container } from './styles';

import LogoImg from '../../assets/logo.svg'

export function Header (){
    return(
        <Container>
            <img src={LogoImg} alt="marvel logo"/>
        </Container>
    )
}
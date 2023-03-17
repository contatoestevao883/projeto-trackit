import styled from "styled-components"
import trackit from '../assets/TrackIt.png'
import pfp from '../assets/pfp.png'

export default function Habitos(){
    return(
        <>
            <Header>     
                <Logo src={trackit} />
                <Profile src={pfp} />
            </Header>
            <DivContainer>
                <Span>Meus hábitos</Span>
                <Button>+</Button>
            </DivContainer>
            <Paragraph>Você não tem nenhum hábito 
                    cadastrado ainda. Adicione um hábito 
                    para começar a trackear!
            </Paragraph>
        </>
    )

}


const Header = styled.header`
    position: fixed;
    width: 100%;
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
`
const Logo = styled.img`
    margin: 18px;

`
const Profile = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 100px;
    margin-right: 20px;
    margin-top: 10px;
`
const DivContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 70px;
    margin-left: 30px;

`
const Span = styled.span`
    font-size: 23px;
    font-family: 'Lexend Deca';
    color: #126BA5;
    margin-top: 40px;
`
const Button = styled.button`
box-sizing: content-box;
    width: 30px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
    font-size: 30px;
    color: #FFFFFF;
    border-style: none;
    margin-right: 30px;
    margin-top: 35px;
`
const Paragraph = styled.p`
     margin-left: 30px;
     font-family: 'Lexend Deca';
     color: #666666;
     font-size: 18px;
     margin-top: 20px;
     width: 338px;
    height: 74px;

`
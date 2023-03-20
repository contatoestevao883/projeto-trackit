import styled from "styled-components"
import trackit from '../assets/TrackIt.png'
import pfp from '../assets/pfp.png'
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
import { useState } from "react";

  

export default function Habitos(){
    const [display, setDisplay] = useState(false)
    const percentage = 'Hoje';
    function toggle(){
        if(display === false){
            setDisplay(!display)
        }
    }
    return(
        <DivBox>
            <Header data-test="header">     
                <Logo src={trackit} />
                <Profile src={window.localStorage.getItem("image")} />
            </Header>
            <DivContainer>
                <Span>Meus hábitos</Span>
                <Button onClick={toggle}>+</Button>
            </DivContainer>
            {display ? 
            <DivBoxTable>
                <DivTable display={display}>
                    <InputTable />
                    <DivButton>
                        <ButtonTable>D</ButtonTable>
                        <ButtonTable>S</ButtonTable>
                        <ButtonTable>T</ButtonTable>
                        <ButtonTable>Q</ButtonTable>
                        <ButtonTable>Q</ButtonTable>
                        <ButtonTable>S</ButtonTable>
                        <ButtonTable>S</ButtonTable>
                    </DivButton>
                </DivTable>
             </DivBoxTable>
             :
             <DivBoxTable>
                <DivTable2>
                    <InputTable />
                    <DivButton>
                        <ButtonTable>D</ButtonTable>
                        <ButtonTable>S</ButtonTable>
                        <ButtonTable>T</ButtonTable>
                        <ButtonTable>Q</ButtonTable>
                        <ButtonTable>Q</ButtonTable>
                        <ButtonTable>S</ButtonTable>
                        <ButtonTable>S</ButtonTable>
                    </DivButton>
                </DivTable2>
            </DivBoxTable>
            }
            <Paragraph >Você não tem nenhum hábito 
              cadastrado ainda. Adicione um hábito 
              para começar a trackear!
            </Paragraph> 
            
            {display ? 
            <Footer>
                <HabitSpan>
                    Hábitos
                </HabitSpan>
                <DivCircle>
                    <CircularProgressbar
                        value={percentage}
                        text={`${percentage}`}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                        backgroundColor: "#3e98c7",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent"
                        })}
                     />
                </DivCircle>
                <HistorySpan>
                    Histórico
                </HistorySpan>
            </Footer>
                :
            <Footer2>
                <HabitSpan>
                    Hábitos
                </HabitSpan>
                <DivCircle>
                    <CircularProgressbar
                        value={percentage}
                        text={`${percentage}`}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                        backgroundColor: "#3e98c7",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent"
                        })}
                    />
                </DivCircle>
                <HistorySpan>
                    Histórico
                </HistorySpan>
            </Footer2>
            }
        </DivBox>
    )

}

const DivBox = styled.div`
    background-color: #E5E5E5;
    height: 600px;


`
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
const Footer = styled.footer`
    display: flex;
    justify-content:space-between;
    width: 375px;
    height: 70px;
    background: #FFFFFF;
    margin-top: 180px;
`
const Footer2 = styled.footer`
    display: flex;
    justify-content:space-between;
    width: 375px;
    height: 70px;
    background: #FFFFFF;
    margin-top: 360px;
`
const HabitSpan = styled.span`
    font-family: 'Lexend Deca';
    font-size: 18px;
    color: #52B6FF;
    margin-left: 40px;
    line-height: 50px;

`
const HistorySpan = styled.span`
    font-family: 'Lexend Deca';
    font-size: 18px;
    color: #52B6FF;
    margin-right: 50px;
    line-height: 50px;
`
const DivCircle = styled.div`
    position:absolute;
    left: 130px;
    top: 560px;
    width: 91px;
    height: 91px;
    background-color: #52B6FF;
    border-radius: 100%;

`
const DivBoxTable = styled.div`
    display: flex;
    justify-content:center;
    margin-top:20px;
`
export const DivTable = styled.div`
    background-color: #FFFFFF;
    width: 340px;
    height: 180px;
`
export const DivTable2 = styled.div`
    background-color: #FFFFFF;
    width: 340px;
    height: 180px;
    display: none;
`
const InputTable = styled.input`
    margin: 20px;
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
`
const DivButton = styled.div`
    display: flex;
`
const ButtonTable = styled.button`
    margin-left: 5px;
    text-align: center;
    width: 30px;
    height: 30px;
    color: #D4D4D4;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 20px;
`
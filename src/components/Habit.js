import { useContext } from "react"
import styled from "styled-components"
import { AuthContext } from "../context/AuthContext"
import { BsTrash3 } from 'react-icons/bs'
import Days from "./Days"
import axios from "axios"

export default function Habits({ listOfHabits, setListOfHabits }){
    console.log(listOfHabits)
    console.log(listOfHabits)
    const id = window.localStorage.getItem("id")
    const token = window.localStorage.getItem("token")
   
    function deleteHabit(){
        const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,{headers : { Authorization: `Bearer ${token}` }})
        promise.then((response) => {
          console.log(response)
          const newList = listOfHabits.filter((listOfHabit) => {
            console.log(listOfHabit.id)
            console.log(id)
            return listOfHabit.id !== Number(id)
          })
          setListOfHabits(newList)
        })
        promise.catch((error) => {
          console.error(error)
        })
    }
    return(
        <>
            {listOfHabits.map((habits, index) => <Habit key={index} name={habits.name} days={habits.days} deleteHabit={deleteHabit}/>) }
        </>
    )
}

function Habit(props){

    return(
            <DivTable key={props.index}>
                <DivButton>
                    <DivFlex>
                        <DivIonIcon onClick={props.deleteHabit} >
                            <BsTrash3 />
                        </DivIonIcon>
                        <HabitSpan>{props.name}</HabitSpan>
                        <DivBoxFlex>
                            <Days />
                        </DivBoxFlex>
                    </DivFlex>
                </DivButton>
            </DivTable>
    )
}

const DivButton = styled.div`
    display: flex;
    margin-left: 15px;
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
    cursor: pointer;
`

const HabitSpan = styled.span`
    margin-top: 10px;
    margin-left: 5px;
    font-size: 20px;
    color:#666666;
    font-family: 'Lexend Deca';
`
export const DivTable = styled.div`
    align-items: center;
    background-color: #FFFFFF;
    width: 340px;
    height: 91px;
    margin-top: 15px;
`
const DivFlex = styled.div`
    display: flex;
    flex-direction: column;
`
const DivBoxFlex = styled.div`
    display: flex;
    margin-top: 15px;
`
const DivIonIcon = styled.button` 
    position: absolute;
    margin-top: 10px;
    left: 330px;
    border-style: none;
    background-color: white;
    cursor:pointer;
`
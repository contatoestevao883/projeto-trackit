import { useContext, useState } from "react"
import styled from "styled-components"
import { AuthContext } from "../context/AuthContext"

export default function Days({days}){
    const [weekdays, setWeekdays] = useState(["D", "S", "T", "Q", "Q", "S", "S"])
    return(
        <>
            {weekdays.map((day, index) => <Day day={day} index={index} key={index}/>)}
        </>
    )
}

function Day(props){
    return(
        <div key={props.index}>
            <ButtonTable type="button">{props.day}</ButtonTable>
        </div>
    )
}

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
import React, { useContext } from "react"

import BottomTabMoney from "../../../components/BottomTabMoney"

import { AuthContext } from "../../../contexts/auth"

export default function Gasto(){
    const { themeMode } = useContext(AuthContext)
    
    return(
        <BottomTabMoney theme={themeMode}/>
    )
}
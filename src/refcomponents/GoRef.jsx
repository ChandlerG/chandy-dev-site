import React from "react";
import './codestyle.css'

export const GoRef = () => {
    return (

        <div className='code'>
            <pre>{`
import (
 "some imports"
)

type Cat struct {
    Name, Color string
}

func PublicCatFunc() Cat {
    dagwood = Cat{"Dagwood", "Tabby I Guess"}
    sully = Cat{Name: "Sully", Color:"Tabby I Guess"}
}

func privateArraysFunc() {
    catNames := [2]string{
    "Dagwood",
    "Sully"
    }
    arr := make([]int, length, capacity)
}
func privateMapsFunc(s string) map[string]int{
    m := make(map[string]int)
    sArr := strings.Split(s, " ")
    for index, elem := range sArr{
        m[s] = m[s]+1
    }
}

           `} </pre>
        </div>
    )
}
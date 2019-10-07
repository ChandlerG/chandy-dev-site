import React from "react";
import './codestyle.css'

export const GoRef = () => {
    return (

        <div className='code'>
            <pre>{`
package chandy

import "strings"

// Cat is used to map a Cat's name to their color
// the Name should be unique within the program but
// two Cats can have the same color descriptor
type Cat struct {
	Name, Color string
}

// CatColorDescriptorTabby is how I describe my Cat's tabby-ish color
const CatColorDescriptorTabby = "Tabby I Guess"

// PublicCatFunc returns a slice of special Cats
func PublicCatFunc() []Cat {
	dagwood := Cat{"Dagwood", CatColorDescriptorTabby}          // without field names (see order)
	sully := Cat{Name: "Sully", Color: CatColorDescriptorTabby} // with field names (recomended)
	return []Cat{dogwood, sully}
}

// privateArraysFunc returns a slice of cat names
func privateArraysFunc() []string {
	catNames := [2]string{
		"Dagwood",
		"Sully",
	}
	arr := make([]int, len(catNames), len(catNames))
	for index, name := range catNames {
		arr[index] = name
	}
	// could also be done as follows, this creates a slice for the given array. This would
	// allow you to remove 36-39.
	//   return catNames[:]
	return arr
}

// privateMapsFunc returns a map of fields in s and the number of times they occur in s
func privateMapsFunc(s string) map[string]int {
	m := make(map[string]int)
	sArr := strings.Split(s, " ") // if splitting by user provided whitespace, you may want to use [strings.Fields](https://golang.org/pkg/strings/#Fields)
	for index, elem := range sArr {
		m[s] = m[s] + 1 // m[s]++ is not permitted so first get the value then set it.
	}
	return m
}
           `} </pre>
        </div>
    )
}

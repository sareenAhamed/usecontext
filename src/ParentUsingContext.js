import {createContext, React, useContext, useState} from 'react'

const userContext = createContext()

export default function ParentUsingContext() {
    const [user, setUser] = useState("React");

    return (
      <userContext.Provider value={user}>
        <h1>ParentUsingContext</h1>
        <Component1/>
        </userContext.Provider>
    )
}


function Component1(){
    return(
        <>
        <h3>Component 1</h3>
        <Component2 />

        </>
    )
}

function Component2(){
    return(
        <>
        <h3>Component 2</h3>
        <Component3 />
        
        </>
    )
}

function Component3(){
    return(
        <>
        <h3>Component 3</h3>
        <Component4 />
        
        </>
    )
}

function Component4(){
    return(
        <>
        <h3>Component 4</h3>
        <Component5 />
        
        </>
    )
}

function Component5(){
    const user = useContext(userContext)
    return(
        <>
        <h3>Component 5</h3>
        <h1>{`User is ${user}.`}</h1>
        
        
        </>
    )
}


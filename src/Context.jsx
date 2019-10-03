import React,{createContext,useState} from "react"

export const Context=createContext()

const Provider=({children})=>{
    const [isAuth,setIsAuth]= useState(()=>{
        return localStorage.getItem("token")?true:false
    })
    const value={
        isAuth,
        autenticar: token=>{
            setIsAuth(true)
            localStorage.setItem("token",token)

        },
        cerrarsesion:()=>{
            setIsAuth(false)
            localStorage.removeItem("token")
        }
    }
    return(
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}
export default {
    Provider,
    Consumer:Context.Consumer

}
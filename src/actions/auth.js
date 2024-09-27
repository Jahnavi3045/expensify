import { googleAuthProvider} from "../firebase/firebase"
import { signInWithPopup ,signOut} from "firebase/auth"
import auth from "../firebase/firebase"

export const login=(uid)=>({
    type:'LOGIN',
    uid
})

export const logout=()=>({
    type:'LOGOUT'
})

export const startLogin=()=>{
    return ()=>{
        return signInWithPopup(auth,googleAuthProvider)
    }
}

export const startLogOut=()=>{
    return ()=>{
        return signOut(auth);
    }
}
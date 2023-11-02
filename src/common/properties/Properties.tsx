import { useSelector } from "react-redux"
import Home from "../../screens/main/home/Index"
import Profile from "../../screens/main/profile/Index"
import Subscription from "../../screens/main/subscription/Index"
import { RootState, store } from "../../store"

const countState:any = store.getState()

console.log('=====', countState)

// navigators options 
export const screenOptions = {
    headerShown: false
}

import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import CommonStyle from '../../../common/styles/CommonStyle'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { increment } from '../../../store/slices/BottomCountSlice'

const Home = (props: any) => {

  const { navigation } = props
  const count:any = useSelector((state: any) => state.counter.count)

  console.log(count)
  const dispatch = useDispatch()

  const handleRedirect = () => {
    // navigation.navigate('Profile')
    dispatch(increment())
  }

  return (
    <TouchableOpacity onPress={handleRedirect} style={[CommonStyle.container]}>
      <Text style={[CommonStyle.text_black]}>Home </Text>
    </TouchableOpacity>
  )
}

export default Home
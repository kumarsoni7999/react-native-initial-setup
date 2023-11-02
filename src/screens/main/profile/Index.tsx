import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import CommonStyle from '../../../common/styles/CommonStyle'

const Profile = (props: any) => {

  const { navigation } = props

  const handleRedirect = () => {
    // navigation.navigate('Home')
  }

  return (
    <TouchableOpacity onPress={handleRedirect} style={[CommonStyle.container]}>
      <Text style={[CommonStyle.text_black]}>Profile</Text>
    </TouchableOpacity>
  )
}

export default Profile
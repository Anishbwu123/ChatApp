import { ActivityIndicator, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Screens } from '../../Adapter/Navigation/screenTypes'

const Splash = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const navigation = useNavigation()

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
      navigation.navigate(Screens.Chatlist as never) // Navigate to Chatlist after splash
    }, 3000) // 3 seconds splash

    return () => clearTimeout(timer) // Cleanup if component unmounts early
  }, [navigation])

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Splash</Text>
      {loading ? <ActivityIndicator size={'large'} color={'green'} /> : null}
    </View>
  )
}

export default Splash

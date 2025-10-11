import {  } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from './StackNavigation'


const NavigationContainers = () => {

    return (
       
            <NavigationContainer>
                <StackNavigation />
                {/* <NetworkLogger /> */}
            </NavigationContainer>
        
    )
}

export default NavigationContainers
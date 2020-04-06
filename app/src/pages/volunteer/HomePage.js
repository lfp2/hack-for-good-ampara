import React, { useState } from 'react';
import { View } from 'react-native';
import { MenuButton } from '../../assets/styles/volunteer/homepage';

export default function HomePageScreen() {
    return (
        <View>
            <MenuButton></MenuButton>
            <MenuButton></MenuButton>
            <MenuButton></MenuButton>
            <MenuButton></MenuButton>
        </View>
    );
}
import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';


const Menu = props => {

  
    return (
        <View style={style.container}>
            <Text>
                Hello Menu
            </Text>
            <Button title="Category"

                onPress={() => { props.navigation.navigate('CategoryScreen') }}

            />
        </View>

    );

}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }

});

export default Menu;


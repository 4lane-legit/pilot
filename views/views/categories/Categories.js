import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import iPhoneSize from '../../../helpers/util';

const size = iPhoneSize();
let cardSize = 100;
let cardMargin = 8;

if (size === 'small') {
    cardSize = 90;
    cardMargin = 4;
    } else if (size === 'large') {
    cardSize = 115;
}

export const Categories = (props) =>  {
    function getCategories() {
        return props.categories.map((category, index) => (
            <TouchableOpacity
                style={styles.card}
                key={`category-item-${index}`}
            >
                <ImageBackground
                    source={category.photo}
                    style={styles.image}
                >
                    <View style={styles.imageText}>
                        <Text>{category.name}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        ));

    }

    return (
        <ScrollView
            contentContainerStyle={styles.wrapper}
            horizontal
            showHorizontalScrollIndicator={true}
        >
            {getCategories()}
        </ScrollView>
    );
}


const styles = StyleSheet.create({
  wrapper: {
  	flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 5,
    width: cardSize,
    height: cardSize,
    marginRight: cardMargin,
    marginLeft: cardMargin
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    overflow: 'hidden',
    borderRadius: 5
  },
  imageText: {
        position: 'absolute',
        top: 0, 
        left: 10, 
        right: 0, 
        bottom: 0, 
        justifyContent: 'top', 
        alignItems: 'left'
    }
});
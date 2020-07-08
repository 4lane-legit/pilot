import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {SearchBar} from '../../search/SearchBar';
import {colors} from "../../../themes/default";
import {categoriesList} from '../../../data/categories';
import {Categories} from '../../../views/views/categories/Categories';

export const ExploreContainer = (props) => {
    const { data } = props; 

    return (
      <View style={styles.wrapper}>
        <SearchBar />
        <View>
            <ScrollView
              style={styles.scrollview}
              contentContainerStyle={styles.scrollViewContent}
            >
              <Text style={styles.heading}> 
                Explore Vantage Point 
              </Text>
              <View style={styles.categories}>
                <Categories categories={categoriesList} />
              </View>
            </ScrollView>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      backgroundColor: colors.white,
    },
    scrollview: {
      paddingTop: 100,
    },
    scrollViewContent: {
      paddingBottom: 80,
    },
    categories: {
      marginBottom: 40,
    },
    heading: {
      fontSize: 22,
      fontWeight: '600',
      paddingLeft: 20,
      paddingBottom: 20,
      color: colors.gray04,
    },
  })
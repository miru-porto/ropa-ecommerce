import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { styles } from './styles';

const CategoryGrid = ({ item, onSelected }) => {
    return (    
         <View style={[styles.gridItem, {backgroundColor: item.color}]}>
            <TouchableOpacity 
                style={styles.container}
                onPress={() => onSelected(item)}    
            >
                <View>
                    <Text style={styles.title}>{item.name}</Text>
                </View>
            </TouchableOpacity>
         </View>
    )
}

export default CategoryGrid;
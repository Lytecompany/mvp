import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './style';

const UnitToggle = () => {
  const [selectedUnit, setSelectedUnit] = useState('Ft'); // Default unit

  const handleToggle = (unit: string) => {
    setSelectedUnit(unit); // Update the selected unit
  };

  return (
    <View style={styles.container}>
      {/* Ft Button */}
      <TouchableOpacity
        style={[
          styles.toggleButton,
          selectedUnit === 'Ft' ? styles.activeButton : styles.inactiveButton,
        ]}
        onPress={() => handleToggle('Ft')}
      >
        <Text
          style={[
            styles.toggleText,
            selectedUnit === 'Ft' ? styles.activeText : styles.inactiveText,
          ]}
        >
          Ft
        </Text>
      </TouchableOpacity>

      {/* Cm Button */}
      <TouchableOpacity
        style={[
          styles.toggleButton,
          selectedUnit === 'Cm' ? styles.activeButton : styles.inactiveButton,
        ]}
        onPress={() => handleToggle('Cm')}
      >
        <Text
          style={[
            styles.toggleText,
            selectedUnit === 'Cm' ? styles.activeText : styles.inactiveText,
          ]}
        >
          Cm
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default UnitToggle;


import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedGestureHandler, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import styles from './style';
import { AnimatedView } from 'react-native-reanimated/lib/typescript/component/View';

interface CardProps {
  name: string;
  age: number;
  pronouns: string;
  photoSource: string; // Use any for the image source
  currentPhotoIndex: number;
  totalPhotos: number;
}

const ProfileCard: React.FC<CardProps> = ({ name, age, pronouns, photoSource}) => {

    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    const totalPhotos = photoSource.length;
    const translateX = useSharedValue(0);
  
    const panGestureHandler = useAnimatedGestureHandler({
      onActive: (event) => {
        translateX.value = event.translationX;
      },
      onEnd: ({ translationX, velocityX }) => {
        const shouldSwitchPhoto = Math.abs(translationX) > Dimensions.get('window').width / 3;
        if (shouldSwitchPhoto) {
          if (velocityX > 0) {
            setCurrentPhotoIndex((currentPhotoIndex - 1 + totalPhotos) % totalPhotos);
          } else {
            setCurrentPhotoIndex((currentPhotoIndex + 1) % totalPhotos);
          }
        }
        translateX.value = withSpring(0);
      },
    });
  
    const rStyle = useAnimatedStyle(() => {
      return {
        transform: [{ translateX: translateX.value }],
      };
    });

  return (
    <PanGestureHandler onGestureEvent={panGestureHandler} onHandlerStateChange={panGestureHandler}>
      <Animated.View style={[styles.container, rStyle]}>
    <View style={styles.container}>
     <Image source ={photoSource[currentPhotoIndex]} style={styles.image} />
      <View style={styles.overlay}>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}, {age}</Text>
          <Text style={styles.pronouns}>{pronouns}</Text>
        </View>
        <View style={styles.photoIndicatorContainer}>
          {Array.from({ length: totalPhotos }, (_, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.photoIndicator, index === currentPhotoIndex && styles.photoIndicatorActive]}
              onPress={() => setCurrentPhotoIndex(index)}
            />
          ))}
        </View>
      </View>
    </View>
    </Animated.View>
    </PanGestureHandler>
  );
};

export default ProfileCard;


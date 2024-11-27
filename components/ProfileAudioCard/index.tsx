import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Animated, Image } from "react-native";
import { Audio } from "expo-av";
import styles from "./style";
import PauseIcon from "@/assets/images/Pause.png";
import PlayIcon from "@/assets/images/Play.png";

type AudioCardProps = {
  audioSource: any; // Source for the audio file
  caption: string; // Caption text at the bottom
};

const AudioCard: React.FC<AudioCardProps> = ({ audioSource, caption }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [waveformAnimations] = useState(
    Array.from({ length: 6 }, () => new Animated.Value(1))
  );

  // Function to handle play/pause
  const handlePlayPause = async () => {
    if (sound) {
      // If sound already exists
      const status = await sound.getStatusAsync();
      if (status.isLoaded) {
        if (status.isPlaying) {
          // Pause the audio
          await sound.pauseAsync();
          setIsPlaying(false);
          stopWaveformAnimation();
        } else if (status.didJustFinish || status.positionMillis >= status.durationMillis) {
          // If the audio has finished, reset and play from the beginning
          await sound.setPositionAsync(0);
          await sound.playAsync();
          setIsPlaying(true);
          startWaveformAnimation();
        } else {
          // Otherwise, resume playing
          await sound.playAsync();
          setIsPlaying(true);
          startWaveformAnimation();
        }
      }
    } else {
      // Create a new sound object
      const { sound: newSound } = await Audio.Sound.createAsync(audioSource);
      setSound(newSound);
      setIsPlaying(true);
      await newSound.playAsync();
      startWaveformAnimation();

      // Listen for the end of the audio playback
      newSound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded && status.didJustFinish) {
          setIsPlaying(false);
          stopWaveformAnimation();
          if (newSound) {
            newSound.setPositionAsync(0); // Reset to start position
          }
        }
      });
    }
  };

  // Cleanup the sound object when the component is unmounted
  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  // Function to start waveform animation
  const startWaveformAnimation = () => {
    waveformAnimations.forEach((animation) => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(animation, {
            toValue: Math.random() * 2 + 1, // Random height between 1 and 3
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(animation, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }),
        ])
      ).start();
    });
  };

  // Function to stop waveform animation
  const stopWaveformAnimation = () => {
    waveformAnimations.forEach((animation) => {
      animation.setValue(1); // Reset the animation value
      Animated.timing(animation).stop();
    });
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.waveformContainer}>
        {waveformAnimations.map((animation, index) => (
          <Animated.View
            key={index}
            style={[styles.waveformBar, { transform: [{ scaleY: animation }] }]}
          />
        ))}
      </View>
      {/* Play/Pause Button */}
      <TouchableOpacity style={styles.playPauseButton} onPress={handlePlayPause}>
        <Image
          source={isPlaying ? PauseIcon : PlayIcon}
          style={{ width: 20, height: 20 }}
        />
      </TouchableOpacity>
      {/* Caption */}
      <Text style={styles.captionText}>{caption}</Text>
    </View>
  );
};

export default AudioCard;

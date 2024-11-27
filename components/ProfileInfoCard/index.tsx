import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import styles from "./style";

type ProfileInfoCardProps = {
  profileData: {
    gender: string;
    height: string;
    sexualOrientation: string;
    smoking: string;
    drinking: string;
    relationshipGoal: string;
    religion: string;
    starSign: string;
  };
};

const ProfileInfoCard: React.FC<ProfileInfoCardProps> = ({ profileData }) => {
  const {
    gender,
    height,
    sexualOrientation,
    smoking,
    drinking,
    relationshipGoal,
    religion,
    starSign,
  } = profileData;

  //const STAR_SIGN_IMAGE = STAR_SIGN.find((sign) => sign.name === starSign)?.image;

  return (
    <View style={styles.cardContainer}>
      {/* First Row (Gender, Height, Sexual Orientation) */}
      <View style={styles.row}>
        <View style={styles.item}>
          <Text style={styles.icon}>⚥</Text>
          <Text style={styles.label}>{gender}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.icon}>📏</Text>
          <Text style={styles.label}>{height}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.icon}>🔗</Text>
          <Text style={styles.label}>{sexualOrientation}</Text>
        </View>
      </View>

      {/* Second Row (Drinking) */}
      <View style={styles.row}>
        <View style={styles.itemFull}>
          <Text style={styles.icon}>🍷</Text>
          <Text style={styles.label}>{drinking}</Text>
        </View>
      </View>

      {/* Third Row (Smoking) */}
      <View style={styles.row}>
        <View style={styles.itemFull}>
          <Text style={styles.icon}>🚬</Text>
          <Text style={styles.label}>{smoking}</Text>
        </View>
      </View>

      {/* Fourth Row (Relationship Goal) */}
      <View style={styles.row}>
        <View style={styles.itemFull}>
          <Text style={styles.icon}>💡</Text>
          <Text style={styles.label}>{relationshipGoal}</Text>
        </View>
      </View>

      {/* Fifth Row (Religion) */}
      <View style={styles.row}>
        <View style={styles.item}>
          <Text style={styles.icon}>⛪</Text>
          <Text style={styles.label}>{religion}</Text>
          <View style={styles.item}>
          <Text style={styles.icon}>♐</Text>
          <Text style={styles.label}>{starSign}</Text>
        </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileInfoCard;

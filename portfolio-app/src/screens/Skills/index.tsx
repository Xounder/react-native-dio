import React, { useRef, useState } from 'react';
import { View, Text, Pressable, Animated } from 'react-native';
import { styles } from './styles';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { Profile } from '../../components/Profile';

const skills = [
  { name: 'React Native', rate: 2 },
  { name: 'React', rate: 3 },
  { name: 'Node.js', rate: 2 },
  { name: 'HTML', rate: 3 },
  { name: 'CSS', rate: 3 },
  { name: 'JavaScript', rate: 3 }
];

export function Skills() {
  const animatedValue = useRef(new Animated.Value(200)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const [isAnimating, setIsAnimating] = useState(false);

  const renderSkills = (skillName: string, rate: number) => {
    return (
      <View style={styles.skillContainer}>
        <Text style={styles.skillText}>{skillName}: </Text>
        <View style={styles.starContainer}>
          {Array(rate)
            .fill(0)
            .map((_, index) => (
              <Ionicons key={index} name="star" size={24} color="yellow" />
            ))}
        </View>
      </View>
    );
  };

  const showSalve = () => {
    setIsAnimating(true);

    animatedValue.setValue(200);
    opacity.setValue(0);

    Animated.parallel([
      Animated.timing(animatedValue, {
        toValue: -1000,
        duration: 3000,
        useNativeDriver: true,
      }),
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 500,
          delay: 1500,
          useNativeDriver: true,
        }),
      ]),
    ]).start(() => {
      setIsAnimating(false);
    });
  };

  return (
    <View style={styles.container}>
      <Profile text="Renan Fellipe" />

      <View style={styles.listSkillContainer}>
        {skills.map((skill) => renderSkills(skill.name, skill.rate))}
      </View>

      <Pressable
        style={[
          styles.button,
          isAnimating && { opacity: 0.5 },
        ]}
        onPress={showSalve}
        disabled={isAnimating}
      >
        <Text style={styles.buttonText}>
          {isAnimating ? 'Salvado!' : 'Salve'}
        </Text>
      </Pressable>

      {/* Texto animado */}
      <Animated.Text
        style={{
          position: 'absolute',
          bottom: 0,
          alignSelf: 'center',
          fontSize: 32,
          fontWeight: 'bold',
          color: 'purple',
          opacity,
          transform: [{ translateY: animatedValue }],
          zIndex: 1,
        }}
      >
        Salve 🚀
      </Animated.Text>

      <StatusBar style="auto" />
    </View>
  );
}

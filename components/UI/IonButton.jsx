import { Ionicons } from "@expo/vector-icons";
import { Pressable, View, StyleSheet } from "react-native";

function IonButton({ icon, color, size, onPress }) {
  return (
    <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
      <View style={styles.buttonContainer}>
        <Ionicons name={icon} color={color} size={size} />
      </View>
    </Pressable>
  );
}

export default IonButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 6,
    padding: 6,
    margin: 8,
  },
  pressed: {
    opacity: 0.75,
  },
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link} from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Clarissa Mae A. Lopez</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{ color: 'blue' }}> Go to Profile</Link>
      <Link href="/task" style={{ color: 'blue' }}> task</Link>
      <Link href="/RecipeList" style={{ color: 'blue' }}> Recipes</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

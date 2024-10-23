import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import { useState } from 'react';
// Câu 01: (CLO3) Tạo màn hình như Screen 01 (3.5 điểm). Chú ý: commit theo ý tạo giao
// diện và logic nghiệp vụ.
// Yêu cầu: Tạo một mảng chứa 5 object {email, password}. Khi người dùng nhập vào email
// và password vào ô tương ứng, sau đó nhấn Continue thì chương trình sẽ tìm trong mảng đã
// tạo sẵn, nếu thông tin đúng theo yêu cầu thì sẽ cho phép người dùng chuyển sang Screen
// 02

const o = [
  { email: 'a@gmail.com', password: 'usera' },
  { email: 'b@gmail.com', password: 'userb' },
  { email: 'c@gmail.com', password: 'userc' },
  { email: 'd@gmail.com', password: 'userd' },
  { email: 'e@gmail.com', password: 'usere' },
];
export default function Screen1({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const goToScreen2 = () => {
    const foundUser = o.find(
      (user) => user.email == email && user.password == password
    );
    if (foundUser) {
      navigation.navigate('Screen2');
    } else {
      Alert.alert('Error', 'Sai mk hoac email');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>Back</Text>
      <Image style={styles.logo} source={require('../assets/icon.png')} />
      <TextInput
        placeholder="Enter your email address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        secureTextEntry={true}
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
      />

      <Pressable onPress={goToScreen2}>
        <Text style={styles.paragraph}>Continue</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  },
});

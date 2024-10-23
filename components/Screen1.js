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
      <View style={styles.c1}>
        <Text style={styles.paragraph}>Back</Text>
      </View>
      <View style={styles.c2}>
         <Image style={styles.logo} source={require('../assets/icon.png')} />
        <Text style={styles.textH}>Hello Again!</Text>
        <Text style={styles.textL}>Log into your account</Text>
      </View>

      <View style={styles.c2b}>
         <View style={styles.input}>
          <Image style={styles.icon} source={require('../assets/Vector.png')} />
          <TextInput
          style={styles.textInput}
            placeholder="Enter your email address"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={[styles.input, { justifyContent: 'space-between' }]}>
          <View style={{ flexDirection: 'row' }}>
            <Image style={styles.icon} source={require('../assets/lock.png')} />
            <TextInput
              style={styles.textInput}
              secureTextEntry={true}
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <Image style={styles.icon} source={require('../assets/eye.png')} />
        </View>

        <Pressable style={styles.buttonC} onPress={goToScreen2}>
          <Text style={styles.textC}>Continue</Text>
        </Pressable>
      </View>


       <View style={styles.c3}> 
          <View style={styles.i3}>
        <View style={styles.line}/>
         <Text >or</Text>
         <View style={styles.line}/>
      </View>
      <View style={styles.i3}>
        <Image style={styles.icon} source={require('../assets/google.png')} />
        <Image style={styles.icon} source={require('../assets/face.png')} />
        <Image style={styles.icon} source={require('../assets/apple.png')} />
      </View>
       </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  c1: {
    flex: 3,
    alignItems: 'flex-start',
  },
  c2: {
    flex: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  c2b: {
    paddingTop:25,
    flex: 6,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  c3: {
   
    flex:4,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  i3: {
    justifyContent: 'center',
    alignItems:'center',
    flexDirection: 'row',
    width:"70%"
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
  },
  textH: {
    fontSize: 30,
    fontWeight: 700,
  },
  textL: {
    fontSize: 15,
    color: 'gray',
  },
  input: {
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 8,
    height: 30,
    width: '90%',
  },
  icon: {
    marginHorizontal: 5,
  },
  buttonC: {
    width: '90%',
    backgroundColor: 'blue',
    borderRadius: 8,
    height: 30,
    alignItems: 'center',
  },
  textC: {
    color: 'white',
    fontSize: 20,
  },
  textInput:{
    outline:'none',
  }
});

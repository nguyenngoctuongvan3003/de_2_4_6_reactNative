import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  Pressable,
  FlatList,
} from 'react-native';
import { useState } from 'react';

// Câu 02: (CLO3) Tạo màn hình như Screen 02 (6.5 Điểm). Chú ý: commit theo ý a,
// b, c và d.
// Yêu cầu: Tạo một mảng các object có chứa cấu trúc và thông tin cần thiết để thực hiện
// logic nghiệp vụ như sau:
// a. Khi người sử dụng chọn vào Smart Phone trên mục Categories thì List bên dưới
// sẽ hiển thị các sản phẩm thuộc dòng Smart Phone.
// b. Tương tự, nếu người sử dụng chọn vào Ipad hoặc MacBook trên mục Categories
// thì List sẽ hiển thị các sản phẩm thuộc dòng Ipad hoặc MacBook tương ứng.
// Các dòng sản phẩm này đều có Best Sales, Best Matched và Popular.
// c. Mặc định hiển thị sẽ là Best Sales của dòng sản phẩm đã chọn ở trên, khi người
// sử dụng nhấn vào Best Matched hoặc Popular thì các dòng sản phẩm tương ứng
// sẽ hiển thị vào List.
// d. Ban đầu List chỉ hiển thị 4 sản phẩm, nếu người sử dụng nhấn vào nút See all thì
// tất cả các sản phẩm tương ứng sẽ hiển thị ra màn hình.

const product = [
  { id:1, loai: 'smartphone', ten: 'Smartphone1', anh: '../assets/1.png', best:'bestsale' },
  { id:2,loai: 'smartphone', ten: 'Smartphone2', anh: '../assets/2.png', best:'bestsale' },
  { id:3,loai: 'smartphone', ten: 'Smartphone3', anh: '../assets/3.png', best:'bestsale' },
  { id:4,loai: 'smartphone', ten: 'Smartphone4', anh: '../assets/4.png', best:'bestsale' },
  { id:5,loai: 'ipad', ten: 'Ipad', anh: '../assets/ipad.png', best:'popular' },
  { id:6,loai: 'laptop', ten: 'Laptop', anh: '../assets/macbook.png',  best:'popular' },
  { id:7,loai: 'smartphone', ten: 'Smartphone5', anh: '../assets/smart.png', best:'bestsale' },
];
export default function Screen2({ navigation }) {

  const[selectedCategory,setSelectedCategory]=useState('smartphone');
  const[selectedBest,setSelectedBest]=useState('bestsale');
  const [showAll,setShowAll]=useState(false);

  const filteredProduct= product.filter( (p)=> p.loai==selectedCategory && p.best==selectedBest);
  const displayProduct= showAll ? filteredProduct: filteredProduct.slice(0,4);


  

  const renderItem = ({item}) => (
     <Text style={styles.paragraph}>{item.ten}</Text>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cat}>
        <Pressable onPress={()=>setSelectedCategory('smartphone')}>
          <Image style={styles.logo} source={require('../assets/smart.png')} />
        </Pressable>

        <Pressable onPress={()=>setSelectedCategory('ipad')}>
          <Image style={styles.logo} source={require('../assets/ipad.png')} />
        </Pressable>

        <Pressable onPress={()=>setSelectedCategory('laptop')}>
          <Image
            style={styles.logo}
            source={require('../assets/macbook.png')}
          />
        </Pressable>
      </View>

      <Pressable onPress={()=>setShowAll(true)}>
          <Text style={styles.paragraph}>Show all</Text>
        </Pressable>

      <View style={styles.cat}>
        <Pressable onPress={()=>setSelectedBest('bestsale')}>
          <Text style={styles.paragraph}>Best Sales</Text>
        </Pressable>
        <Pressable onPress={()=>setSelectedBest('bestmatch')}>
          <Text style={styles.paragraph}>Best Matched</Text>
        </Pressable>

        <Pressable>
          <Text style={styles.paragraph} onPress={()=>setSelectedBest('popular')}>Popular</Text>
        </Pressable>
      </View>
     
     <FlatList
        data={displayProduct}
        keyExtractor={(item)=> item.id}
        renderItem={renderItem}

     />
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
  cat: {
    flexDirection:'row',
  },
});

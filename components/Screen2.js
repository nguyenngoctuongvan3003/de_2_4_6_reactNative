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
  {
    id: 1,
    loai: 'smartphone',
    ten: 'Smartphone1',
    anh: require('../assets/1.png'),
    best: 'bestsale',
  },
  {
    id: 2,
    loai: 'smartphone',
    ten: 'Smartphone2',
    anh: require('../assets/2.png'),
    best: 'bestsale',
  },
  {
    id: 3,
    loai: 'smartphone',
    ten: 'Smartphone3',
    anh: require('../assets/3.png'),
    best: 'bestsale',
  },
  {
    id: 4,
    loai: 'smartphone',
    ten: 'Smartphone4',
    anh: require('../assets/4.png'),
    best: 'bestsale',
  },
  {
    id: 5,
    loai: 'ipad',
    ten: 'Ipad',
    anh: require('../assets/ipad.png'),
    best: 'popular',
  },
  {
    id: 6,
    loai: 'laptop',
    ten: 'Laptop',
    anh: require('../assets/macbook.png'),
    best: 'popular',
  },
  {
    id: 7,
    loai: 'smartphone',
    ten: 'Smartphone5',
    anh: require('../assets/smart.png'),
    best: 'bestsale',
  },
];
export default function Screen2({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState('smartphone');
  const [selectedBest, setSelectedBest] = useState('bestsale');
  const [showAll, setShowAll] = useState(false);

  const filteredProduct = product.filter(
    (p) => p.loai == selectedCategory && p.best == selectedBest
  );
  const displayProduct = showAll
    ? filteredProduct
    : filteredProduct.slice(0, 4);

  const renderItem = ({ item }) => (
    <View
      style={styles.product}>
      <View style={styles.c1}>
        <Image style={styles.logo} source={item.anh} />
        <View style={{ flexDirection: 'column', marginHorizontal: 10 }}>
          <Text style={[styles.tE, { fontWeight: 'bold' }]}>{item.ten}</Text>
          <Image
            style={styles.icon}
            source={require('../assets/Rating5.png')}
          />
        </View>
      </View>
      <Text style={{ fontWeight: 'bold' }}>888$</Text>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.c1}>
        <Text style={styles.tE}>Electronics</Text>
        <View style={styles.flexDirectionRow}>
          <Text style={styles.tC}>Cart</Text>
          <Text style={styles.tC}>User</Text>
        </View>
      </View>

      <View style={styles.c2}>
        <View style={[styles.input,]}>
          <Image style={styles.icon} source={require('../assets/search.png')} />
          <TextInput style={styles.textInput} placeholder="Search" />
        </View>

        <View style={{}}>
          <View style={[styles.flexDirectionRow, styles.spaceBetween,{flex:1}]}>
            <Text style={styles.tE}>Categories</Text>
            <Pressable onPress={() => setShowAll(true)}>
              <Text style={styles.tC}>See all</Text>
            </Pressable>
          </View>
        </View>

        <View style={[styles.flexDirectionRow, styles.spaceBetween]}>
          <Pressable
            style={[styles.each, { backgroundColor: 'purple' }]}
            onPress={() => setSelectedCategory('smartphone')}>
            <Image
              style={styles.logo}
              source={require('../assets/smart.png')}
            />
          </Pressable>

          <Pressable
            style={[styles.each, { backgroundColor: 'yellow' }]}
            onPress={() => setSelectedCategory('ipad')}>
            <Image style={styles.logo} source={require('../assets/ipad.png')} />
          </Pressable>

          <Pressable
            style={[styles.each, { backgroundColor: 'green' }]}
            onPress={() => setSelectedCategory('laptop')}>
            <Image
              style={styles.logo}
              source={require('../assets/macbook.png')}
            />
          </Pressable>
        </View>

        <View style={[styles.flexDirectionRow, styles.spaceBetween]}>

          <Pressable
            style={styles.best}
            onPress={() => setSelectedBest('bestsale')}>
            <Text>Best Sales</Text>
          </Pressable>
          <Pressable
            style={styles.best}
            onPress={() => setSelectedBest('bestmatch')}>
            <Text style={styles.paragraph}>Best Matched</Text>
          </Pressable>
          <Pressable style={styles.best}>
            <Text
              style={styles.paragraph}
              onPress={() => setSelectedBest('popular')}>
              Popular
            </Text>
          </Pressable>
        </View>

        <FlatList
          data={displayProduct}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />

        <View style={{ alignItems: 'center'}}>
          <Pressable style={styles.button} onPress={() => setShowAll(true)}>
            <Text style={styles.paragraph}>See all</Text>
          </Pressable>
        </View>
        <View style={{}}>
          <Image style={styles.logo} source={require('../assets/banner.png')} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
  },
  each: {
    borderRadius: 5,
    margin: 5,
  },
  c1:{
    flex:1,
     flexDirection: 'row',
     alignItems: 'center',
    justifyContent: 'space-between',
  },
  c2:{
    flex:20,
  },
  flexDirectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'lightgray',
    width: '100%',
    padding: 10,
    borderRadius: 5,
  },
  tE: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingRight: 10,
  },
  tC: {
    paddingRight: 10,
    color: 'gray',
  },
  input: {
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 8,
    height: 30,
    width: '100%',
  },
  textInput: {
    outline: 'none',
  },
  best: {
    borderRadius: 10,
    backgroundColor: 'cyan',
    padding: 6,
  },
  product: {
    borderTopWidth: 1,
     flexDirection: 'row',
     alignItems: 'center',
    justifyContent: 'space-between',
  },
});

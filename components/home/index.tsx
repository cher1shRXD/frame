import { View, Text, TouchableOpacity } from 'react-native'
import { style } from './style'
import { useNavigation } from '@react-navigation/native';
import { photoStore } from '../../store/photoStore';

const HomeScreen = () => {

  const navigation = useNavigation<any>();
  const clearStoredPhoto = photoStore(state=>state.clear);

  const moveToCamera = () => {
    clearStoredPhoto();
    navigation.navigate('CameraScreen');
  }

  return (
    <View style={style.container}>
      <View style={style.WordWrap}>
        <Text style={style.logo}>FRAME</Text>
        <Text style={style.slogan}>내 손 안의 네 컷</Text>
      </View>
      <TouchableOpacity style={style.button} onPress={moveToCamera}>
        <Text style={{ color: "#1b1b1b" }}>시작하기</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen
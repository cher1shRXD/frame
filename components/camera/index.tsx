import React, { useRef, useState } from 'react'
import { View, Text, Alert } from 'react-native'
import { style } from './style'
import {
  CameraType,
  CameraView,
  useCameraPermissions,
} from "expo-camera";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { photoStore } from '../../store/photoStore';


const CameraScreen = () => {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView>(null);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<any>();
  const storedPhotos = photoStore(state=>state.photos);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={{ ...style.container, justifyContent: "space-between",paddingVertical:50 }}>
        <Text style={{...style.title, marginTop:20}}>FRAME</Text>
        <View style={style.detailWrap}>
          <Text style={style.detailTitle}>권한이 필요합니다</Text>
          <Text style={style.detail}>
            사진촬영을 위해서{"\n"}권한이 필요합니다.
          </Text>
        </View>
        <TouchableOpacity style={style.button} onPress={requestPermission}>
          <Text style={{ color: "#1b1b1b" }}>권한주기</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const toggleCameraFacing = () => {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  const takePhoto = async () => {
    if(cameraRef.current?._onCameraReady && !loading) {
      setLoading(true);
      try{
        const photo = await cameraRef.current.takePictureAsync();
        if(photo){
          navigation.navigate('ConfirmPhotoScreen',{photo:photo.uri});
        }
      }catch{
        Alert.alert('에러','문제가 발생했습니다. 나중에 다시 시도해주세요.');
      }
      setLoading(false);
    }
  }

  return (
    <View style={style.container}>
      <Text style={style.title}>FRAME</Text>
      <CameraView style={style.camera} facing={facing} ref={cameraRef}>
        <TouchableOpacity onPress={toggleCameraFacing} style={style.swapButton}>
          <Ionicons name="swap-horizontal-outline" size={28} />
        </TouchableOpacity>
      </CameraView>
      <View style={style.photoIndicatorWrap}>
        <Text style={style.photoIndicator}><Text style={style.nowTaked}>{storedPhotos.length}</Text> / 4</Text>
      </View>
      <View style={style.takeWrap}>
        <View style={style.takeBorder}>
          <TouchableOpacity style={style.take} onPress={takePhoto} disabled={loading}/>
        </View>
      </View>
    </View>
  );
}

export default CameraScreen
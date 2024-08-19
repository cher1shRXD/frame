import React, { useEffect, useState } from 'react'
import { Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import { style } from './style';
import { Asset } from 'expo-asset';
import { useNavigation } from '@react-navigation/native';
import { requestPermissionsAsync, createAlbumAsync, createAssetAsync } from "expo-media-library";
import { photoStore } from '../../store/photoStore';

const ConfirmPhotoScreen = ({route}:any) => {

  const navigation = useNavigation<any>();

  const [photo, setPhoto] = useState("");

  const addPhoto = photoStore(state=>state.addPhoto);
  const photos = photoStore(state=>state.photos);

  useEffect(()=>{
    setPhoto(route.params.photo);
  },[]);

  useEffect(()=>{
    if(photo !== '') {
      Asset.fromModule(route.params.photo).downloadAsync();
    }
  },[photo]);

  const reTake = () => {
    navigation.navigate('CameraScreen');
  }

  const saveToGallery = async () => {
    try {
      const { status } = await requestPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "권한이 필요합니다",
          "사진을 저장하기 위해 권한을 부여해주세요."
        );
        return;
      }

      const asset = await createAssetAsync(photo);
      await createAlbumAsync("Frame", asset, false);
      Alert.alert("저장완료", "사진이 저장되었습니다.");
    } catch (error) {
      Alert.alert("에러", "문제가 발생했습니다. 나중에 다시 시도해주세요.");
    }
  };

  const confirm = () => {
    addPhoto(photo);
    if(photos.length >= 3) {
      navigation.navigate('ResultScreen');
    }else{
      navigation.navigate("CameraScreen");
    }
  }

  return (
    <View style={style.container}>
      <Text style={style.title}>FRAME</Text>
      {photo !== "" && <Image source={{ uri: photo }} style={style.photo} />}
      <View style={style.buttonWrap}>
        <TouchableOpacity
          style={{ ...style.button, backgroundColor: "#ccc", marginRight: 10 }}
          onPress={reTake}
        >
          <Text style={{ fontFamily: "Pretendard-Light", color: "#1b1b1b" }}>
            다시찍기
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...style.button,
            backgroundColor: "#E2BFD9",
            marginLeft: 10,
          }}
          onPress={confirm}
        >
          <Text style={{ color: "#1b1b1b", fontFamily: "Pretendard-Light" }}>
            이 사진 사용
          </Text>
        </TouchableOpacity>
      </View>
      <View style={style.onlyThisWrap}>
        <TouchableOpacity onPress={saveToGallery}>
          <Text style={style.onlyThis}>이 사진만 저장하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ConfirmPhotoScreen
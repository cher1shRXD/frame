import React, { useEffect, useRef } from "react";
import { Alert, BackHandler, Image, Text, View } from "react-native";
import { style } from "./style";
import { photoStore } from "../../store/photoStore";
import { captureRef } from "react-native-view-shot";
import {
  createAlbumAsync,
  createAssetAsync,
  requestPermissionsAsync,
} from "expo-media-library";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const ResultScreen = () => {
  const navigation = useNavigation<any>();

  const photos = photoStore((state) => state.photos);
  const today = new Date();

  const clearStoredPhoto = photoStore((state) => state.clear);

  const viewRef = useRef<View | null>(null);

  useEffect(() => {

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      notSave
    );

    return () => backHandler.remove();
  }, []);

  const save = async () => {
    if (viewRef.current) {
      try {
        const { status } = await requestPermissionsAsync();
        if (status !== "granted") {
          Alert.alert(
            "권한이 필요합니다",
            "사진을 저장하기 위해 권한을 부여해주세요."
          );
          return;
        }

        const uri = await captureRef(viewRef.current, {
          format: "png",
          quality: 1.0,
        });

        const asset = await createAssetAsync(uri);
        await createAlbumAsync("Frame", asset, false);
        Alert.alert("저장완료", "사진이 저장되었습니다.");
        clearStoredPhoto();
        navigation.navigate("HomeScreen");
      } catch {
        Alert.alert("에러", "문제가 발생했습니다. 나중에 다시 시도해주세요.");
        clearStoredPhoto();
      }
    }
  };

  const notSave = () => {
    Alert.alert("다시 찾을 수 없습니다!", "정말 저장하지 않으실 건가요?", [
      {
        text: "Cancel",
        onPress: () => {
          return;
        },
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          clearStoredPhoto();
          navigation.navigate("HomeScreen");
        },
      },
    ]);
    return true;
  }

  return (
    <View style={style.container}>
      <Text style={style.title}>FRAME</Text>
      <View style={style.frameWrap} ref={viewRef}>
        <View style={style.frame}>
          <Image
            source={{ uri: photos[0] }}
            style={{ ...style.image, marginRight: 3 }}
          />
          <Image
            source={{ uri: photos[1] }}
            style={{ ...style.image, marginLeft: 3 }}
          />
          <Image
            source={{ uri: photos[2] }}
            style={{ ...style.image, marginRight: 3 }}
          />
          <Image
            source={{ uri: photos[3] }}
            style={{ ...style.image, marginLeft: 3 }}
          />
          <View style={style.signWrap}>
            <Text style={{ fontFamily: "Sign" }}>
              {today.toLocaleString()} by FRAME
            </Text>
          </View>
        </View>
      </View>
      <View style={style.buttonWrap}>
        <TouchableOpacity style={style.button} onPress={save}>
          <Text style={{ color: "#1b1b1b", fontFamily: "Pretendard-Light" }}>
            저장하기
          </Text>
        </TouchableOpacity>
      </View>
      <View style={style.removeWrap}>
        <TouchableOpacity onPress={notSave}>
          <Text style={style.remove}>저장 안할래요</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResultScreen;

import { StyleSheet } from "react-native";


export const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#1b1b1b",
  },
  title: {
    height: 40,
    width: "100%",
    paddingHorizontal: 10,
    fontSize: 30,
    color: "white",
    fontFamily: "Logo",
    marginTop:70
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    height: "50%",
    aspectRatio: "1/1.2",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 12,
    marginVertical: 30,
  },
  swapButton: {
    padding: 5,
    backgroundColor: "rgba(200,200,200,0.5)",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 10,
  },
  photoIndicatorWrap: {
    width: "100%",
    height: 40,
    paddingHorizontal: 10,
    display: "flex",
    justifyContent: "center",
  },
  photoIndicator: {
    fontSize: 20,
    color: "gray",
    fontFamily: "Pretendard-Light",
  },
  nowTaked: {
    color: "#3FA2F6",
  },
  takeWrap: {
    width: "100%",
    height: 70,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  takeBorder: {
    width: 70,
    height: 70,
    borderWidth: 4,
    padding: 2,
    borderColor: "white",
    borderStyle: "solid",
    borderRadius: 100,
  },
  take: {
    backgroundColor: "white",
    borderRadius: 100,
    width: "100%",
    height: "100%",
  },
  detailWrap: {
    width: "100%",
    height: 200,
    display: "flex",
    alignItems: "center",
  },
  detailTitle: {
    fontSize: 30,
    color: "white",
    fontFamily: "Pretendard-ExtraBold",
  },
  detail: {
    fontSize: 20,
    color: "white",
    fontFamily: "Pretendard-Light",
    textAlign: "center",
    marginTop: 20,
  },
  button: {
    width: 300,
    height: 50,
    backgroundColor: "#E2BFD9",
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
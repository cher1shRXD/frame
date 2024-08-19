import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#1b1b1b",
  },
  title: {
    width: "100%",
    paddingHorizontal: 10,
    height: 40,
    fontSize: 30,
    color: "white",
    fontFamily: "Logo",
    marginTop:70
  },
  photo: {
    aspectRatio: "1/1.2",
    height: "50%",
    marginVertical: 30,
  },
  buttonWrap: {
    width: "100%",
    height: 70,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 140,
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  onlyThisWrap: {
    width: "100%",
    height: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  onlyThis: {
    fontSize: 15,
    color: "gray",
    fontFamily: "Pretendard-Light",
  },
});

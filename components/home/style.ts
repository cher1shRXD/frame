import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1b1b1b",
    paddingVertical: 50,
  },
  button: {
    width: "90%",
    height: 50,
    backgroundColor: "#E2BFD9",
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  WordWrap: {
    width: "100%",
    height: 100,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 100,
  },
  logo: {
    fontSize: 50,
    color: "white",
    fontFamily: "Logo",
  },
  slogan: {
    fontSize: 25,
    color: "white",
    marginTop: 1,
    fontFamily: "Pretendard-Light",
  },
});

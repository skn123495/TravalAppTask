import { COLORS } from "@app/constants";
import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {},
  headerContainer: {
    paddingHorizontal: 15,
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  itemText: {
    color: "#24333A",
    fontSize: 14,
    fontWeight: "bold",
  },
  itemFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  itemContainer: {
    borderWidth: 0.5,
    borderColor: "#828595",
    marginBottom: 12,
    padding: 20,
    borderRadius: 22,
    backgroundColor: "#fff",
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#0D1820",
    marginBottom: 10,
  },
  itemPriceColor: {
    fontSize: 15,
    fontWeight: "bold",
    color: COLORS.primaryColor,
    marginBottom: 10,
  },
  time: {
    fontSize: 13,
    fontWeight: "200",
    color: "#c2c2c",
    marginBottom: 10,
  },
  itemPriceOri: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#828595",
    textDecorationLine: "line-through",
  },
  containerBody: {
    marginTop: 15,
    marginHorizontal: 5,
  },
  icon: {
    marginRight: 10,
  },
  saleoff: {
    position: "absolute",
    backgroundColor: "#FFF0E8",
    color: "#FF702A",
    fontWeight: "bold",
    padding: 6,
    borderRadius: 10,
    paddingHorizontal: 10,
    right: -10,
    top: 10,
  },
  line: {
    borderTopWidth: 1,
    width: "54%",
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    borderTopColor: "#c2c2c2",
  },
  hoverIcon: {
    top: -6,
    color: "#FB7200",
  },
  emptyTxt: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 20,
  },
});

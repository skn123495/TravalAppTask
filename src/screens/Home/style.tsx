import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "white",
  },
  svg: {
    position: "absolute",
    width: Dimensions.get("window").width,
  },
  headerContainer: {
    marginTop: 52,
    padding: 15,
  },
  headerGroupIndicator: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerGroupIndicatorLeft: {
    flexDirection: "row",
  },
  headerGroupIndicatorText: {
    fontWeight: "bold",
    color: "#fff",
    marginHorizontal: 5,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginTop: 35,
    // width: 2,
  },
  groupInputContainer: {
    marginTop: 20,
    padding: 10,
  },
  inputSearchContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    // paddingHorizontal: 10,
    borderRadius: 25,
  },
  inputSearch: {
    padding: 12,
    fontSize: 16,
    fontWeight: "500",
    color: "gray",
    flex: 1,
  },
  buttonSearch: {
    shadowColor: "#222",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    backgroundColor: "#fff",
    padding: 13,
    borderRadius: 30,
    aspectRatio: 1,
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#F88C43",
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  buttonText: {
    fontWeight: "500",
    color: "#fff",
    marginLeft: 10,
  },
  listBtn: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 20,
    justifyContent: "space-evenly",
    width: 300,
  },

  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  flightItem: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  airlineText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  priceText: {
    fontSize: 16,
  },
});

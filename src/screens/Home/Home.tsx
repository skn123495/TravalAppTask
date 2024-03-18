import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";
import axios from "axios";
import { styles } from "./style";
import { COLORS } from "@app/constants";
import SortFlightModal from "./SortFlightModal";
import BackgroundCurve from "@app/assets/BackgroundCurve";
import ListItems from "./ListItems";

interface Flight {
  id: number;
  airline: string;
  price: number;
}

const Home: React.FC = () => {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [filteredFlights, setFilteredFlights] = useState<Flight[]>([]);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [showModal, setShowModal] = useState<boolean>(false);

  const fetchFlights = async () => {
    const url = `https://api.npoint.io/378e02e8e732bb1ac55b`;
    try {
      const response = await axios.get(url);
      setFlights(response.data);
      setFilteredFlights(response.data);
    } catch (error) {
      console.error("Error fetching flights:", error);
    }
  };

  useEffect(() => {
    fetchFlights();
  }, []);

  const filterByAirline = (airline: any) => {
    const filtered = airline
      ? flights.filter((flight) => flight.airline === airline)
      : flights;
    setFilteredFlights(filtered);
    setShowModal(false);
  };
  console.log("");

  const sortByPrice = () => {
    const sortedFlights = [...filteredFlights].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setFilteredFlights(sortedFlights);
  };
  console.log("filteredFlights", filteredFlights);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <BackgroundCurve style={styles.svg} />
        <View style={styles.scrollView}>
          <View style={styles.headerContainer}>
            <View style={styles.headerGroupIndicator}>
              <View style={styles.headerGroupIndicatorLeft}>
                <Feather name="map-pin" color={COLORS.WHITE} size={16} />
                <Text style={styles.headerGroupIndicatorText}>
                  Boston (BOS)
                </Text>
                <Feather name="chevron-down" color={COLORS.WHITE} size={16} />
              </View>
              <View>
                <Feather name="settings" color={COLORS.WHITE} size={16} />
              </View>
            </View>
            <Text
              style={styles.heading}
            >{`Where would \nyou want to go?`}</Text>
            <View style={styles.groupInputContainer}>
              <View style={styles.inputSearchContainer}>
                <TextInput
                  style={styles.inputSearch}
                  value="Search flights"
                  editable={false} selectTextOnFocus={false}
                />
                <TouchableOpacity style={styles.buttonSearch}>
                  <Feather name="search" color="gray" size={16} />
                </TouchableOpacity>
              </View>
              <View style={styles.listBtn}>
                <TouchableOpacity style={styles.button} onPress={sortByPrice}>
                  <Octicons
                    name={sortOrder === "asc" ? "sort-asc" : "sort-desc"}
                    color={COLORS.WHITE}
                    size={16}
                  />
                  <Text style={styles.buttonText}>Sort Price</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => setShowModal(!showModal)}
                >
                  <Ionicons name="airplane" color={COLORS.WHITE} size={16} />
                  <Text style={styles.buttonText}>Sort Flights</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <ListItems flights={filteredFlights} />
        </View>
      </View>
      {showModal && (
        <SortFlightModal
          setIsModalVisible={() => setShowModal(!showModal)}
          flights={flights}
          onAirlinePress={(val: any) => filterByAirline(val)}
        />
      )}
    </>
  );
};
export default Home;

import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import CustomModal from "@app/components/customModal";
import { COLORS } from "@app/constants";

interface Flight {
  id: number;
  airline: string;
}

interface SortFlightModalProps {
  flights: Flight[];
  onAirlinePress: (airline: string) => void;
  setIsModalVisible: () => void;
}

const styles = StyleSheet.create({
  itemContainer: {
    marginHorizontal: 10,
    borderWidth: 0.5,
    marginBottom: 5,
    borderRadius: 4,
    padding: 5,
    borderColor: COLORS.BDBDBD,
  },
  txt: { color: COLORS.primaryColor, fontSize: 12.5 },
});

const SortFlightModal: React.FC<SortFlightModalProps> = ({
  flights = [],
  onAirlinePress = () => {},
  setIsModalVisible,
}) => {
  const renderItem = (item: any) => (
    <TouchableOpacity
      key={item.id}
      style={styles.itemContainer}
      onPress={() => onAirlinePress(item.airline)}
    >
      <Text style={styles.txt}>{item.airline}</Text>
    </TouchableOpacity>
  );

  return (
    <CustomModal setIsModalVisible={setIsModalVisible}>
      {flights.map((item) => {
        return renderItem(item);
      })}
    </CustomModal>
  );
};

export default SortFlightModal;

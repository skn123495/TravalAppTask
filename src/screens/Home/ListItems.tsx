import React from "react";
import { FlatList, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import moment from "moment-timezone";
import { styles } from "./ListStyle";

interface Flight {
  id: number;
  airline: string;
  price: number;
}

interface ItemViewProps {
  item: Flight;
}

interface ListItemsProps {
  flights: Flight[];
}

const ListItems: React.FC<ListItemsProps> = ({ flights }) => {
  const listEmptyComponent = () => {
    return <Text style={styles.emptyTxt}>No Data Found</Text>;
  };
  const ItemView: React.FC<ItemViewProps> = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={styles.itemPrice}>Delhi</Text>
            <Text style={styles.time}>
              {moment("2024-03-15T11:00:00").format("h:mm a")}
            </Text>
          </View>
          <View style={styles.line}>
            <Ionicons name="airplane" style={styles.hoverIcon} />
          </View>
          <View>
            <Text style={styles.itemPrice}>Mumbai</Text>
            <Text style={styles.time}>
              {moment("2024-03-15T11:00:00").format("h:mm a")}
            </Text>
          </View>
        </View>
        <View style={styles.itemFooter}>
          <Text style={styles.itemText}>
            <Ionicons name="calendar" style={styles.icon} />
            {"  "}
            {moment("2024-03-15T11:00:00").format("MMM Do")}
          </Text>
          <Text style={styles.itemText}>
            <Ionicons name="airplane" style={styles.icon} />
            {"  "}
            {item.airline}
          </Text>
          <Text style={styles.itemPriceColor}>₹ {item.price} </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerBody}>
        <FlatList
          data={flights}
          renderItem={({ item }) => <ItemView item={item} />}
          keyExtractor={(item) => item.id.toString()}
          ListEmptyComponent={listEmptyComponent}
          contentContainerStyle={{ paddingBottom: 350 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default ListItems;

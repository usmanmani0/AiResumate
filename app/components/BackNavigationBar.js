import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "../config/colors";
import RMText from "../components/RMText";

export default function LandingNavigationBar({
  title,
  subtitle,
  btnLeft,
  btnRight,
  iconLeft,
  iconRight,
}) {
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView>
        <View>
          <View style={styles.container}>
            <TouchableOpacity style={styles.btnStyle} onPress={btnLeft}>
              <Ionicons name={iconLeft} size={28} color="white" />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity style={styles.btnStyle} onPress={btnRight}>
              <Ionicons name={iconRight} size={28} color="white" />
            </TouchableOpacity>
          </View>
          {subtitle && (
            <View>
              <RMText style={styles.subtitle}>{subtitle}</RMText>
            </View>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    backgroundColor: colors.appColor,
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // marginTop: -30,
  },
  title: {
    flex: 1,
    padding: 12,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "400",
    color: colors.white,
  },
  subtitle: {
    paddingHorizontal: "18%",
    paddingBottom: 16,
    fontSize: 14,
    textAlign: "center",
    fontWeight: "400",
    color: colors.white,
  },
  btnStyle: {
    borderRadius: 8,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red",
  },
});
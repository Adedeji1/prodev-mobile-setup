import { Text, View, Dimensions, TouchableOpacity, Image } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { ImageBackground } from "expo-image";
import { StyleSheet } from "react-native";

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//   },
//   companyLogo: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//   },
//   textGroup: {
//     flex: 1,
//     height: "auto",

//   },
//   textLarge: {
//     fontSize: 30,
//     color: "#f44336",
//     fontWeight: "700",
//     fontVariant: ["small-caps"],
//   },
//   textSmall: {
//     fontSize: 15,
//     color: "#2196f3",
//     fontWeight: "400",
//     textAlign: "center",
//   },
//   // smallText: {
//   //   fontSize: 15,
//   //   color: "#2196f3",
//   //   fontWeight: "400",
//   //   textAlign: "center",
//   // },
//   buttonGroup: {
//     width: '100%',
//     gap: 12,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },

//   button: {
//     backgroundColor: '#fff',
//     paddingVertical: 14,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   transparentButton: {
//     backgroundColor: 'transparent',
//     paddingVertical: 14,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#fff',
//     alignItems: 'center',
//   },

//    textBlack: {
//     color: '#000',
//   },
// })


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: Dimensions.get("window").height,
  },
  companyLogo: {
    width: "100%",
    alignItems: "center",
    padding: 20,
    marginBottom: 50,
  },
  textGroup: {
    alignItems: "center",
  },
  textLarge: {
    color: "white",
    fontWeight: "800",
    fontSize: 40,
    textAlign: "center",
    marginBottom: 12,
  },
  textSmall: {
    color: "white",
    fontSize: 18,
    fontWeight: "200",
    textAlign: "center",
  },
  transparentButton: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: "center",
    fontSize: 20,
    flex: 1,
  },
  button: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: "center",
    fontSize: 20,
    backgroundColor: "white",
    flex: 1,
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 20,
    paddingHorizontal: 20,
  },
});

// export default function Index() {
//   return (
//     <SafeAreaProvider>
//       <SafeAreaView>
//         <ImageBackground
//               source={require("@/assets/images/background-image.png")}
//               style={styles.background}
//               resizeMode="cover"
// >
//         <View
//           style={{
//             flex: 1,
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <View style={styles.companyLogo}>
//             <Image source={require("@/assets/images/Logo.png")} />
//           </View>
//           <View style={styles.textGroup}>
//             <Text style={styles.textLarge}>Find your favorite place here</Text>
//             <Text style={styles.textSmall}>The best prices for over 2 </Text>
//             <Text style={styles.textSmall}>million properties worldwide</Text>
//           </View>
//           <View style={styles.buttonGroup}>
//             <TouchableOpacity style={styles.button}>
//               <Text style={{ ...styles.textSmall, color: "black" }}>Join here</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.transparentButton}>
//               <Text style={styles.textSmall}>Sign In</Text>
//             </TouchableOpacity>
//           </View>

//           <View style={{ alignItems: "center", paddingVertical: 20 }}>
//             <Text style={{ color: "white" }}>Continue to home</Text>
//           </View>
//         </View>
//         </ImageBackground>
//       </SafeAreaView>
//     </SafeAreaProvider>
    
//   );
// }

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={require("@/assets/images/background-image.png")}
          style={styles.background}
          resizeMode="cover"
        >
          <View style={styles.container}>
            <View style={styles.companyLogo}>
              <Image source={require("@/assets/images/Logo.png")} />
            </View>

            <View style={styles.textGroup}>
              <Text style={styles.textLarge}>Find your favorite place here</Text>
              <Text style={styles.textSmall}>The best prices for over 2 </Text>
              <Text style={styles.textSmall}>million properties worldwide</Text>
            </View>

            <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
              <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.button}>
                  <Text style={{ ...styles.textSmall, color: "black" }}>Join here</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.transparentButton}>
                  <Text style={styles.textSmall}>Sign In</Text>
                </TouchableOpacity>
              </View>
              <View style={{ alignItems: "center", paddingVertical: 20 }}>
                <Text style={{ color: "white" }}>Continue to home</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

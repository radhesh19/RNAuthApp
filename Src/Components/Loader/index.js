import React from "react";
import { Modal, StyleSheet,  View } from "react-native";
import LottieView from 'lottie-react-native';
import { AppColors } from '../../Theme/Colors';
const loading = require('../../Assets/Lotties/opener-loading.json')

const Loader = (props) => {
    const {isVisible} = props;
  return (
    <View style={styles.centeredView}>
      <Modal
        visible={isVisible}
      >
        <View style={styles.centeredView}>
        <LottieView
              autoPlay
              source={loading}
            />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:AppColors.appBackgriund
  },
  loadingImg: {

  }
});

export default Loader;
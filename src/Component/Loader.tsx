import React, {useEffect, useState} from 'react';
import {View, Modal, ActivityIndicator, StyleSheet} from 'react-native';
import {Colors} from '../Theme';

interface LoaderProps {
  isLoading: boolean;
}

export default function Loader({isLoading}: LoaderProps) {
  const [loader, setLoader] = useState<boolean>(isLoading);

  useEffect(() => {
    setLoader(isLoading);
  }, [isLoading]);

  return (
    <Modal visible={loader} transparent>
      <View style={styles.container}>
        <ActivityIndicator
          size="large"
          style={styles.indicator}
          color={Colors.defaults.DARK_BLUE}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    alignSelf: 'center',
  },
});

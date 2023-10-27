import { RootState, updateCounter } from '@m-repo/store';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export const CounterComponent = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(
    (state: RootState) => state.counterReducer.counterValue
  );

  const renderButton = (operation: '+' | '-') => {
    return (
      <TouchableOpacity
        style={styles.btnBg}
        onPress={() => {
          dispatch(
            updateCounter(
              operation === '+' ? counterValue + 1 : counterValue - 1
            )
          );
        }}
      >
        <Text style={styles.btnTxt}>{operation}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <SafeAreaView />
      <View style={styles.container}>
        {renderButton('-')}
        <Text style={styles.counterTxt}>{counterValue}</Text>
        {renderButton('+')}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 40,
  },
  btnBg: {
    backgroundColor: '#FE9505',
    height: 76,
    width: 76,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 38,
  },
  btnTxt: {
    fontSize: 32,
    fontWeight: '600',
    color: 'white',
  },
  counterTxt: {
    fontSize: 32,
  },
});

export default CounterComponent;

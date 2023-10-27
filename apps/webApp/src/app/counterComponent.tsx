import { RootState, updateCounter } from '@m-repo/store';
import { useSelector, useDispatch } from 'react-redux';

const CounterComponent = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(
    (state: RootState) => state.counterReducer.counterValue
  );

  const renderButton = (operation: '+' | '-') => {
    return (
      <button
        style={styles.btnBg}
        onClick={() => {
          dispatch(
            updateCounter(
              operation === '+' ? counterValue + 1 : counterValue - 1
            )
          );
        }}
      >
        <span style={styles.btnTxt}>{operation}</span>
      </button>
    );
  };

  return (
    <div style={styles.container}>
      {renderButton('-')}
      <span style={styles.counterTxt}>{counterValue}</span>
      {renderButton('+')}
    </div>
  );
};

export default CounterComponent;

const styles = {
  btnBg: {
    backgroundColor: '#FE9505',
    width: 76,
    height: 76,
    borderRadius: 38,
    borderWidth: 0,
  },
  counterTxt: {
    fontSize: '32px',
  },
  btnTxt: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: 'white',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
};

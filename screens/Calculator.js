import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const Calculator = () => {
  const [resultText, setResultText] = useState('');
  const [operations, setOperations] = useState(['DEL', '+', '-', '*', '/']);
  const [calculationText, setCalculationText] = useState('');

  const Operate = (operations) => {
    switch (operations) {
      case 'DEL':
        const text = resultText.split('');
        text.pop();
        setResultText(text.join(''));
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        const lastChar = resultText.split('').pop();

        if (operations.indexOf(lastChar) > 0) {
          return;
        }

        if (text == '') {
          return;
        }
        setResultText(resultText + operations);
      default:
        return 0;
    }
  };

  const calculateResult = () => {
    const text = resultText;
    console.log(text);
    setCalculationText(eval(text));

    // BOOMAS
    // Brackets -> of -> div -> mult -> add -> sub

    // PEMDAS
    // Parentheses -> exponent -> mult -> div -> add -> sub

    // now parse this text ex - 3*6^5/2+7 --> ['3', '*'. '6', '^', '5', '/', '2', '+', '7']
  };

  const validate = () => {
    const text = resultText;
    switch (text.slice(-1)) {
      case '+':
      case '-':
      case '*':
      case '/':
        return false;
    }
    return true;
  };

  const buttonPressed = (text) => {
    console.log(text);

    if (text == '=') {
      return validate() && calculateResult(resultText);
    }

    setResultText(resultText + text);
  };

  let rows = [];
  let nums = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['.', 0, '='],
  ];
  for (let i = 0; i < 4; i++) {
    let row = [];
    for (let j = 0; j < 3; j++) {
      row.push(
        <TouchableOpacity
          onPress={() => buttonPressed(nums[i][j])}
          style={styles.btn}>
          <Text style={styles.btntext}>{nums[i][j]}</Text>
        </TouchableOpacity>,
      );
    }
    rows.push(<View style={styles.row}>{row}</View>);
  }

  let ops = [];
  for (let i = 0; i < 5; i++) {
    ops.push(
      <TouchableOpacity
        style={styles.btn}
        onPress={() => Operate(operations[i])}>
        <Text style={[styles.btntext, styles.white]}>{operations[i]}</Text>
      </TouchableOpacity>,
    );
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>{resultText}</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>{calculationText}</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>{rows}</View>
          <View style={styles.operations}>{ops}</View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultText: {
    fontSize: 60,
    color: 'black',
    marginRight: 10,
  },
  btn: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btntext: {
    fontSize: 30,
    color: 'white',
  },
  white: {
    color: 'white',
  },
  calculationText: {
    fontSize: 50,
    color: 'gray',
    marginRight: 10,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  result: {
    flex: 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  calculation: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  buttons: {
    flex: 7,
    flexDirection: 'row',
    maxHeight: 500,
  },
  numbers: {
    flex: 3,
    backgroundColor: '#434343',
  },
  operations: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: '#636363',
  },
});

export default Calculator;

// 51:25

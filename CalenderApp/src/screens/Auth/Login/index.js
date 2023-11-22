import {Image, StyleSheet, Text, View} from 'react-native';
import {useState} from 'react';
import {TextInput, Icon, MD3Colors, Button} from 'react-native-paper';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');

  const handleSendOtp = () => {
    // Add logic to send OTP
    console.log('Sending OTP...');
  };

  const handleLogin = () => {
    // Add logic for login
    console.log('Logging in...');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/img/calenderLogin.jpg')}
        style={styles.image}
      />
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Icon source="near-me" style={styles.iconButton} size={20} />
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            placeholder="Mobile No"
            value={phoneNumber}
            onChangeText={text => setPhoneNumber(text)}
          />
          <View style={styles.verticalLine} />
          <Button mode="text" onPress={() => handleSendOtp()}>
            Send OTP
          </Button>
        </View>
        <View style={styles.inputContainer}>
          <Icon
            source="key"
            style={styles.iconButton}
            color={MD3Colors.error50}
            size={20}
          />
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            placeholder="Enter OTP"
            value={otp}
            onChangeText={text => setOtp(text)}
          />
        </View>
      </View>
      <Button
        style={styles.loginButton}
        mode="contained"
        buttonColor="blue"
        onPress={() => handleLogin()}>
        Login
      </Button>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 400,
  },
  formContainer: {
    marginHorizontal: 40,
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconButton: {
    marginRight: 10,
  },
  input: {
    flex: 1,
  },
  verticalLine: {
    height: 50,
    width: 1,
    backgroundColor: '#A9A9A9',
  },
  loginButton: {
    width: '70%',
    alignSelf: 'center',
    marginTop: 20,
  },
});

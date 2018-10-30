import React from 'react';
import { StyleSheet, 
  Text, 
  View,
  Button,
  TextInput,
  ScrollView
} from 'react-native';

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      userInput: '',
      finalSearch: null,
    }
  }
  handleSubmit = (event) => {
    this.setState({finalSearch: event})
    this.setState({userInput: event})
    console.log('submit', this.state)
  }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.container}>
            <Text style={styles.textH}>HalloMovies</Text>
            <TextInput
                style={styles.searchbar}
                placeholder="Your Film..."
                value={this.state.userInput}
            />
            <Button title="Go !" onPress={() => this.handleSubmit(this.state.userInput)} />
          </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  searchbar: {
    padding: 20,
    //backgroundColor: '#3399FF',
    width: 300,
    textAlign: "center",
  },
	contentContainer: {
    flex: 1,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textH: {
    fontSize: 40,
    fontWeight: 'bold',
  }
});

import React, { Component } from 'react';
import { Text, StyleSheet, View, Dimensions } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Footer, FooterTab, Button, Icon, Image } from 'native-base';

import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Kargo from './src/Kargo'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      screenWidth: Math.round(Dimensions.get('window').width),
      screenHeight: Math.round(Dimensions.get('window').height),
      successSearch: false

    }
  }

  getTheKargoInformation=()=> {
    this.setState({  successSearch: true });
  }

  render() {

    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Kargo Takip Numarası</Label>
              <Input />
            </Item>
            <View style={{
              marginTop: 12,
              alignItems: 'center',
              justifyContent: 'center',

            }}>
              <Button onPress={this.getTheKargoInformation} success style={{
                width: this.state.screenWidth * 0.8, alignItems: 'center',
                justifyContent: 'center',
              }} ><Text> KARGO BUL {this.state.successSearch} </Text></Button>
            </View>
          </Form>


          {this.state.successSearch === true ?
            <View style={styles.container}>
              <Text style={styles.h2Title}>Kargo Takip Bilgileriniz</Text>
              <Kargo style={{ marginTop: 20 }}></Kargo>
            </View>
            : null
          }


          <View
            style={{
              marginTop: 20,
              borderBottomColor: 'black',
              borderBottomWidth: 0.2,
            }}
          />
          <View style={styles.container}>
            <Content >
              <Text style={styles.h2Title}>Beklediğim Kargolar</Text>
              <Kargo style={{ marginTop: 20 }} company='surat'></Kargo>
              <View
                style={{
                  marginTop: 20,
                  borderBottomColor: 'black',
                  borderBottomWidth: 0.2,
                }}
              />
              <Kargo style={{ marginTop: 20 }} company='surat'></Kargo>
              <View
                style={{
                  marginTop: 20,
                  borderBottomColor: 'black',
                  borderBottomWidth: 0.2,
                }}
              />
              <Kargo style={{ marginTop: 20 }} company='surat'></Kargo>
              <View
                style={{
                  marginTop: 20,
                  borderBottomColor: 'black',
                  borderBottomWidth: 0.2,
                }}
              />
              <Kargo style={{ marginTop: 20 }} company='surat'></Kargo>
            </Content>
          </View>
        </Content>


        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="apps" />
              <Text>Kargo Ekle</Text>
            </Button>

            <Button vertical active>
              <Icon active name="navigate" />
              <Text>Aktifler</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Teslimler</Text>
            </Button>


          </FooterTab>
        </Footer>
      </Container >
    );
  }
}


const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h2Title: {
    fontSize: 22,
    fontWeight: "bold"
  }

});
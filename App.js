import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
} from 'react-native';
import { Provider as PaperProvider, TextInput, IconButton, Chip, Modal } from 'react-native-paper';
import Card from './components/card';
import InputText from './components/inputText';
import InputNumeric from './components/inputNumeric';
import Header from './components/header';


export default function App() {

const [patologias, setPatologias] = useState ([]);
const [aspectos, setAspectos] = useState ([]);
const [inputPatologia, setInputPatologia] = useState('');
const [inputAspecto, setInputAspecto] = useState('');
const [itemSelected, setItemSelected] = useState({});
const [modalVisible, setModalVisible] = useState(false);

const handleChangePatologia = (value) => {
  setInputPatologia(value);
  console.log(inputPatologia);
}

const handleAddPatologia = () => {
  const patologia = {
    value: inputPatologia,
    id: Math.random().toString(),
  };
  setPatologias([
    ...patologias,
    patologia,
  ]);
  setInputPatologia('');
}

const handleAddAspecto = () => {
  const aspecto = {
    value: inputAspecto,
    id: Math.random().toString(),
  };
  setAspectos([
    ...aspectos,
    aspecto,
  ]);
  setInputAspecto('');
}

const handleModal = (id) => {
  console.log(id)
  setItemSelected(patologias.find(item => item.id === id));
  setModalVisible(true);
  console.log(itemSelected.value);
  console.log(itemSelected.id);
}

const handleConfirmDelete =  () => {
  const id = itemSelected.id;
  setPatologias(patologias.filter(item => item.id !== id));
  setModalVisible(false);
  setItemSelected({});
}


  return (
    <PaperProvider>
      <Header title='Perfil' subtitle='Datos de tu michi'/>
     <View>
       <Card>
         <View>
            <Text>Perfil Gatuno</Text>
            <InputText label='Raza' ></InputText>
            <InputNumeric label='Peso (Kgs)' ></InputNumeric>
            <InputText label='Sexo'></InputText>
            <InputNumeric label='Edad (años)' ></InputNumeric>
          </View>
          <View style={styles.content}>
            <View>
              <Text>Patologías</Text>
              <View style={styles.row}>
                <TextInput style={styles.input}
                  label='Agregar patologia'
                  value={inputPatologia}
                  onChangeText={value => handleChangePatologia(value)}
                />
                <IconButton
                    style={{ backgroundColor: '#fe9b96'}}
                    icon="plus"
                    color='#fff'
                    size={20}
                    onPress={() => handleAddPatologia()}
                />
              </View>
              <View>
                <FlatList 
                          data={patologias}
                          renderItem = {data => {
                            return(
                              <View style = {{flexWrap: 'wrap', margin: 5, flexDirection:'row'}}>
                                <Chip icon="delete" onPress={() => handleModal(data.item.id)}> {data.item.value} </Chip>
                              </View>
                            )
                          }} 
                          keyExtractor={item => item.id}
                          />
              </View>
            </View>
            <View>
              <Text>Aspectos físicos y personalidad</Text>
              <View style={styles.row}>
                <InputText label='Agregar nuevo'></InputText>
                <IconButton 
                  style={{ backgroundColor: '#fe9b96'}}
                  icon="plus"
                  color='#fff'
                  size={20}
                 />
              </View>
            </View>
          </View>
          <Modal animationType="slide" visible={modalVisible}>
            <View style={styles.modalContainer}>
              <View style={[styles.modalContent, styles.shadow]}>
                <Text style={styles.modalMessage}>¿Está seguro que desea borrar?</Text>
                <Text style={styles.modalTitle}>{itemSelected.value}</Text>
                <View>
                  <Button color='#fe9b96'
                    onPress={() => handleConfirmDelete()}
                    title="CONFIRMAR"
                  />
                </View>
              </View>
            </View>
          </Modal>
       </Card>
     </View>
    </PaperProvider>
  );
}

  const styles = StyleSheet.create ({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    content: {
      paddingTop: 40,
    },
    list: {
      marginTop: 20,
    },
    row: {
      flexDirection: 'row',
    },
    input: {
      backgroundColor: '#fff',
      minWidth: '60%'
    },
    modalContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      minHeight : '60%',
    },
    modalContent: {
      padding: 30,
      backgroundColor: 'white',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalMessage: {
      fontSize: 18,
    },
    modalTitle: {
      fontSize: 30,
      marginTop: 10,
      marginBottom: 20,
    },
    shadow: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    }
  });

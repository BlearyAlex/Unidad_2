import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Switch,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const AddBook = () => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [selectedCategory, setCategory] = useState('');
  const [read, setRead] = useState(false);
  const [format, setFormat] = useState('Físico');

  const categories = [
    'Drama',
    'Ciencia Ficción',
    'Comedia',
    'Historia',
    'Romance',
    'Otro',
  ];

  const handleSave = () => {};

  const onCategoryChange = itemValue => {
    setCategory(itemValue);
  };

  return (
    <View>
      <Text style={styles.icon}>Autor</Text>
      <TextInput
        style={styles.TextInput}
        value={author}
        onChangeText={setAuthor}
      />

      <Text style={styles.icon}>Título</Text>
      <TextInput value={title} onChangeText={setTitle} />

      <Text style={styles.icon}>Categoría</Text>
      <View style={styles.form}>
        <Picker
          selectedValue={selectedCategory}
          onValueChange={onCategoryChange}>
          {categories.map(category => (
            <Picker.Item key={category} label={category} value={category} />
          ))}
        </Picker>
      </View>

      <Text style={styles.icon}>Estado</Text>
      <View style={styles.TextInput}>
        <Switch value={read} onValueChange={setRead} />

        <Text style={styles.form}>{read ? 'Leído' : 'No leído'}</Text>
      </View>

      <Text style={styles.icon}>Formato</Text>
      <View style={styles.TextInput}>
        <Switch
          value={format === 'Digital'}
          onValueChange={() =>
            setFormat(format === 'Físico' ? 'Digital' : 'Físico')
          }
        />
        <Text style={styles.form}>{format}</Text>
      </View>

      <TouchableOpacity onPress={handleSave}>
        <Text style={styles.icon}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    color: 'purple',
    paddingHorizontal: 50,
  },
  TextInput: {
    height: 40,
    borderColor: 'purple',
    borderEndWidth: 5,
    margin: 5,
  },
  icon: {
    color: 'red',
    fontSize: 30,
    justifyContent: 'center',
    padding: 2,
  },
});
export default AddBook;

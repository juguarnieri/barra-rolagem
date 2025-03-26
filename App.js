import React from 'react';
import { SafeAreaView, FlatList, SectionList, Text, ScrollView, StyleSheet } from 'react-native';

// Dados para a FlatList (lista simples)
const data = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
  { id: '4', title: 'Item 4' },
  { id: '5', title: 'Item 5' },
  { id: '6', title: 'Item 6' },
  { id: '7', title: 'Item 7' },
  { id: '8', title: 'Item 8' },
  { id: '9', title: 'Item 9' },
  { id: '10', title: 'Item 10' },
];

// Dados para a SectionList (lista com seções)
const sectionData = [
  {
    title: 'Fruits A',  
    data: [
      { id: '1', title: 'Apple' },  
      { id: '2', title: 'Avocado' },
    ],
  },
  {
    title: 'Fruits B',  
    data: [
      { id: '3', title: 'Banana' },
      { id: '4', title: 'Blueberry' },
    ],
  },
  {
    title: 'Fruits C',  
    data: [
      { id: '5', title: 'Cherry' },
      { id: '6', title: 'Cantaloupe' },
    ],
  },
];

export default function App() {
  return (
    // SafeAreaView assegura que o conteúdo não seja coberto por elementos como o notch (recorte superior da tela)
    <SafeAreaView style={styles.container}>
    
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>Exemplo de Página Simples</Text>  

        <Text style={styles.subTitle}>FlatList:</Text>
        <FlatList
          data={data}  // Passa os dados para a FlatList
          renderItem={({ item }) => (
            // Renderiza cada item da lista como um texto
            <Text style={styles.item}>Título: {item.title}</Text>
          )}
          keyExtractor={(item) => item.id}  // Usa o 'id' de cada item como chave única
        />

        <Text style={styles.subTitle}>SectionList:</Text>
        <SectionList
          sections={sectionData}  // Passa os dados das seções
          renderItem={({ item }) => (
            <Text style={styles.item}>Título: {item.title}</Text>
          )}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
          keyExtractor={(item) => item.id} 
        />
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1bddf',
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#ff00a8',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#ff00a8',
  },
  item: {
    fontSize: 18,
    padding: 10,
    backgroundColor: '#e19fcb',
    marginVertical: 5,
    borderRadius: 5,
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    backgroundColor: '#ff00a8',
    padding: 10,
    color: 'white',
  },
});
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
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Exemplo de Página Simples</Text>  

      {/* FlatList diretamente na SafeAreaView */}
      <Text style={styles.subTitle}>FlatList:</Text>
      <FlatList
        style={styles.listContainer}
        data={data}  // Passa os dados para a FlatList
        renderItem={({ item }) => (
          <Text style={styles.item}>Título: {item.title}</Text>
        )}
        keyExtractor={(item) => item.id}  // Usa o 'id' de cada item como chave única
      />

      {/* SectionList dentro de uma ScrollView */}
      <Text style={styles.subTitle}>SectionList:</Text>
      <ScrollView style={styles.listContainer}>
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
      <Text style={styles.subTitle}>Rolagem Horizontal:</Text>
      <FlatList
        style={styles.horizontalList}
        data={data} 
        horizontal
        showsHorizontalScrollIndicator={true}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.horizontalItem}>{item.title}</Text>
        )}
      />
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
    marginTop: 30,
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
  listContainer: {
    maxHeight: 200, 
    marginBottom: 20, 
  },
  horizontalList: {
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 10,
    maxHeight: 50, 
  },
  horizontalItem: {
    fontSize: 18,
    padding: 10,
    backgroundColor: '#e19fcb',
    marginHorizontal: 5,
    borderRadius: 5,
    textAlign: 'center', 
  },
});
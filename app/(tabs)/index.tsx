import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';

const directories = [
  {
    id: '1',
    title: 'You',
    icon: '👤',
    color: '#ff3d00',
    messages: [
      'Believe in yourself.',
      'Complete your assignment today.',
      'Stay positive and focused.',
      'Remember your goals.',
    ],
  },
  {
    id: '2',
    title: 'Home',
    icon: '🏠',
    color: '#4fc3f7',
    messages: [
      'Buy groceries.',
      'Clean the living room.',
      'Pay electricity bill.',
      'Family dinner at 7 PM.',
    ],
  },
  {
    id: '3',
    title: 'Love',
    icon: '❤️',
    color: '#2d8cc4',
    messages: [
      'Thinking of you.',
      'Have a wonderful day.',
      'You mean a lot to me.',
      'Take care of yourself.',
    ],
  },
  {
    id: '4',
    title: 'Family',
    icon: '👨‍👩‍👧',
    color: '#6a5acd',
    messages: [
      'Call Grandma.',
      'Birthday celebration this weekend.',
      'Family trip planning.',
      'Check family group updates.',
    ],
  },
  {
    id: '5',
    title: 'Friends',
    icon: '👥',
    color: '#ff4fb3',
    messages: [
      'Movie night on Friday.',
      'Meet at coffee shop.',
      'Happy Friendship Day.',
      'Weekend outing planned.',
    ],
  },
  {
    id: '6',
    title: 'School',
    icon: '🎓',
    color: '#00bcd4',
    messages: [
      'Submit Exercise 3.',
      'Attend Mobile Programming class.',
      'Prepare for final exam.',
      'Review React Native notes.',
    ],
  },
];

export default function HomeScreen() {
  const [selectedDirectory, setSelectedDirectory] = useState(null);
  const [searchText, setSearchText] = useState('');
  const renderDirectory = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => setSelectedDirectory(item)}
    >
      <View style={[styles.circle, { backgroundColor: item.color }]}>
        <Text style={styles.icon}>{item.icon}</Text>
      </View>
      <Text style={[styles.title, { color: item.color }]}>{item.title}</Text>
      <Text style={styles.count}>
        {item.messages.length} stored messages
      </Text>
    </TouchableOpacity>
  );
if (selectedDirectory) {
  const filteredMessages = selectedDirectory.messages.filter((message) =>
    message.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => setSelectedDirectory(null)}
      >
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>

      <View style={[styles.circle, { backgroundColor: selectedDirectory.color, alignSelf: 'center' }]}>
        <Text style={styles.icon}>{selectedDirectory.icon}</Text>
      </View>

      <Text style={styles.header}>{selectedDirectory.title} Messages</Text>
      <Text style={styles.subHeader}>
        Stored messages in this directory
      </Text>

      <TextInput
        style={styles.searchBox}
        placeholder="Search stored messages..."
        value={searchText}
        onChangeText={setSearchText}
      />

      <FlatList
        data={filteredMessages}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.messageList}
        renderItem={({ item, index }) => (
          <View style={styles.messageCard}>
            <Text style={styles.messageNumber}>Message {index + 1}</Text>
            <Text style={styles.messageText}>{item}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Messages Directory</Text>
      <Text style={styles.subHeader}>Select a directory to view stored messages</Text>

      <FlatList
        data={directories}
        renderItem={renderDirectory}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.grid}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7fbff',
    paddingHorizontal: 18,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1c2b39',
    textAlign: 'center',
    marginTop: 55,
  },
  subHeader: {
    fontSize: 15,
    color: '#6b7c8f',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 20,
  },
  grid: {
    paddingBottom: 20,
  },
  card: {
    flex: 1,
    backgroundColor: '#ffffff',
    margin: 10,
    paddingVertical: 24,
    borderRadius: 22,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  circle: {
    width: 92,
    height: 92,
    borderRadius: 46,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },
  icon: {
    fontSize: 34,
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
  },
  count: {
    fontSize: 12,
    color: '#7b8a9a',
    marginTop: 6,
  },
backButton: {
  marginTop: 60,
  marginBottom: 10,
  alignSelf: 'flex-start',
  backgroundColor: '#eaf2ff',
  paddingVertical: 10,
  paddingHorizontal: 16,
  borderRadius: 12,
},
backButtonText: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#2d5fa8',
},
messageList: {
  paddingBottom: 30,
},
messageCard: {
  backgroundColor: '#ffffff',
  padding: 18,
  marginVertical: 8,
  borderRadius: 16,
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowRadius: 6,
  shadowOffset: { width: 0, height: 3 },
  elevation: 3,
},
messageNumber: {
  fontSize: 13,
  fontWeight: 'bold',
  color: '#6b7c8f',
  marginBottom: 6,
},
messageText: {
  fontSize: 17,
  color: '#1c2b39',
  lineHeight: 24,
},
searchBox: {
  backgroundColor: '#ffffff',
  borderRadius: 14,
  paddingHorizontal: 16,
  paddingVertical: 12,
  fontSize: 16,
  marginBottom: 14,
  shadowColor: '#000',
  shadowOpacity: 0.08,
  shadowRadius: 5,
  shadowOffset: { width: 0, height: 2 },
  elevation: 2,
},

});
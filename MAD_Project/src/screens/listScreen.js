import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import axios from "axios";

const API_URL = "https://api.jamendo.com/v3.0/albums"; // Example: Jamendo tracks endpoint
const CLIENT_ID = "e9cf464c"; // Replace with your Jamendo API key

const MusicListScreen = () => {
  const [musicList, setMusicList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMusicData();
  }, []);

  const fetchMusicData = async () => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          client_id: CLIENT_ID, // Pass your API key here
          limit: 10, // You can change the number of items per request
          format: "json", // Request format
        },
      });

      setMusicList(response.data.results); // Adjust according to the actual response
      setLoading(false);
    } catch (error) {
      console.error("Error fetching music data:", error);
      setLoading(false);
    }
  };

  const renderMusicItem = ({ item }) => (
    <View style={styles.card}>
      {/* Image needs to be wrapped in a proper image tag */}
      <Image source={{ uri: item.image }} style={styles.image} /> 
      <View style={styles.cardContent}>
        {/* Text should be wrapped inside a <Text> component */}
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.artist}>{item.artist_name}</Text>
 
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007BFF" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={musicList}
        renderItem={renderMusicItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: "row",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  cardContent: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  artist: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#888",
  },
});

export default MusicListScreen;

import React, { useState, useEffect } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";

const Contact = ({ navigation }) => {
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    const beforeRemoveListener = navigation.addListener(
      "beforeRemove",
      (event) => {
        if (!isDirty) {
          // Jika formulir tidak berubah, tidak perlu menampilkan peringatan
          return;
        }

        event.preventDefault();

        Alert.alert(
          "Konfirmasi",
          "Apakah Anda yakin ingin pergi tanpa menyimpan?",
          [
            { text: "Tetap di Sini", style: "cancel", onPress: () => {} },
            {
              text: "Lanjutkan Pergi",
              style: "destructive",
              onPress: () => navigation.dispatch(event.data.action),
            },
          ]
        );
      }
    );

    return () => {
      navigation.removeListener("beforeRemove", beforeRemoveListener);
    };
  }, [navigation, isDirty]);

  const handleNamaChange = (text) => {
    setNama(text);
    if (text || pesan) {
      setIsDirty(true);
    } else {
      setIsDirty(false);
    }
  };

  const handlePesanChange = (text) => {
    setPesan(text);
    if (text || nama) {
      setIsDirty(true);
    } else {
      setIsDirty(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nama Anda"
        style={styles.textInput}
        value={nama}
        onChangeText={handleNamaChange}
      />
      <TextInput
        placeholder="Pesan"
        style={styles.textInput}
        value={pesan}
        onChangeText={handlePesanChange}
      />
      <View style={styles.buttonContainer}>
        <Button title="Kirim" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
  textInput: {
    height: 60,
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default Contact;

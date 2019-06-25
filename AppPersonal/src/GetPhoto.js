import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob';
import firebase from './Conexao';

window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = RNFetchBlob.polyfill.Blob;

export default class TesteImage extends Component {

    constructor(props) {
        super(props)

        this.state ={
            foto: null
        }

        this.pegarFoto = this.pegarFoto.bind(this)
    }

    pegarFoto() {
        let options =  {
            title : 'Selecione uma opção'
        }

        ImagePicker.showImagePicker(options, (r) => {
            if(r.uri) {
                let foto = {uri: r.uri};
                let state = this.state;
                state.foto = foto;
                this.setState(state);


                // NO AIOS O FILE:// buga
                let uri = r.uri.replace('file://', '');
                let image = firebase.storage().ref().child('images').child('image.jpg');
                let mime = 'image/jpeg';

                RNFetchBlob.fs.readFile(uri, 'base64')
                .then((data) => {
                    return RNFetchBlob.polyfill.Blob.build(data, {type: mime+';BASE64'});
                })
                .then((blob) => {
                    image.put(blob, {contentType: mime})
                    .then(() => {
                        blob.clone();
                        alert('Terminado');

                        // A IMAGEM ESTA AKI
                        let url = image.getDownloadURL();
                    })       
                    .catch((erro) => {
                        alert(erro.code)
                    })
                })
            }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title='Pegar Foto' onPress={this.pegarFoto}/>
                <Image source={this.state.foto} style={styles.foto} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    foto:{
        width:300,
        height: 300
    }
})
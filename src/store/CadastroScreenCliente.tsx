import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

function CadastroScreenCliente(): JSX.Element {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [celular, setCelular] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [cep, setCep] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [pais, setPais] = useState("");
    const [rua, setRua] = useState("");
    const [bairro, setBairro] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");


    function login() {
        const dados = {
            nome: nome,
            cpf: cpf,
            email: email,
            password: password,
            celular: celular,
            dataNascimento: dataNascimento,
            cep: cep,
            cidade: cidade,
            estado: estado,
            pais: pais,
            rua: rua,
            bairro: bairro,
            numero: numero,
            complemento: complemento
        }
        console.log(dados);
    }

    return (
        <View style={styles.container}>
            <Image style={styles.logo} resizeMode="contain"
                source={require('../assets/images/Pandora.jpg')} />

            <View style={styles.card}>

                <Text style={styles.title}>Cadastro Cliente</Text>

                <TextInput style={styles.input} placeholder="Nome:"
                    placeholderTextColor={"#ACA3A9"}
                    onChangeText={(textNome) => setNome(textNome)} />

                <TextInput style={styles.input} placeholder="CPF:"
                    placeholderTextColor={"#ACA3A9"}
                    onChangeText={(textCpf) => setCpf(textCpf)} />


                <TextInput style={styles.input} placeholder="E-mail:"
                    placeholderTextColor={"#ACA3A9"}
                    onChangeText={(textEmail) => setEmail(textEmail)} />


                <TextInput style={styles.input} placeholder="Ceular:"
                    placeholderTextColor={"#ACA3A9"}
                    onChangeText={(textCelular) => setCelular(textCelular)} />


                <TextInput style={styles.input} placeholder="Data de Nacimento:"
                    placeholderTextColor={"#ACA3A9"}
                    onChangeText={(textDataNascimento) => setDataNascimento(textDataNascimento)} />


                <TextInput style={styles.input} placeholder="CEP:"
                    placeholderTextColor={"#ACA3A9"}
                    onChangeText={(textCep) => setCep(textCep)} />


                <TextInput style={styles.input} placeholder="Cidade:"
                    placeholderTextColor={"#ACA3A9"}
                    onChangeText={(textCidade) => setCidade(textCidade)} />


                <TextInput style={styles.input} placeholder="Estado:"
                    placeholderTextColor={"#ACA3A9"}
                    onChangeText={(textEstado) => setEstado(textEstado)} />


                <TextInput style={styles.input} placeholder="País:"
                    placeholderTextColor={"#ACA3A9"}
                    onChangeText={(textPais) => setPais(textPais)} />


                <TextInput style={styles.input} placeholder="Rua:"
                    placeholderTextColor={"#ACA3A9"}
                    onChangeText={(textRua) => setRua(textRua)} />


                <TextInput style={styles.input} placeholder="Bairro:"
                    placeholderTextColor={"#ACA3A9"}
                    onChangeText={(textBairro) => setBairro(textBairro)} />


                <TextInput style={styles.input} placeholder="Número:"
                    placeholderTextColor={"#ACA3A9"}
                    onChangeText={(textDataNascimento) => setNumero(textDataNascimento)} />


                <TextInput style={styles.input} placeholder="Complemento:"
                    placeholderTextColor={"#ACA3A9"}
                    onChangeText={(textComplemento) => setComplemento(textComplemento)} />


                <TextInput style={styles.input} placeholder="Senha:"
                    placeholderTextColor={"#ACA3A9"}
                    onChangeText={(textPassword) => setPassword(textPassword)} secureTextEntry />

                <TouchableOpacity style={styles.button}
                    onPress={() => { login() }}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.forgetPassword}>Esqueceu a senha?</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.forgetPassword}>Já possui uma conta? Acesse aqui!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ACA3A9'
    },

    logo: {
        width: 450,
        height: 350,
        marginBottom: -50,
        marginTop: -150
    },
    card: {
        backgroundColor: '#7C2F3D',
        width: 300,
        borderRadius: 10,
        padding: 20,
        elevation: 3,
        shadowColor: 'rgb(0,0,0,0.3)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 20,
        textAlign: 'center'
    },
    input: {
        backgroundColor: '#D4CCC4',
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#D4CCC4'
    },
    button: {
        backgroundColor: '#5B1824',
        height: 40,
        borderRadius: 8,


    },
    buttonText: {
        color: '#ACA3A9',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 40,

    },
    forgetPassword: {
        color: '#f3eaf9',
        textAlign: 'center',
        marginTop: 10
    }

});
export default CadastroScreenCliente;
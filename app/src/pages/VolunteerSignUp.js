import React from 'react';

import {
    ScreenCenter,
    Button,
    PrimaryTextButton,
} from '../assets/styles';

import {
    CircleButton,
} from '../assets/styles/volunteersignup';

import api from '../../services/api';

import { useNavigation } from '@react-navigation/native';

export default function VolunteerSignUpScreen() {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [bio, setBio] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
    const [profissao, setProfissao] = useState('');
    const [number_registry, setNumberRegistry] = useState('');
    const [phone, setPhone] = useState('');

    async function handleSignUpPress() {
        try {
            const response = await api.post('/volunteer', {
                "name": name,
                "bio": bio,
                "number_registry": number_registry,
                "email": email,
                "password": password,
                "city": city,
                "uf": uf,
                "phone": phone,
            });

            await AsyncStorage.setItem('@AmparaApp:token', response.data.token);

            navigation.navigate('SignIn');
        } catch (_err) {
            this.setState({ error: 'Houve um problema com o cadastro.' });
        }
    }
}

return (
    <ScreenCenter>
        <CircleButton>
        </CircleButton>
        <ViewInputs>
            <Input placeholder="Nome" onChangeText={data => setNome(data)} />
        </ViewInputs>
        <ViewInputs>
            <Input placeholder="Biografia" onChangeText={data => setBiografia(data)} />
        </ViewInputs>
        <ViewInputs>
            <Input placeholder="Profissão" onChangeText={data => setProfissao(data)} />
        </ViewInputs>
        <ViewInputs>
            <Input placeholder="Número de registro profissional" onChangeText={data => setRegistro(data)} />
        </ViewInputs>
        <ViewInputs>
            <Input placeholder="Cidade de atuação" onChangeText={data => setCidade(data)} />
        </ViewInputs>
        <ViewInputs>
            <Input placeholder="Telefone" onChangeText={data => setTelefone(data)} />
        </ViewInputs>
        <ViewInputs>
            <Input placeholder="Email" onChangeText={data => setEmail(data)} />
        </ViewInputs>
        <ViewInputs>
            <Input
                placeholder="Senha"
                onChangeText={data => setPassword(data)}
            />
        </ViewInputs>
        <Button onPress={() => handleSignUpPress()}>
            <TextButton>CADASTRAR</TextButton>
        </Button>
    </ScreenCenter>
);
}
import React, {useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {useStoreActions, useStoreState} from 'easy-peasy';
import {useNavigation} from '@react-navigation/native';
import {ScreenCenter} from '../assets/styles';
import {
    TextTitle,
    Input,
    TextInputIcons,
    InputIcon,
    TextInputView,
    Button,
    TextButton,
    TextError,
    StyledScrollView
} from '../assets/styles/signup';

export default function SignUpEmailScreen() {
    const navigation = useNavigation();
    const {control, handleSubmit, errors, getValues} = useForm();
    const [passwordSecure, setpasswordSecure] = useState(true);
    const [passwordRepeatSecure, setpasswordRepeatSecure] = useState(true);
    const updateUserData = useStoreActions((actions) => actions.updateUserData);

    function onSubmit (data){
        updateUserData({
            email: data.email, 
            password: data.password
        });
        navigation.navigate('SignUpProfile');
    }

    return (
        <ScreenCenter>
            <TextTitle>Cadastro</TextTitle>
            <StyledScrollView>
                <TextInputView>
                    <InputIcon name="email" />
                    <Controller
                        as={Input}
                        control={control}
                        name="email"
                        onChange={(args) => args[0].nativeEvent.text}
                        rules={{required: true}}
                        placeholder="Email*"
                    />
                </TextInputView>
                {errors.email && (
                    <TextError>Esse campo é obrigatório</TextError>
                )}
                <TextInputView>
                    <InputIcon name="key-variant" />
                    <Controller
                        as={<Input secureTextEntry={passwordSecure} />}
                        control={control}
                        name="password"
                        onChange={(args) => args[0].nativeEvent.text}
                        rules={{required: true}}
                        placeholder="Senha*"
                    />
                </TextInputView>
                {errors.password && (
                    <TextError>Esse campo é obrigatório</TextError>
                )}
                <TextInputView>
                    <InputIcon name="key-variant" />
                    <Controller
                        as={<Input secureTextEntry={passwordRepeatSecure} />}
                        control={control}
                        name="password_confirmation"
                        onChange={(args) => args[0].nativeEvent.text}
                        rules={{
                            required: true,
                            validate: (value) => {
                                if (value == getValues()['password']) {
                                    return true;
                                } else {
                                    return 'As senhas não conferem. Tente novamente';
                                }
                            },
                        }}
                        placeholder="Confirmar senha*"
                    />
                </TextInputView>
                {errors.password_confirmation && (
                    <TextError>
                        As senhas não conferem. Tente novamente
                    </TextError>
                )}
            </StyledScrollView>
            <ScreenCenter>
                <Button onPress={handleSubmit(onSubmit)}>
                    <TextButton>CONTINUAR</TextButton>
                </Button>
            </ScreenCenter>
        </ScreenCenter>
    );
}
import styled from 'styled-components/native';

export const MenuButton = styled.TouchableOpacity`
    height: 100px;
    width: 100px;
    padding: 10px;
    border-radius: 20px;
    background: #ffff;
    flex-direction: row;
    justify-content: center;
    shadowColor: rgba(0,0,0,0.4);
    shadowOffset: {
        width: 0,
        height:1,
    };
    shadowOpacity: 0.05;
    elevation: 2;
`;
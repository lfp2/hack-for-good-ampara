import styled from 'styled-components/native';

export const MenuButton = styled.TouchableOpacity`
    height: 100px;
    width: 100px;
    padding: 10px;
    border-radius: 20px;
    background: #ffff;
    justify-content: center;
    align-content: center;
    shadowColor: rgba(0,0,0,0.4);
    shadowOffset: {
        width: 0,
        height:1,
    };
    shadowOpacity: 0.05;
    elevation: 2;
`;

export const RectangleBackground = styled.View`
    position: absolute;
    height: 60%;
    width: 100%;
    background: #76b1e6;
    top: 0;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`

export const MenuIcon = styled.Image`
    height: 40px;
    width: 40px;
    padding: 5px;
    resize-mode: contain;
    align-self: center;
`;

export const MenuText = styled.Text`
    color: #000000;
    font-size: 12px;
    margin: 2px;
    text-align: center;
    font-family: Suprema-Bold;
`;

export const MenuRow = styled.View`
    justify-content: space-around;
    flex-direction: row; 
    margin: 10px;
`;

export const MenuView = styled.View`
    margin: 24px;
    width: 80%;
`;

export const Logo = styled.Image`
    height: 50px;
    margin: 10px;
    resize-mode: contain;
`;

export const HeaderView = styled.View`
    margin: 24px;
    flex: 2;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
`

export const CircleButton = styled.TouchableOpacity`
    height: 100px;
    width: 100px;
    padding: 5px;
    border-radius: 200px;
    background: #79e7e1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const PrimaryText = styled.Text`
    color: #fff;
    font-size: 24px;
    text-align: left;
    font-family: Suprema-SemiBold;
`;
export const SecondaryText = styled.Text`
    color: #fff;
    font-size: 16px;
    text-align: left;
    font-family: Suprema-Light;
`;

export const HeaderTextView = styled.View`
  justify-content: flex-start;
  margin: 10px;
`;

export const HeaderPictureTextView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

export const TextTitle = styled.Text`
  font-family: Suprema-Bold;
  color: #fff;
      font-size: 24px;
      text-align: center;
`;
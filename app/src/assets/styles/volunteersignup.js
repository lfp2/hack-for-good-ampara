import styled from 'styled-components/native';

import { Button } from './index';

export const CircleButton = styled.TouchableOpacity`
    height: 100px;
    width: 100px;
    padding: 5px;
    border-radius: 200px;
    background: #779fe0;
    justifyContent: center;
`;

export const CircleIcon = styled.Image`
    height: 90px;
    width: 90px;
    padding: 5px;
    resize-mode: contain;
`;
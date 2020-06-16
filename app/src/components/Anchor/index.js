import React from 'react';
import {
  Container,
  RightArrow,
  Separator,
  Icon,
  AnchorText,
  Image,
} from './styles';
export { Anchors, Separator } from './styles';

const Anchor = ({
  icon,
  name,
  iconSize = 25,
  children,
  iconPack,
  noSeparator = false,
  noRightArrow = false,
  src,
  ...props
}) => (
  <>
    <Container {...props}>
      {src ? (
        <Image source={src} />
      ) : (
        <Icon
          size={iconSize}
          {...(iconPack ? { as: iconPack } : {})}
          name={icon}
        />
      )}
      <AnchorText>{children}</AnchorText>
      {noRightArrow === false && <RightArrow />}
    </Container>
    {noSeparator === false && <Separator />}
  </>
);

export default Anchor;

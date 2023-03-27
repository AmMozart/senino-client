import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledIcon = styled.img`
  height: 1.2em;
  padding-right: 5px;
`;

interface IconProps {
  name: string;
}

const Icon: React.FC<IconProps> = ({ name }) => {
  const [image, setImage] = useState(undefined);

  useEffect(() => {
    if (name) {
      import('./img/' + name + '.png')
        .then((module) => {
          setImage(module.default);
        })
        .catch((e: Error) => {
          console.log('Error import image: ', e.message);
        });
    }
  }, [name]);

  return image ? <StyledIcon alt={name} src={image} /> : null;
};

export default React.memo(Icon);

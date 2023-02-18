import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledSkyInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  & .icon {
    height: 80%;
    padding: 0;
    margin: 0;
  }

  & .description {
    padding: 0;
    margin: 0;
    font-size: x-large;
  }

  @media (max-width: 576px) {
    flex-direction: row;
    align-items: right;

    & .icon {
      height: 100px;
    }

    & .description {
      display: none;
    }
  }
`;

interface SkyInfoProps {
  sky: string;
}

const SkyInfo: React.FC<SkyInfoProps> = ({ sky }) => {
  const [image, setImage] = useState('');

  const description =
    (sky.match(/^01/) && 'Ясно') ||
    (sky.match(/^02/) && 'Малооблачно') ||
    (sky.match(/^03/) && 'Облачно') ||
    (sky.match(/^04/) && 'Облачно') ||
    (sky.match(/^09/) && 'Дождь') ||
    (sky.match(/^10/) && 'Слабый дождь') ||
    (sky.match(/^11/) && 'Дождь с Грозой') ||
    (sky.match(/^13/) && 'Снег') ||
    'Не определено';

  useEffect(() => {
    import('./img/' + sky + '.png')
      .then((module) => {
        setImage(module.default);
      })
      .catch((e: Error) => {
        console.log('Error import image: ', e.message);
      });
  }, [sky]);

  return (
    <StyledSkyInfo>
      {image && <img className={'icon'} src={image} alt='' />}
      <span className={'description'}>{description}</span>
    </StyledSkyInfo>
  );
};

export default SkyInfo;

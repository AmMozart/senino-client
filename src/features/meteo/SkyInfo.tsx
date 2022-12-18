import React, { useEffect, useState } from 'react';

import style from './SkyInfo.module.css';

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
    <div className={style.info}>
      {image && <img className={style.icon} src={image} alt='' />}
      <span className={style.description}>{description}</span>
    </div>
  );
};

export default SkyInfo;

import React, { useEffect, useState } from 'react';

import style from './Icon.module.css';

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

  return image ? <img className={style.icon} alt={name} src={image} /> : null;
};

export default React.memo(Icon);

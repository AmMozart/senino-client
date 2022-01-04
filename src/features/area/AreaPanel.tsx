import React, { useState } from 'react';
import classNames from 'classnames';

import { useAppSelector } from '../../app/hooks';
import { selectName } from './areaSlice';
import AreaButton from './AreaButton/AreaButton';
import AreaMenu from './AreaMenu';
import AreaName from './AreaName';
import style from './AreaPanel.module.css';

interface AreaPanelProps {
  areas: AreaName[];
}

const AreaPanel: React.FC<AreaPanelProps> = ({areas}) => {
  const currentArea = useAppSelector(selectName);

  const [isShow, setIsShow] = useState(false);

  const tottleButtons = () => setIsShow(!isShow);
  const hideButtons = () => setIsShow(false);

  const btnClass = classNames({
    [style.container]: true,
    [style.show]: isShow,
  });

  const Buttons = areas.map(area => {
    const isActive = currentArea === area;
    return isShow && isActive ? 
      null
      :(
        <div className={btnClass} key={area} onClick={hideButtons}>
          <AreaButton name={area} isActive={isActive} />
        </div>
      );
  });

  return (
    <section className={style.areaPanel}>
      {Buttons}
      <AreaMenu name={currentArea} onClick={tottleButtons}/>
    </section>
  );
};

export default AreaPanel;

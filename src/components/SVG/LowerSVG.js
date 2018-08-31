import React, { Fragment } from 'react';

import { UpDown, UpDownWide } from '../../styles/animations';
import SVG from './SVG';
import { hidden } from '../../styles/utils';
import { colors } from '../../../tailwind';

const HeaderSVG = () => (
  <Fragment>
    <UpDown>
      <SVG icon="box" className={hidden} width={6} fill={colors.blue} left="50%" top="75%" />
      <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="70%" top="20%" />
      <SVG icon="triangle" width={8} stroke={colors['grey-darkest']} left="25%" top="5%" />
      <SVG icon="upDown" className={hidden} width={24} fill={colors.orange} left="80%" top="80%" />
    </UpDown>
    <UpDownWide>
      <SVG icon="arrowUp" className={hidden} width={16} fill={colors.purple} left="5%" top="80%" />
      <SVG icon="triangle" width={12} stroke={colors.white} left="95%" top="50%" />
      <SVG icon="circle" width={6} fill={colors.white} left="85%" top="15%" />
      <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
    </UpDownWide>
    <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
    <SVG icon="circle" width={12} fill={colors['grey-darkest']} left="70%" top="60%" />
    <SVG icon="box" width={6} fill={colors.orange} left="10%" top="10%" />
    <SVG icon="box" width={12} fill={colors['grey-darkest']} left="20%" top="30%" />
    <SVG icon="hexa" width={8} stroke={colors['grey-darkest']} left="80%" top="70%" />
  </Fragment>
);

export default HeaderSVG;

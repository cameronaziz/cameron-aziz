const code = `import React, { Fragment } from 'react';

import { UpDown, UpDownWide } from '../../styles/animations';
import SVG from './SVG';
import { hidden } from '../../styles/utils';
import { colors } from '../../../tailwind';

const HeaderSVG = () => (
  <Fragment>
    <UpDown speed={12} offset={400}>
      <SVG icon="triangle" className={hidden} width={48} stroke={colors.orange} left="10%" top="20%" />
      <SVG icon="hexa" width={48} stroke={colors.red} left="60%" top="70%" />
      <SVG icon="box" width={6} fill={colors['grey-darker']} left="60%" top="15%" />
    </UpDown>
    <UpDownWide>
      <SVG icon="arrowUp" className={hidden} width={16} fill={colors['blue-dark']} left="80%" top="10%" />
      <SVG icon="triangle" width={12} stroke={colors.white} left="90%" top="50%" />
      <SVG icon="circle" width={16} fill={colors['grey-darker']} left="70%" top="90%" />
      <SVG icon="triangle" width={16} stroke={colors['grey-darkest']} left="30%" top="65%" />
      <SVG icon="circle" width={6} fill={colors['grey-darkest']} left="75%" top="10%" />
      <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
    </UpDownWide>
    <SVG icon="circle" className={hidden} width={24} fill={colors['grey-darker']} left="5%" top="70%" />
    <SVG icon="circle" width={6} fill={colors['grey-darkest']} left="4%" top="20%" />
    <SVG icon="circle" width={12} fill={colors['grey-darkest']} left="50%" top="60%" />
    <SVG icon="upDown" width={8} fill={colors['grey-darkest']} left="95%" top="90%" />
    <SVG icon="upDown" className={hidden} width={24} fill={colors['grey-darker']} left="40%" top="80%" />
    <SVG icon="triangle" width={8} stroke={colors['grey-darker']} left="25%" top="5%" />
    <SVG icon="box" className={hidden} width={64} fill={colors.purple} left="5%" top="90%" />
    <SVG icon="box" width={6} fill={colors['grey-darkest']} left="10%" top="10%" />
    <SVG icon="box" width={12} fill={colors['grey-darkest']} left="40%" top="30%" />
    <SVG icon="hexa" width={16} stroke={colors['grey-darker']} left="10%" top="50%" />
    <SVG icon="hexa" width={8} stroke={colors['grey-darker']} left="80%" top="70%" />
  </Fragment>
);

export default HeaderSVG;
`;

const links = [
  {
    line: 3,
    location: [
      'src',
      'components',
      'animations.js',
    ],
  },
  {
    line: 4,
    location: [
      'src',
      'components',
      'SVG',
      'SVG.js',
    ],
  },
  {
    line: 5,
    location: [
      'src',
      'components',
      'utils.js',
    ],
  },
  {
    line: 6,
    location: [
      'src',
      'components',
      'tailwind.js',
    ],
  },
];

const libraries = ['react'];

export default {
  libraries,
  code,
  links,
  name: 'HeaderSVG.js',
  label: 'HeaderSVG.js',
};

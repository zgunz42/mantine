import type { MantineThemeBase, MantineColorVariant, MantineColor } from '../../../types';
import type { CSSObject } from '../../../../tss';
import { getThemeColor, getBaseColor } from '../color/color';

interface VariantOptions {
  hover: boolean;
}

function addHoverStyles(styles: CSSObject, hoverStyles: CSSObject, hasHoverStyles: boolean) {
  if (hasHoverStyles) {
    // eslint-disable-next-line no-param-reassign
    styles['&:hover'] = hoverStyles;
  }

  return styles;
}

export function variant(theme: MantineThemeBase) {
  return (
    _variant: MantineColorVariant,
    color: MantineColor,
    options: VariantOptions = { hover: false }
  ): CSSObject => {
    if (_variant === 'filled') {
      return addHoverStyles(
        {
          backgroundColor: getThemeColor(theme, color, 'base'),
          color: '#fff',
          borderColor: 'transparent',
        },
        { backgroundColor: getThemeColor(theme, color, 'baseHover') },
        options.hover
      );
    }

    if (_variant === 'light') {
      return addHoverStyles(
        {
          backgroundColor: getThemeColor(theme, color, 'subtle'),
          color: getThemeColor(theme, color, 'text'),
          borderColor: 'transparent',
        },
        { backgroundColor: getThemeColor(theme, color, 'subtleHover') },
        options.hover
      );
    }

    if (_variant === 'outline') {
      return addHoverStyles(
        {
          backgroundColor: 'transparent',
          color: getThemeColor(theme, color, 'outline'),
          border: `1px solid ${getThemeColor(theme, color, 'outline')}`,
        },
        { backgroundColor: getThemeColor(theme, color, 'outlineHover') },
        options.hover
      );
    }

    if (_variant === 'default') {
      return addHoverStyles(
        {
          backgroundColor: getBaseColor(theme, 'body'),
          border: `1px solid ${getBaseColor(theme, 'border')}`,
          color: getBaseColor(theme, 'text'),
        },
        { backgroundColor: getBaseColor(theme, 'subtle') },
        options.hover
      );
    }

    return {};
  };
}

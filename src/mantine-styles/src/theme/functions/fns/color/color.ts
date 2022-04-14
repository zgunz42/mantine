import type {
  MantineThemeBase,
  MantineColor,
  MantineColorShape,
  MantineBaseColorShape,
} from '../../../types';

export function getThemeColor(
  theme: MantineThemeBase,
  _color: MantineColor,
  key: keyof MantineColorShape,
  fallback = true
) {
  if (!(_color in theme._colors.groups)) {
    return fallback
      ? theme._colors.groups[theme._colors.primaryColor][theme.colorScheme][key]
      : _color;
  }

  return theme._colors.groups[_color][theme.colorScheme][key];
}

export function getBaseColor(theme: MantineThemeBase, key: keyof MantineBaseColorShape) {
  return theme._colors.base[theme.colorScheme][key];
}

export function color(theme: MantineThemeBase) {
  return (_color: MantineColor, key: keyof MantineColorShape, fallback = true) =>
    getThemeColor(theme, _color, key, fallback);
}

export function baseColor(theme: MantineThemeBase) {
  return (key: keyof MantineBaseColorShape) => getBaseColor(theme, key);
}

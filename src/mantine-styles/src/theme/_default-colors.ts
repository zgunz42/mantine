type MantineColor = 'blue' | (string & {});

interface MantineBaseColorShape {
  /** Base text color, added to body element, default color is very dark gray */
  text: string;

  /** Secondary text color: descriptions, placeholders, default color is gray */
  textDimmed: string;

  /** Bright text color: hover effects, default color is black */
  textBright: string;

  /** Body background color, also used for overlays – Popover, Modal, Drawer, etc., default color is white */
  body: string;

  /** Background color for hover effects and secondary background, e.g. Tabs control hover, Accordion active item, by default it is a very light gray color */
  subtle: string;

  /** Background of some components, e.g. Progress, Input filled variant, Switch, etc., defaults to light gray color */
  fill: string;

  /** Border color of inputs and other elements, defaults to gray */
  border: string;
}

interface MantineColorShape {
  /** Text color */
  text: string;

  /** Border and text color for components with outline variant */
  outline: string;

  /** Hover background of outline variant */
  outlineHover: string;

  /** Used in most cases */
  base: string;

  /** Background color when element is hovered */
  baseHover: string;

  /** Very light color used as background for light and subtle variants */
  subtle: string;

  /** Hover of subtle variant */
  subtleHover: string;

  /** Focus ring color, inputs border color */
  focus: string;
}

interface MantineBaseColors {
  light: MantineBaseColorShape;
  dark: MantineBaseColorShape;
}

type MantineColorsGroups = Record<
  'blue' | (string & {}),
  { light: MantineColorShape; dark: MantineColorShape }
>;

export const DEFAULT_BASE_COLORS: MantineBaseColors = {
  light: {
    body: '#FFFFFF',
    text: '#343A40',
    textDimmed: '#868E96',
    textBright: '#000000',
    fill: '#E9ECEF',
    subtle: '#F8F9FA',
    border: '#CED4DA',
  },

  dark: {
    body: '#FFFFFF',
    text: '#343A40',
    textDimmed: '#868E96',
    textBright: '#000000',
    fill: '#E9ECEF',
    subtle: '#F8F9FA',
    border: '#CED4DA',
  },
};

export const DEFAULT_COLORS: MantineColorsGroups = {
  blue: {
    light: {
      text: '#1C7ED6',
      outline: '#1C7ED6',
      base: '#228BE6',
      baseHover: '#1C7ED6',
      subtle: '#E7F5FF',
      subtleHover: 'rgba(208, 235, 255, 0.65)',
      outlineHover: 'rgba(231, 245, 255, 0.35)',
      focus: '#4DABF7',
    },

    dark: {
      text: '#87c6f9',
      outline: '#47a5ef',
      base: '#147CD6',
      baseHover: '#1782DF',
      subtleHover: 'rgba(0, 85, 164, 0.45)',
      outlineHover: 'rgba(0, 85, 164, 0.15)',
      subtle: 'rgba(0, 85, 164, 0.35)',
      focus: '#4DABF7',
    },
  },
};

export interface MantineColors {
  primaryColor: MantineColor;
  base: MantineBaseColors;
  groups: MantineColorsGroups;
}

export const COLORS: MantineColors = {
  primaryColor: 'blue',
  base: DEFAULT_BASE_COLORS,
  groups: DEFAULT_COLORS,
};

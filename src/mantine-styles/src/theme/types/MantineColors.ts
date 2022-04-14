export type MantineColor = 'blue' | (string & {});

export interface MantineBaseColorShape {
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

export interface MantineColorShape {
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

export interface MantineBaseColors {
  light: MantineBaseColorShape;
  dark: MantineBaseColorShape;
}

export type MantineColorsGroups = Record<
  'blue' | (string & {}),
  { light: MantineColorShape; dark: MantineColorShape }
>;

export interface MantineColors {
  primaryColor: MantineColor;
  base: MantineBaseColors;
  groups: MantineColorsGroups;
}

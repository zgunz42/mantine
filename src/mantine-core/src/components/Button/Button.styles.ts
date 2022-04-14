import {
  createStyles,
  MantineSize,
  MantineNumberSize,
  MantineSizes,
  getSharedColorScheme,
  MantineColor,
  MantineTheme,
  CSSObject,
} from '@mantine/styles';
import { INPUT_SIZES } from '../Input';

export type ButtonVariant =
  | 'filled'
  | 'outline'
  | 'light'
  | 'gradient'
  | 'white'
  | 'default'
  | 'subtle';

export interface ButtonStylesParams {
  color: MantineColor;
  size: MantineSize;
  radius: MantineNumberSize;
  fullWidth: boolean;
  compact: boolean;
  gradientFrom: string;
  gradientTo: string;
  gradientDeg: number;
}

const sizes = {
  xs: {
    height: INPUT_SIZES.xs,
    padding: '0 14px',
  },

  sm: {
    height: INPUT_SIZES.sm,
    padding: '0 18px',
  },

  md: {
    height: INPUT_SIZES.md,
    padding: '0 22px',
  },

  lg: {
    height: INPUT_SIZES.lg,
    padding: '0 26px',
  },

  xl: {
    height: INPUT_SIZES.xl,
    padding: '0 32px',
  },

  'compact-xs': {
    height: 22,
    padding: '0 7px',
  },

  'compact-sm': {
    height: 26,
    padding: '0 8px',
  },

  'compact-md': {
    height: 30,
    padding: '0 10px',
  },

  'compact-lg': {
    height: 34,
    padding: '0 12px',
  },

  'compact-xl': {
    height: 40,
    padding: '0 14px',
  },
};

export const heights = Object.keys(sizes).reduce((acc, size) => {
  acc[size] = sizes[size].height;
  return acc;
}, {} as MantineSizes);

const getSizeStyles = ({ compact, size }: { compact: boolean; size: MantineSize }) => {
  if (!compact) {
    return sizes[size];
  }

  return sizes[`compact-${size}`];
};

const getWidthStyles = (fullWidth: boolean) => ({
  display: fullWidth ? 'block' : 'inline-block',
  width: fullWidth ? '100%' : 'auto',
});

function getVariantStyles(theme: MantineTheme, variant: ButtonVariant): CSSObject {
  if (variant === 'filled') {
    return {
      backgroundColor: theme._colors.groups.blue[theme.colorScheme].base,
      color: '#fff',
      borderColor: 'transparent',

      '&:hover': {
        backgroundColor: theme._colors.groups.blue[theme.colorScheme].baseHover,
      },
    };
  }

  if (variant === 'light') {
    return {
      backgroundColor: theme._colors.groups.blue[theme.colorScheme].subtle,
      color: theme._colors.groups.blue[theme.colorScheme].text,
      borderColor: 'transparent',

      '&:hover': {
        backgroundColor: theme._colors.groups.blue[theme.colorScheme].subtleHover,
      },
    };
  }

  if (variant === 'outline') {
    return {
      backgroundColor: 'transparent',
      color: theme._colors.groups.blue[theme.colorScheme].outline,
      border: `1px solid ${theme._colors.groups.blue[theme.colorScheme].outline}`,

      '&:hover': {
        backgroundColor: theme._colors.groups.blue[theme.colorScheme].outlineHover,
      },
    };
  }

  if (variant === 'default') {
    return {
      backgroundColor: theme._colors.base[theme.colorScheme].body,
      border: `1px solid ${theme._colors.base[theme.colorScheme].border}`,
      color: theme._colors.base[theme.colorScheme].text,

      '&:hover': {
        backgroundColor: theme._colors.base[theme.colorScheme].subtle,
      },
    };
  }

  return {};
}

export default createStyles(
  (
    theme,
    {
      color,
      size,
      radius,
      fullWidth,
      compact,
      gradientFrom,
      gradientTo,
      gradientDeg,
    }: ButtonStylesParams,
    getRef
  ) => {
    const gradient = getSharedColorScheme({
      theme,
      color,
      variant: 'gradient',
      gradient: { from: gradientFrom, to: gradientTo, deg: gradientDeg },
    });

    return {
      loading: {
        ref: getRef('loading'),
        pointerEvents: 'none',

        '&::before': {
          content: '""',
          position: 'absolute',
          top: -1,
          left: -1,
          right: -1,
          bottom: -1,
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.fn.rgba(theme.colors.dark[7], 0.5)
              : 'rgba(255, 255, 255, .5)',
          borderRadius: theme.fn.radius(radius),
          cursor: 'not-allowed',
        },
      },

      // outline: getVariantStyles({ variant: 'outline', theme, color }),
      filled: getVariantStyles(theme, 'filled'),
      light: getVariantStyles(theme, 'light'),
      outline: getVariantStyles(theme, 'outline'),
      default: getVariantStyles(theme, 'default'),
      // light: getVariantStyles({ variant: 'light', theme, color }),
      // default: getVariantStyles({ variant: 'default', theme, color }),
      // white: getVariantStyles({ variant: 'white', theme, color }),
      // subtle: getVariantStyles({ variant: 'subtle', theme, color }),

      gradient: {
        border: 0,
        backgroundImage: gradient.background,
        color: gradient.color,

        '&:hover': {
          backgroundSize: '200%',
        },
      },

      root: {
        ...getSizeStyles({ compact, size }),
        ...theme.fn.fontStyles(),
        ...theme.fn.focusStyles(),
        ...getWidthStyles(fullWidth),
        borderRadius: theme.fn.radius(radius),
        fontWeight: 600,
        position: 'relative',
        lineHeight: 1,
        fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
        WebkitTapHighlightColor: 'transparent',
        userSelect: 'none',
        boxSizing: 'border-box',
        textDecoration: 'none',
        cursor: 'pointer',
        appearance: 'none',
        WebkitAppearance: 'none',

        '&:not(:disabled):active': {
          transform: 'translateY(1px)',
        },

        [`&:not(.${getRef('loading')}):disabled`]: {
          borderColor: 'transparent',
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
          color: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[5],
          cursor: 'not-allowed',
        },
      },

      icon: {
        display: 'flex',
        alignItems: 'center',
      },

      leftIcon: {
        marginRight: 10,
      },

      rightIcon: {
        marginLeft: 10,
      },

      inner: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        overflow: 'visible',
      },

      label: {
        whiteSpace: 'nowrap',
        height: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      },
    };
  }
);

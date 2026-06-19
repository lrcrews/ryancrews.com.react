export type RGBColor = {
  b: number;
  g: number;
  r: number;
};

export type HSLColor = {
  h: number;
  l: number;
  s: number;
};

export type RGBDraft = {
  b: string;
  g: string;
  r: string;
};

export type HSLDraft = {
  h: string;
  l: string;
  s: string;
};

type NumericRange = {
  max: number;
  min: number;
};

const HEX_COLOR_PATTERN = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i;
const RGB_CHANNEL_RANGE: NumericRange = { max: 255, min: 0 };
const HUE_RANGE: NumericRange = { max: 360, min: 0 };
const PERCENT_RANGE: NumericRange = { max: 100, min: 0 };

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function expandShortHex(value: string) {
  return value.length === 3
    ? value
        .split("")
        .map((char) => `${char}${char}`)
        .join("")
    : value;
}

function decimalToHex(value: number) {
  return value.toString(16).padStart(2, "0").toUpperCase();
}

function parseNumericDraft(
  value: string,
  range: NumericRange,
  requireInteger: boolean,
) {
  if (!value.trim()) {
    return null;
  }

  const parsedValue = Number(value);

  if (!Number.isFinite(parsedValue)) {
    return null;
  }

  if (requireInteger && !Number.isInteger(parsedValue)) {
    return null;
  }

  if (parsedValue < range.min || parsedValue > range.max) {
    return null;
  }

  return parsedValue;
}

export function parseHexColor(value: string): RGBColor | null {
  const trimmedValue = value.trim();
  const match = trimmedValue.match(HEX_COLOR_PATTERN);

  if (!match) {
    return null;
  }

  const normalizedHexValue = expandShortHex(match[1]).toUpperCase();

  return {
    r: Number.parseInt(normalizedHexValue.slice(0, 2), 16),
    g: Number.parseInt(normalizedHexValue.slice(2, 4), 16),
    b: Number.parseInt(normalizedHexValue.slice(4, 6), 16),
  };
}

export function rgbToHex(color: RGBColor) {
  return `#${decimalToHex(color.r)}${decimalToHex(color.g)}${decimalToHex(
    color.b,
  )}`;
}

export function rgbToHsl(color: RGBColor): HSLColor {
  const red = color.r / 255;
  const green = color.g / 255;
  const blue = color.b / 255;
  const maxChannel = Math.max(red, green, blue);
  const minChannel = Math.min(red, green, blue);
  const chroma = maxChannel - minChannel;
  const lightness = (maxChannel + minChannel) / 2;

  if (chroma === 0) {
    return {
      h: 0,
      s: 0,
      l: Math.round(lightness * 100),
    };
  }

  const saturation = chroma / (1 - Math.abs(2 * lightness - 1));

  let hue = 0;

  switch (maxChannel) {
    case red:
      hue = ((green - blue) / chroma) % 6;
      break;
    case green:
      hue = (blue - red) / chroma + 2;
      break;
    default:
      hue = (red - green) / chroma + 4;
      break;
  }

  return {
    h: Math.round((hue * 60 + 360) % 360),
    s: Math.round(saturation * 100),
    l: Math.round(lightness * 100),
  };
}

export function hslToRgb(color: HSLColor): RGBColor {
  const hue = ((color.h % 360) + 360) % 360;
  const saturation = clamp(color.s, 0, 100) / 100;
  const lightness = clamp(color.l, 0, 100) / 100;
  const chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  const huePrime = hue / 60;
  const intermediate = chroma * (1 - Math.abs((huePrime % 2) - 1));
  const lightnessMatch = lightness - chroma / 2;

  let red = 0;
  let green = 0;
  let blue = 0;

  if (huePrime >= 0 && huePrime < 1) {
    red = chroma;
    green = intermediate;
  } else if (huePrime < 2) {
    red = intermediate;
    green = chroma;
  } else if (huePrime < 3) {
    green = chroma;
    blue = intermediate;
  } else if (huePrime < 4) {
    green = intermediate;
    blue = chroma;
  } else if (huePrime < 5) {
    red = intermediate;
    blue = chroma;
  } else {
    red = chroma;
    blue = intermediate;
  }

  return {
    r: Math.round((red + lightnessMatch) * 255),
    g: Math.round((green + lightnessMatch) * 255),
    b: Math.round((blue + lightnessMatch) * 255),
  };
}

export function parseRgbDraft(draft: RGBDraft): RGBColor | null {
  const red = parseNumericDraft(draft.r, RGB_CHANNEL_RANGE, true);
  const green = parseNumericDraft(draft.g, RGB_CHANNEL_RANGE, true);
  const blue = parseNumericDraft(draft.b, RGB_CHANNEL_RANGE, true);

  if (red === null || green === null || blue === null) {
    return null;
  }

  return { r: red, g: green, b: blue };
}

export function parseHslDraft(draft: HSLDraft): RGBColor | null {
  const hue = parseNumericDraft(draft.h, HUE_RANGE, false);
  const saturation = parseNumericDraft(draft.s, PERCENT_RANGE, false);
  const lightness = parseNumericDraft(draft.l, PERCENT_RANGE, false);

  if (hue === null || saturation === null || lightness === null) {
    return null;
  }

  return hslToRgb({
    h: hue,
    s: saturation,
    l: lightness,
  });
}

export function createColorDrafts(color: RGBColor) {
  const hslColor = rgbToHsl(color);

  return {
    hex: rgbToHex(color),
    rgb: {
      r: String(color.r),
      g: String(color.g),
      b: String(color.b),
    },
    hsl: {
      h: String(hslColor.h),
      s: String(hslColor.s),
      l: String(hslColor.l),
    },
  };
}

export function formatRgbString(color: RGBColor) {
  return `rgb(${color.r}, ${color.g}, ${color.b})`;
}

export function formatRgbChannels(color: RGBColor) {
  return `${color.r}, ${color.g}, ${color.b}`;
}

export function formatHslString(color: HSLColor) {
  return `hsl(${color.h}, ${color.s}%, ${color.l}%)`;
}

export type RGBColor = {
  b: number;
  g: number;
  r: number;
};

export type RGBDraft = {
  b: string;
  g: string;
  r: string;
};

type NumericRange = {
  max: number;
  min: number;
};

const HEX_COLOR_PATTERN = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i;
const RGB_CHANNEL_RANGE: NumericRange = { max: 255, min: 0 };

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

export function parseRgbDraft(draft: RGBDraft): RGBColor | null {
  const red = parseNumericDraft(draft.r, RGB_CHANNEL_RANGE, true);
  const green = parseNumericDraft(draft.g, RGB_CHANNEL_RANGE, true);
  const blue = parseNumericDraft(draft.b, RGB_CHANNEL_RANGE, true);

  if (red === null || green === null || blue === null) {
    return null;
  }

  return { r: red, g: green, b: blue };
}

export function createColorDrafts(color: RGBColor) {
  return {
    hex: rgbToHex(color),
    rgb: {
      r: String(color.r),
      g: String(color.g),
      b: String(color.b),
    },
  };
}

export function formatRgbString(color: RGBColor) {
  return `rgb(${color.r}, ${color.g}, ${color.b})`;
}

export function formatRgbChannels(color: RGBColor) {
  return `${color.r}, ${color.g}, ${color.b}`;
}

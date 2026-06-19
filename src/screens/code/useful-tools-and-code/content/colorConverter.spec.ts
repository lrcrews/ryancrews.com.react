import {
  createColorDrafts,
  formatHslString,
  formatRgbString,
  parseHexColor,
  parseHslDraft,
  parseRgbDraft,
  rgbToHsl,
  rgbToHex,
} from "./colorConverterUtils";

describe("colorConverter", () => {
  test("parses hex colors and normalizes them to uppercase hex", () => {
    const color = parseHexColor("#2e7dff");

    expect(color).toEqual({ r: 46, g: 125, b: 255 });
    expect(color && rgbToHex(color)).toBe("#2E7DFF");
  });

  test("converts between RGB and HSL formats", () => {
    const rgbColor = parseRgbDraft({ r: "255", g: "153", b: "0" });

    expect(rgbColor).toEqual({ r: 255, g: 153, b: 0 });
    expect(rgbColor && formatRgbString(rgbColor)).toBe("rgb(255, 153, 0)");
    expect(rgbColor && formatHslString(rgbToHsl(rgbColor))).toBe(
      "hsl(36, 100%, 50%)"
    );
  });

  test("builds RGB colors from HSL drafts", () => {
    const rgbColor = parseHslDraft({ h: "210", s: "100", l: "56" });

    expect(rgbColor).toEqual({ r: 31, g: 143, b: 255 });
    expect(rgbColor && createColorDrafts(rgbColor).hex).toBe("#1F8FFF");
  });
});

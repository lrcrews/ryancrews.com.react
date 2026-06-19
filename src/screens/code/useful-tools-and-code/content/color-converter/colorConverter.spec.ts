import {
  createColorDrafts,
  formatRgbString,
  parseHexColor,
  parseRgbDraft,
  rgbToHex,
} from "./colorConverterUtils";

describe("colorConverter", () => {
  test("parses hex colors and normalizes them to uppercase hex", () => {
    const color = parseHexColor("#2e7dff");

    expect(color).toEqual({ r: 46, g: 125, b: 255 });
    expect(color && rgbToHex(color)).toBe("#2E7DFF");
  });

  test("formats RGB values as valid CSS", () => {
    const rgbColor = parseRgbDraft({ r: "255", g: "153", b: "0" });

    expect(rgbColor).toEqual({ r: 255, g: 153, b: 0 });
    expect(rgbColor && formatRgbString(rgbColor)).toBe("rgb(255, 153, 0)");
  });

  test("builds normalized drafts from RGB colors", () => {
    const rgbColor = parseRgbDraft({ r: "31", g: "143", b: "255" });

    expect(rgbColor).toEqual({ r: 31, g: 143, b: 255 });
    expect(rgbColor && createColorDrafts(rgbColor).hex).toBe("#1F8FFF");
  });
});

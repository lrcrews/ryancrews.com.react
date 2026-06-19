import { ChangeEvent, useState } from "react";

import { SecondaryButton } from "../../../../shared-components";
import UsefulToolWrapper from "../UsefulToolWrapper";
import { UsefulToolCategory } from "../UsefulToolsAndCodeHome";

import "./ColorConverter.scss";
import {
  createColorDrafts,
  formatHslString,
  formatRgbString,
  HSLDraft,
  parseHexColor,
  parseHslDraft,
  parseRgbDraft,
  rgbToHsl,
  RGBColor,
  RGBDraft,
  rgbToHex,
} from "./colorConverterUtils";

const DEFAULT_COLOR = parseHexColor("#2E7DFF") as RGBColor;
const PRESET_COLORS = [
  { hex: "#2E7DFF", label: "Ocean" },
  { hex: "#FF6B6B", label: "Coral" },
  { hex: "#22C55E", label: "Mint" },
  { hex: "#F59E0B", label: "Gold" },
];

function getStatusMessage(
  isValid: boolean,
  isComplete: boolean,
  invalidMessage: string,
  validMessage: string
) {
  if (!isComplete) {
    return validMessage;
  }

  return isValid ? validMessage : invalidMessage;
}

function ColorConverterScreen() {
  const initialDrafts = createColorDrafts(DEFAULT_COLOR);
  const [color, setColor] = useState<RGBColor>(DEFAULT_COLOR);
  const [hexInput, setHexInput] = useState(initialDrafts.hex);
  const [rgbDraft, setRgbDraft] = useState<RGBDraft>(initialDrafts.rgb);
  const [hslDraft, setHslDraft] = useState<HSLDraft>(initialDrafts.hsl);
  const [copyMessage, setCopyMessage] = useState("");

  const convertedHsl = rgbToHsl(color);
  const normalizedHex = rgbToHex(color);
  const rgbValue = formatRgbString(color);
  const hslValue = formatHslString(convertedHsl);

  const isRgbDraftComplete = Object.values(rgbDraft).every((value) =>
    Boolean(value.trim())
  );
  const isHslDraftComplete = Object.values(hslDraft).every((value) =>
    Boolean(value.trim())
  );
  const parsedHexColor = parseHexColor(hexInput);
  const parsedRgbColor = parseRgbDraft(rgbDraft);
  const parsedHslColor = parseHslDraft(hslDraft);

  function syncColor(nextColor: RGBColor) {
    const nextDrafts = createColorDrafts(nextColor);

    setColor(nextColor);
    setHexInput(nextDrafts.hex);
    setRgbDraft(nextDrafts.rgb);
    setHslDraft(nextDrafts.hsl);
  }

  function handleHexChange(event: ChangeEvent<HTMLInputElement>) {
    const nextValue = event.target.value;

    setHexInput(nextValue);

    const parsedColor = parseHexColor(nextValue);

    if (parsedColor) {
      syncColor(parsedColor);
    }
  }

  function handleRgbChange(channel: keyof RGBDraft) {
    return (event: ChangeEvent<HTMLInputElement>) => {
      const nextDraft = {
        ...rgbDraft,
        [channel]: event.target.value,
      };

      setRgbDraft(nextDraft);

      const parsedColor = parseRgbDraft(nextDraft);

      if (parsedColor) {
        syncColor(parsedColor);
      }
    };
  }

  function handleHslChange(channel: keyof HSLDraft) {
    return (event: ChangeEvent<HTMLInputElement>) => {
      const nextDraft = {
        ...hslDraft,
        [channel]: event.target.value,
      };

      setHslDraft(nextDraft);

      const parsedColor = parseHslDraft(nextDraft);

      if (parsedColor) {
        syncColor(parsedColor);
      }
    };
  }

  function handlePresetClick(hexColor: string) {
    const parsedColor = parseHexColor(hexColor);

    if (parsedColor) {
      syncColor(parsedColor);
    }
  }

  async function handleCopy(label: string, value: string) {
    if (!navigator.clipboard) {
      setCopyMessage("Clipboard is not available in this browser.");
      return;
    }

    try {
      await navigator.clipboard.writeText(value);
      setCopyMessage(`Copied ${label}.`);
    } catch {
      setCopyMessage("Copy failed in this browser.");
    }
  }

  return (
    <UsefulToolWrapper
      category={UsefulToolCategory.Tool}
      subTitle="Convert between hex, RGB, and HSL"
      title="Color Converter"
    >
      <div className="colorConverter">
        <section className="colorConverter-panel colorConverter-panel-preview">
          <div
            aria-label={`Color preview ${normalizedHex}`}
            className="colorConverter-swatch"
            style={{ backgroundColor: normalizedHex }}
          >
            <div className="colorConverter-swatchValue">{normalizedHex}</div>
            <div className="colorConverter-swatchValue">{rgbValue}</div>
          </div>
          <p className="colorConverter-copyMessage" role="status">
            {copyMessage || "Copy a format or start from one of the presets."}
          </p>
          <div className="colorConverter-presets">
            {PRESET_COLORS.map((preset) => (
              <button
                aria-label={`Use ${preset.label} preset`}
                className="colorConverter-presetButton"
                key={preset.hex}
                onClick={() => handlePresetClick(preset.hex)}
                style={{ backgroundColor: preset.hex }}
                type="button"
              >
                <span>{preset.label}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="colorConverter-panel">
          <h2>Start with hex</h2>
          <label className="colorConverter-field">
            <span>Hex</span>
            <input
              aria-label="Hex color"
              onChange={handleHexChange}
              placeholder="#2E7DFF"
              type="text"
              value={hexInput}
            />
          </label>
          <p className="colorConverter-fieldHint">
            {getStatusMessage(
              Boolean(parsedHexColor),
              Boolean(hexInput.trim()),
              "Use 3 or 6 hexadecimal digits.",
              "Supports #RGB and #RRGGBB."
            )}
          </p>
        </section>

        <section className="colorConverter-panel">
          <h2>Edit RGB</h2>
          <div className="colorConverter-channelGrid">
            <label className="colorConverter-field">
              <span>Red</span>
              <input
                aria-label="Red channel"
                inputMode="numeric"
                onChange={handleRgbChange("r")}
                type="number"
                value={rgbDraft.r}
              />
            </label>
            <label className="colorConverter-field">
              <span>Green</span>
              <input
                aria-label="Green channel"
                inputMode="numeric"
                onChange={handleRgbChange("g")}
                type="number"
                value={rgbDraft.g}
              />
            </label>
            <label className="colorConverter-field">
              <span>Blue</span>
              <input
                aria-label="Blue channel"
                inputMode="numeric"
                onChange={handleRgbChange("b")}
                type="number"
                value={rgbDraft.b}
              />
            </label>
          </div>
          <p className="colorConverter-fieldHint">
            {getStatusMessage(
              Boolean(parsedRgbColor),
              isRgbDraftComplete,
              "RGB values must be whole numbers from 0 to 255.",
              "Each channel accepts values from 0 to 255."
            )}
          </p>
        </section>

        <section className="colorConverter-panel">
          <h2>Edit HSL</h2>
          <div className="colorConverter-channelGrid">
            <label className="colorConverter-field">
              <span>Hue</span>
              <input
                aria-label="Hue channel"
                inputMode="decimal"
                onChange={handleHslChange("h")}
                type="number"
                value={hslDraft.h}
              />
            </label>
            <label className="colorConverter-field">
              <span>Saturation</span>
              <input
                aria-label="Saturation channel"
                inputMode="decimal"
                onChange={handleHslChange("s")}
                type="number"
                value={hslDraft.s}
              />
            </label>
            <label className="colorConverter-field">
              <span>Lightness</span>
              <input
                aria-label="Lightness channel"
                inputMode="decimal"
                onChange={handleHslChange("l")}
                type="number"
                value={hslDraft.l}
              />
            </label>
          </div>
          <p className="colorConverter-fieldHint">
            {getStatusMessage(
              Boolean(parsedHslColor),
              isHslDraftComplete,
              "Hue must be 0 to 360. Saturation and lightness must be 0 to 100.",
              "Hue accepts 0 to 360. Saturation and lightness accept percentages."
            )}
          </p>
        </section>

        <section className="colorConverter-panel colorConverter-panel-outputs">
          <h2>Converted values</h2>
          <div className="colorConverter-outputGrid">
            <div className="colorConverter-outputCard">
              <div>
                <div className="colorConverter-outputLabel">Hex</div>
                <div className="colorConverter-outputValue">{normalizedHex}</div>
              </div>
              <SecondaryButton onClick={() => handleCopy("hex", normalizedHex)}>
                Copy
              </SecondaryButton>
            </div>
            <div className="colorConverter-outputCard">
              <div>
                <div className="colorConverter-outputLabel">RGB</div>
                <div className="colorConverter-outputValue">{rgbValue}</div>
              </div>
              <SecondaryButton onClick={() => handleCopy("RGB", rgbValue)}>
                Copy
              </SecondaryButton>
            </div>
            <div className="colorConverter-outputCard">
              <div>
                <div className="colorConverter-outputLabel">HSL</div>
                <div className="colorConverter-outputValue">{hslValue}</div>
              </div>
              <SecondaryButton onClick={() => handleCopy("HSL", hslValue)}>
                Copy
              </SecondaryButton>
            </div>
          </div>
        </section>
      </div>
    </UsefulToolWrapper>
  );
}

export default ColorConverterScreen;

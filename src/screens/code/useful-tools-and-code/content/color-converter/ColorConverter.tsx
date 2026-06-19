import { ChangeEvent, useState } from "react";

import UsefulToolWrapper from "../../UsefulToolWrapper";
import { UsefulToolCategory } from "../../UsefulToolsAndCodeHome";

import "./ColorConverter.scss";
import {
  createColorDrafts,
  formatRgbChannels,
  formatRgbString,
  parseHexColor,
  parseRgbDraft,
  RGBColor,
  RGBDraft,
  rgbToHex,
} from "./colorConverterUtils";

const DEFAULT_COLOR = parseHexColor("#228BE6") as RGBColor;

function CopyIcon() {
  return (
    <svg aria-hidden="true" className="colorConverter-icon" viewBox="0 0 16 16">
      <rect x="5" y="3" width="8" height="10" rx="1.5" />
      <path d="M3 11V5c0-.8.7-1.5 1.5-1.5H9" />
    </svg>
  );
}

type OutputRowProps = {
  label: string;
  value: string;
  onCopy: () => Promise<void>;
};

function OutputRow(props: OutputRowProps) {
  const { label, value, onCopy } = props;

  return (
    <div className="colorConverter-outputRow">
      <div className="colorConverter-outputContent">
        <div className="colorConverter-outputBadge">{label}</div>
        <div className="colorConverter-outputValue">{value}</div>
      </div>
      <button
        aria-label={`Copy ${label} value`}
        className="colorConverter-iconButton"
        onClick={onCopy}
        type="button"
      >
        <CopyIcon />
      </button>
    </div>
  );
}

function ColorConverterScreen() {
  const initialDrafts = createColorDrafts(DEFAULT_COLOR);
  const [color, setColor] = useState<RGBColor>(DEFAULT_COLOR);
  const [hexInput, setHexInput] = useState(initialDrafts.hex);
  const [rgbDraft, setRgbDraft] = useState<RGBDraft>(initialDrafts.rgb);
  const [statusMessage, setStatusMessage] = useState(
    "Copy values or tweak RGB and hex inputs.",
  );

  const normalizedHex = rgbToHex(color);
  const rgbValue = formatRgbChannels(color);
  const rgbCssValue = formatRgbString(color);

  function syncColor(nextColor: RGBColor) {
    const nextDrafts = createColorDrafts(nextColor);

    setColor(nextColor);
    setHexInput(nextDrafts.hex);
    setRgbDraft(nextDrafts.rgb);
  }

  function handleHexChange(event: ChangeEvent<HTMLInputElement>) {
    const nextValue = event.target.value;

    setHexInput(nextValue);

    const nextColor = parseHexColor(nextValue);

    if (nextColor) {
      const nextDrafts = createColorDrafts(nextColor);

      setColor(nextColor);
      setRgbDraft(nextDrafts.rgb);
    }
  }

  function handleRgbChange(channel: keyof RGBDraft) {
    return (event: ChangeEvent<HTMLInputElement>) => {
      const nextDraft = {
        ...rgbDraft,
        [channel]: event.target.value,
      };

      setRgbDraft(nextDraft);

      const nextColor = parseRgbDraft(nextDraft);

      if (nextColor) {
        syncColor(nextColor);
      }
    };
  }

  async function handleCopy(label: string, value: string) {
    if (!navigator.clipboard) {
      setStatusMessage("Clipboard is not available in this browser.");
      return;
    }

    try {
      await navigator.clipboard.writeText(value);
      setStatusMessage(`Copied ${label}.`);
    } catch {
      setStatusMessage("Copy failed in this browser.");
    }
  }

  return (
    <UsefulToolWrapper
      category={UsefulToolCategory.Tool}
      subTitle="Enter values in either RGB or Hex. The other format updates automatically."
      title="RGB ↔ Hex Converter"
    >
      <div className="colorConverterSurface">
        <section className="colorConverterWorkspace">
          <div className="colorConverterEditor">
            <div className="colorConverterSectionHeading">
              <h2>RGB</h2>
            </div>
            <div className="colorConverterChannelGrid">
              <label className="colorConverterField">
                <input
                  aria-label="Red channel"
                  inputMode="numeric"
                  onChange={handleRgbChange("r")}
                  type="number"
                  value={rgbDraft.r}
                />
              </label>
              <label className="colorConverterField">
                <input
                  aria-label="Green channel"
                  inputMode="numeric"
                  onChange={handleRgbChange("g")}
                  type="number"
                  value={rgbDraft.g}
                />
              </label>
              <label className="colorConverterField">
                <input
                  aria-label="Blue channel"
                  inputMode="numeric"
                  onChange={handleRgbChange("b")}
                  type="number"
                  value={rgbDraft.b}
                />
              </label>
            </div>
            <p className="colorConverterHint">
              Enter values between 0 and 255.
            </p>
          </div>

          <div className="colorConverterEditor">
            <div className="colorConverterSectionHeading">
              <h2>Hex</h2>
            </div>
            <div className="colorConverterInputWithButton">
              <input
                aria-label="Hex color"
                className="colorConverterHexInput"
                onChange={handleHexChange}
                placeholder="#228BE6"
                type="text"
                value={hexInput}
              />
              <button
                aria-label="Copy hex value"
                className="colorConverter-iconButton"
                onClick={() => handleCopy("hex", normalizedHex)}
                type="button"
              >
                <CopyIcon />
              </button>
            </div>
            <p className="colorConverterHint">
              Enter a hex value with or without #.
            </p>
          </div>
        </section>

        <section className="colorConverterPreviewPanel">
          <div className="colorConverterPreviewBlock">
            <div
              aria-label={`Color preview ${normalizedHex}`}
              className="colorConverterPreviewSwatch"
              style={{ backgroundColor: normalizedHex }}
            />
          </div>

          <div className="colorConverterOutputs">
            <OutputRow
              label="RGB"
              onCopy={() => handleCopy("RGB", rgbCssValue)}
              value={rgbValue}
            />
            <OutputRow
              label="HEX"
              onCopy={() => handleCopy("hex", normalizedHex)}
              value={normalizedHex}
            />
          </div>
        </section>

        <p className="colorConverterStatus" role="status">
          {statusMessage}
        </p>
      </div>
    </UsefulToolWrapper>
  );
}

export default ColorConverterScreen;

// deps: npm i culori
import { oklch, formatHex, converter, Color } from "culori";

const scale = (hex: string) => {
  const toOklch = converter("oklch");
  const base = toOklch(hex);

  if (!base) {
    throw new Error(`Invalid color: ${hex}`);
  }

  // step list; adjust as needed
  const steps = [
    "0",
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "1000",
  ] as const;

  return steps.reduce((acc: Record<string, string>, step) => {
    const ratio = parseInt(step) / 1000; // 0.1 → 0.9
    const shaded: Color = {
      mode: "oklch",
      l: ratio,
      c: base.c,
      h: base.h,
    };
    const color = formatHex(oklch(shaded));
    acc[step] = color;
    return acc;
  }, {});
};

// eslint-disable-next-line no-console
console.log(scale("#f4ecd6"));

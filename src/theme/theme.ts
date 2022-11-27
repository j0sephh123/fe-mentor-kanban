import { createStitches } from "@stitches/react";
import { colors } from "./colors";
import { fonts } from "./fonts";

export const breakpoints = {
  mobile: 375,
  tablet: 768,
  desktop: 1440,
};

export const { styled } = createStitches({
  media: {
    sm: `(max-width: ${breakpoints.mobile}px)`, // TODO is this necessary ?
    md: `(min-width: ${breakpoints.mobile + 1}px)`,
    lg: `(min-width: ${breakpoints.tablet + 1}px)`,
  },
  theme: {
    colors,
    fontSizes: {
      // xxs: "9px",
      // xs: "11px",
      // s: "12px",
      // sm: "14px",
      // md: "28px",
      // l: "40px",
      // xl: "80px",
    },
    lineHeights: {
      // sm: "22px",
      // md: "25px",
      // l: "52px",
      // xl: "103px",
    },
    letterSpacings: {
      // tabs: "1.93px",
      // h2: "-1.5px",
      // h3: "2.6px",
      // h4: "1px",
    },
    fonts,
    sizes: {
      // heroMobileHeight: "304px",
      // heroGeologyWidth: "199px",
      // heroGeologyHeight: "163px",
    },
    space: {
      // 1: "4px",
      // 2: "8px",
      // 3: "10px",
      // 4: "12px",
      // 5: "16px",
      // 6: "20px",
      // 7: "24px",
      // 8: "28px",
      // 9: "32px",
      // 10: "36px",
      // 11: "40px",
      // 12: "48px",
      // 13: "56px",
      // 14: "64px",
    },
  },
});

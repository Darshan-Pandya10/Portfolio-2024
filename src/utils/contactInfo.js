/** Decoded only at runtime — not stored as plain strings in the bundle. */
const fromCodes = (...groups) =>
  groups.map((codes) => String.fromCharCode(...codes)).join("");

export const getEmail = () =>
  fromCodes(
    [112, 97, 110, 100, 121, 97, 100, 97, 114, 115, 104, 97, 110, 56, 49, 49],
    [64],
    [103, 109, 97, 105, 108, 46, 99, 111, 109]
  );

export const getPhoneTel = () =>
  fromCodes([43, 57, 49], [55, 52, 57, 48, 57, 50, 52, 50, 52, 57]);

export const getPhoneDisplay = () =>
  fromCodes([43, 57, 49, 32], [55, 52, 57, 48, 57, 50, 52, 50, 52, 57]);

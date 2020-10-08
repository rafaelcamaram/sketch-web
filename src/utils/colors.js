export const getRgbaColorFromDecimal = (color) => {
  const { red, blue, green, alpha } = color || {};
  return `rgba(${255 * red}, ${255 * blue}, ${255 * green}, ${alpha})`;
};

export const getPixelsFromNumber = (number) => {
  return number && !Number.isNaN(number) ? `${number}px` : '0px';
};

export const shortenLabel = (label) => {
  const powersOfTen = [
    { power: 1000000000000000, suffix: "T" },
    { power: 1000000000000, suffix: "B" },
    { power: 1000000000, suffix: "M" },
    { power: 1000, suffix: "K" },
  ];

  for (const { power, suffix } of powersOfTen) {
    if (label >= power) {
      return (label / power).toFixed(1) + suffix;
    }
  }

  return label;
};

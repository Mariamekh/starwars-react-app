export const changeCssVariables = (theme) => {
  const root = document.querySelector(":root");

  const changeArray = ["header", "bgimage"];

  changeArray.forEach((property) => {
    return root.style.setProperty(
      `--theme-default-${property}`,
      `var(--theme-${theme}-${property}`
    );
  });
};

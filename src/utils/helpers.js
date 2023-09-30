export const removeElement = (elementSelector) => {
    const element = document.querySelector(elementSelector);
    return () => element.parentNode.removeChild(element);
};

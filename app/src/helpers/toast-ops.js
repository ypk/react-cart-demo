const CanUseDOM = !!(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);

const GenerateUEID = () => {
  let first = (Math.random() * 46656) | 0;
  let second = (Math.random() * 46656) | 0;
  first = ('000' + first.toString(36)).slice(-3);
  second = ('000' + second.toString(36)).slice(-3);
  return first + second;
}

const FilterToastById = (toasts, id) => {
    return toasts.filter(toast => toast.id !== id);
}

export {
    CanUseDOM,
    GenerateUEID,
    FilterToastById,
};
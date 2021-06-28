// if we have lodash, i'd use lodashs debounce method
const debounce = (func, wait) => {
    let timeout;

    return function debounced(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

export { debounce };

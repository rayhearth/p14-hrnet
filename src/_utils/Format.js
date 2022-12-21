
const dateFormat = (date) => {
    if (date) {
        return new Date(date).toLocaleDateString('fr')
    } else {
        return ''
    }
};

export default dateFormat;
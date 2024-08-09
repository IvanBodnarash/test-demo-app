import colors from '../data/colors';

export default function searchColors(query) {
    const filtered = colors.filter((color) => color.includes(query));
    console.log(filtered);
    return filtered;
}
/**
 * Slices a text string to a specified maximum length and appends ellipses if the text exceeds the limit.
 *
 * @param {string} txt - The text to be sliced.
 * @param {number} [max=50] - The maximum length of the text before truncation. Default is 50.
 * @returns {string} The sliced text, appended with "..." if it exceeds the maximum length.
 */
export function textSlicer(txt: string, max: number = 50) {
    if (txt.length >= max) return `${txt.slice(0, max)}...`;
    return txt;
}
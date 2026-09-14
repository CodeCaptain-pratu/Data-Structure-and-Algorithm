/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function (rec1, rec2) {
    const [x1, y1, x2, y2] = rec1;
    let bottomX1 = x1;
    let topX1 = x2;
    let leftY1 = y1;
    let rightY1 = y2;

    const [x3, y3, x4, y4] = rec2;
    let bottomX2 = x3;
    let topX2 = x4;
    let leftY2 = y3;
    let rightY2 = y4;

    if (bottomX1 >= topX2 || bottomX2 >= topX1) return false;
    if (leftY1 >= rightY2 || leftY2 >= rightY1) return false;

    return true;
};

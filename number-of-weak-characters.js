/**
 * @param {number[][]} properties
 * @return {number}
 */
const numberOfWeakCharacters = function(properties) {
    let weakCharaterCount = 0;
    let maxDefense = 0;

    properties.sort(([a1, d1 ], [a2, d2]) => a2 - a1 || d1 - d2);

    for (let i = 0; i < properties.length; i++) {
              if (properties[i][1] < maxDefense) {
                  weakCharaterCount++;
             }
             maxDefense = Math.max(maxDefense, properties[i][1]);
         }
         return weakCharaterCount;
};

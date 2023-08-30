const wi = 0;
const hi = 1;

/***********************************************
 * Solution 1:
 * Just do 2 loops through the list of envelopes
 ***********************************************/

const findMaxNumOfEnvelopes1 = (envelopes) => {
    for (let i = 0; i < envelopes.length; i += 1) {
        for (let k = i + 1; k < envelopes.length; k += 1) {
            if (
                envelopes[k][wi] > envelopes[i][wi] &&
                envelopes[k][hi] > envelopes[i][hi]
            ) {
                break;
            } else {
                envelopes.splice(k, 1);
                k -= 1;
            }
        }
    }

  return envelopes.length;
};

/******************************************************
 * Solution 2:
 * Use the algorithm of Longest Increasing Subsequence
 *****************************************************/
 
const findMaxNumOfEnvelopes2 = (envelopes) => {
    if (!envelopes || envelopes.length === 0) {
        return 0;
    }

    const idxOfEnvelopeHeight = 1;
    let results = []; // define a list of longest increasing sequence of height

    // Finding LIS of the heights of the envelopes
    for (let i = 0; i < envelopes.length; i++) {
        const idx = results.findIndex(en => en >= envelopes[i][idxOfEnvelopeHeight]);

        if (idx === -1) {
            results.push(envelopes[i][idxOfEnvelopeHeight]);
        } else if (envelopes[i][idxOfEnvelopeHeight] < results[idx]) {
            results[idx] = envelopes[i][idxOfEnvelopeHeight];
        }
    }

    return results.length;
};

/**
 * @param {number[][]} envelopes
 * @return {number[][]} sortedEnvelopes
 */
const sortingEnvelopes = (envelopes) => {
    return envelopes.sort((en1, en2) => {
        return en1[wi] === en2[wi] ? en2[hi] - en1[hi] : en1[wi] - en2[wi]
    });
};

/**
 * @param {number[][]} envelopes
 * @return {number}
 */
const maxEnvelopes = function(envelopes) {
    const sortedEvelopes = sortingEnvelopes(envelopes);

    return findMaxNumOfEnvelopes2(sortedEvelopes);
};

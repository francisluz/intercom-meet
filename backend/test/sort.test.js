const assert = require('assert');
const MergeSort = require('../algorithm/merge_sort');
const Customer = require('../data_structure/customer');

describe('Test Array merging sort', () => {
    it('Should return a sorted array', () => {
        let testInput = [
            { user_id:10 },
            { user_id:1 },
            { user_id:23 },
            { user_id:5 }
        ];

        let resultExpected = [
            { user_id:1 },
            { user_id:5 },
            { user_id:10 },
            { user_id:23 }
        ];

        let sortedArray = new MergeSort(Customer.compare).mergeSort(testInput, testInput.length);
        assert.equal(sortedArray[0].user_id, resultExpected[0].user_id);
        assert.equal(sortedArray[3].user_id, resultExpected[3].user_id);
    });

    it('Should return a Erro - Data is empty', () => {
        assert.throws(() => new MergeSort(Customer.compare).mergeSort(null, null));
    });
});
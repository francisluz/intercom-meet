
class MergeSort {
    constructor(compareMethod){
        this.compareMethod = compareMethod;
    }

    merge(leftArray, rightArray){
        let resultSort = [];
        let indexLeft = 0;
        let indexRight = 0;

        while (indexLeft < leftArray.length && indexRight < rightArray.length) {
            if (this.compareMethod(leftArray[indexLeft], rightArray[indexRight])) {
                resultSort.push(leftArray[indexLeft]);
                indexLeft++;
            } else {
                resultSort.push(rightArray[indexRight]);
                indexRight++;
            }
        }

        return resultSort.concat(leftArray.slice(indexLeft)).concat(rightArray.slice(indexRight));
    }

    mergeSort(data, size){
        if(data === undefined || data === null){
            throw Error('Data is empty.');
        }

        if(data.length <= 1) {
            return data;
        } else {

            let middlePoint = Math.floor(size / 2);
            let leftArray = data.splice(0, middlePoint);
            let rightArray = data.splice(0, data.length);

            return this.merge(this.mergeSort(leftArray, leftArray.length), 
                              this.mergeSort(rightArray, rightArray.length));
        }
    }
};

module.exports = MergeSort;
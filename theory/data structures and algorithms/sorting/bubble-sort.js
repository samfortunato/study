/**
 * sort elements in order by comparing two at a time
 *
 * go through array in order forever until everything is sorted
 *
 * O(n^2)
 *
 * have to swap if next element is smaller than the previous one
 *
 * assume swapped is false at the start of each sequence through the collection
 *
 * if you have ever swapped during a run through the entire collection, then you
 *
 * have to run the swap through the entire collection again,
 * to be sure there's nothing left to swap.
 *
 * otherwise, you are done
 */
function bubbleSort(nums) {
	const sorted = nums.slice();
	let swapped;

	do {
		swapped = false;

		for (let i = 0; i < nums.length; i++) {
			if (sorted[i] > sorted[i + 1]) {
				const temp = sorted[i];

				sorted[i] = sorted[i + 1];
				sorted[i + 1] = temp;

				swapped = true;
			}
		}
	} while (swapped);

	return sorted;
}

// or, with array destructuring:
function bubbleSort(nums) {
	const sorted = nums.slice();
	let swapped;

	do {
		swapped = false;

		for (let i = 0; i < nums.length; i++) {
			if (sorted[i] > sorted[i + 1]) {
				[sorted[i], sorted[i + 1]] = [sorted[i + 1], sorted[i]];

				swapped = true;
			}
		}
	} while (swapped);

	return sorted;
}

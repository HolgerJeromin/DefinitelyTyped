export as namespace naturalSort;

declare namespace naturalSort {
    interface Options {
        /** Set to true to make the sort case-sensitive. */
        caseSensitive?: boolean | undefined;

        /** Set to 'desc' to sort in reverse. */
        direction?: "desc" | undefined;
    }
}

declare function naturalSort(options?: naturalSort.Options): (a: string | number, b: string | number) => number;
export = naturalSort;

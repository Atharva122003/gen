// Generic Storage class

class Storage1<T> {
    private data2!: T;
    set(value: T): void {
        this.data2 = value;
    }

    get(): T {
        return this.data2;
    }
}
// Using with number
const numberStorage = new Storage1<number>();
numberStorage.set(100);
console.log("Number:", numberStorage.get());

// Using with string
const stringStorage = new Storage1<string>();
stringStorage.set("Hello TypeScript");
console.log("String:", stringStorage.get());

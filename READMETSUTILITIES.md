## 1 \*\* Partial

```
Partial<T>  // T is an interface.
Makes all the fields of T optional
```

## 2 \*\* Pick

```
Pick<T, "x" | "z"> means the type is a portion of interface T, and it has to have 2 fields x and z
```

## 3 \*\* Required

```
Required<T> // T is an interface
makes all the fields of T required
```

## 4 \*\* ReadOnly

```
Readonly<T> // T is an interface
the object created form the interface T is not mutable, all it fields only for reading.
```

## 5 \*\* Record<K,T>

it is like an object which has key value pairs

```
ex :
const obj : Record<string, number>{
   apples: 10,
   oranges : 20
}
```

## 6 \*\* Omit

```
Omit<T, "x" | "z"> means the type if a portion of the interface T  but without the fields x and z
```

## 7 \*\* Exclude

```
Exclude<T, string> means from the type T,exclude the type string
```

## 8 \*\* NonNullable

```
NoNullable<T> means if the type T has null  or undefined , they will be removed
types A = string | null | undefined
const newA = NonNullable<A>, this means newA = string
```

## 9 \*\* ReturnType

```
const myFn = ()=> "hello Word"
cont rType = ReturnType<typeof myfn> // means the type of rType = string because myFn is returning string
```

## 10 \*\* InstanceType

means that the type is an instance of a class

```
class C {

}
const instTansOfC : InstanceTpe<typeof C>

```

## 11 \*\* ThisType

allow to specify the type of this keyword in an object

```
ThisType<T>

ex:
interface  z {
    double: () => void;
    half: () => void
}

interface y {
    value : number
}


const obj: z & ThisType<y> = {
    // never use the arrow functions while using this keyword
   double(){this.value *= 2},
   half(){this.value /=2},
}

const newObject = {
    value: 1,
    ...obj
}

newObject.double();
console.log(newObject.value)
```

or

```
type State<D, M> = {
    data: D;
    methods: M & ThisType<D & M>
  }

  const createState = <D, M>(des: State<D, M>): D & M => {
    return {
      ...des.data,
      ...des.methods
    }
  }

  const state = createState({
    data: { x: 5, y: 5 },
    methods: {
      increaseData(passedData: { x: number, y: number }) {
        this.x += passedData.x;
        this.y += passedData.y
      }
    }

  })

  state.increaseData({ x: 10, y: 10 },);
  console.log("data ==> ", state)
```

## 12 \*\* union ( | ) and intersection ( & )

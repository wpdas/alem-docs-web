# Create Debounce

Create a debounced method to obtain the data after the desired interval.

```tsx
import { createDebounce } from "alem";

const MyComponent = () => {
  const [words, setWords] = useState("");
  const onInputChange = createDebounce((event) => setWords(event.target.value), 1000);

  // This will be changed 1 sec after the user stops typing.
  console.log(words);
  return <input onChange={onInputChange} type="text" />;
};
```

This feature is also available separately here: **[createDebounce](https://near.org/near/widget/ComponentDetailsPage?src=alem-lib.near/widget/createDebounce)** and can be injected like this:

```jsx
// SomeWidget
const { createDebounce } = VM.require("alem-lib.near/widget/createDebounce");
if (!createDebounce) return "";

const [words, setWords] = useState("");
const onInputChange = createDebounce((event) => setWords(event.target.value), 1000);

// This will be changed 1 sec after the user stops typing.
console.log(words);

return <input onChange={onInputChange} type="text" />;
```

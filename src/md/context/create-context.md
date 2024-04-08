# Create Context

Similar to React's Context API, Além also provides a way to create contexts. Contexts are very helpful when you want to create a specific data structure and pass it to child components.

By nature, it is not possible to manipulate provider objects at the same layer in which they are used, similar to React.

**Simple Example:**

```tsx
// UserProvider.tsx

import { createContext } from "alem";

// Interface
interface UserContextProps {
  isAuthenticated: boolean;
  name: string;
}

const UserProvider = () => {
  // Create a provider using a reference key
  const { setDefaultData, updateData, getSelf } = createContext<UserContextProps>("user-provider");

  // Initial / default data
  setDefaultData({
    isAuthenticated: !!context.accountId,
    accountId: context.accountId,
  });
};
```

**API**

- **setDefaultData:** Method used to set the default data;
- **updateData:** Method used to update data;
- **getSelf:** Returns the current state of the context data;

# Use Context

Using context with `useContext`:

```tsx
import UserProvider from "./contexts/UserProvider";

const App = () => {
  UserProvider();

  return <ChildComponent />;
};
```

```tsx
import { useContext } from "alem";

interface UserContextProps {
  isAuthenticated: boolean;
  name: string;
}

const ChildComponent = () => {
  const user = useContext<ProjectsContextProps>("user-context");

  console.log(user);
  // { isAuthenticated: true, accountId: "wendersonpires.near" }

  return "";
};
```

**Handling async data:**

```tsx
// CartProvider.tsx

import { createContext, useContext, asyncFetch } from "alem";

// Interface
interface CartContextProps {
  items: string[];
  ready: boolean;

  // actions
  fetchCartItems: () => void;
}

const CartProvider = () => {
  const { setDefaultData, updateData, getSelf } = createContext<CartContextProps>("cart-provider");

  // Initial / default data
  setDefaultData({
    items: [],
    ready: false,

    fetchCartItems: () => {
      const self = getSelf();

      if (!self.ready) {
        asyncFetch("https://api.com/cart/items").then((response) => {
          // Update items
          updateData({
            items: response.body,
            ready: true,
          });
        });
      }
    },
  });

  // (Optional): Auto fetch cart items
  const self = getSelf();
  if (!self.ready) {
    self.fetchCartItems();
  }
};
```

Then you can use the data:

```tsx
import CartProvider from "./contexts/CartProvider";

const App = () => {
  CartProvider();

  return <ChildComponent />;
};
```

```tsx
import { useContext, useEffect } from "alem";

interface CartContextProps {
  items: string[];
  ready: boolean;
  fetchCartItems: () => void;
}

const ChildComponent = () => {
  const cart = useContext<CartContextProps>("cart-context");

  useEffect(() => {
    // Fetch cart items (in case you are not using the auto fetch)
    cart.fetchCartItems();
  }, []);

  console.log(cart.items);
  // [item1, item2, item3, ...]

  return "";
};
```

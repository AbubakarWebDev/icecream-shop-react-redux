# Ice Cream Shop - React with Redux Toolkit

This repository hosts an Ice Cream Shop application built with React and Redux Toolkit. The project demonstrates state management in a React application using Redux Toolkit for managing ice cream inventory and customer interactions.

## Features

- **State Management with Redux Toolkit**: Efficient and scalable state management.
- **Inventory Management**: Track and update the ice cream shop's inventory.
- **Order Placement**: Simulate customer orders and inventory adjustments.
- **Reusable Components**: Modular and maintainable UI components.

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm or yarn (comes with Node.js)

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AbubakarWebDev/icecream-shop-react-redux.git
   cd icecream-shop-react-redux
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Application

1. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

2. Open your browser and navigate to `http://localhost:3000`.

### Building for Production

To build the application for production:

```bash
npm run build
# or
yarn build
```

## State Management

This application uses Redux Toolkit to manage state. It includes slices for managing ice cream inventory and customer interactions.

### Ice Cream Slice Example

```javascript
import { createSlice } from '@reduxjs/toolkit';

const icecreamSlice = createSlice({
  name: 'icecream',
  initialState: {
    inventory: [
      { id: 1, name: 'Vanilla', quantity: 15 },
      { id: 2, name: 'Chocolate', quantity: 10 },
      { id: 3, name: 'Strawberry', quantity: 12 },
    ],
  },
  reducers: {
    sellItem: (state, action) => {
      const item = state.inventory.find(item => item.id === action.payload);
      if (item && item.quantity > 0) {
        item.quantity -= 1;
      }
    },
  },
});

export const { sellItem } = icecreamSlice.actions;
export default icecreamSlice.reducer;
```

## Learning Outcomes

- Understand the basics of React and Redux Toolkit.
- Configure Redux Toolkit for state management.
- Design modular slices for application state.
- Build interactive and responsive components in React.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

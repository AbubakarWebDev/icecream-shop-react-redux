const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: {
      qty: 1,
    },
  };
}

function restokeCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: {
      qty,
    },
  };
}

function orderIceCream() {
  return {
    type: ICECREAM_ORDERED,
    payload: {
      qty: 1,
    },
  };
}

function restokeIceCream(qty = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: {
      qty,
    },
  };
}

export {
  CAKE_ORDERED,
  CAKE_RESTOCKED,
  ICECREAM_ORDERED,
  ICECREAM_RESTOCKED,
  orderCake,
  restokeCake,
  orderIceCream,
  restokeIceCream
};
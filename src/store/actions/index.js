import * as TYPES from "../action-types";
const actions = {
  add() {
    return { type: TYPES.ADD };
  },
  asyncAdd() {
    return { type: TYPES.ASYNC_ADD };
  },
};

export default actions;

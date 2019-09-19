import Provider from "./Provider";
import Component from "./Component";
import withContext from "./withContext";
import withContextPassed from "./withContextPassed";
import Api from "./api.js";


export const BoxProvider = Provider
export const BoxComponent = Component
export const BoxContext = withContext
export const BoxWrapper = withContextPassed
export const BoxApi = Api

export default {
  BoxProvider,
  BoxComponent,
  BoxContext,
  BoxWrapper,
  BoxApi,
}

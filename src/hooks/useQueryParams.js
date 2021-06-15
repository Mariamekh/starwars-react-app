import { useLocation } from "react-router";
import { URLSearchParams } from "whatwg-url";

export const useQueryParams = () => {
  return new URLSearchParams(useLocation().search);
};

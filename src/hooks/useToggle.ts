import { useCallback, useState } from "react";

type Props = {
  active: boolean;
};

const useToggle = ({ active = false }: Props) => {
  const [state, setState] = useState(active);
  //   Toggle Function
  const toggle = useCallback(() => setState((prevVal) => !prevVal), []);

  return [state, toggle];
};

export default useToggle;

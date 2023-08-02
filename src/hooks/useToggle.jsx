import { useState } from "react";

export default function Toggle() {
  const [active, setActive] = useState(false);

  return [active, setActive];
}

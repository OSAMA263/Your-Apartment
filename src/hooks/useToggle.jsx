import { useState } from "react";

export default function Toggle() {
  const [isOpen, setIsOpen] = useState(false);

  return [isOpen, setIsOpen];
}

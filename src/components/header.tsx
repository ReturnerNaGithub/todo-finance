import React from "react";
import TodoTextInput from "./todo-text-input";

const Header = ({ onNewItem }: { onNewItem: (text: string) => void }) => (
  <header className="header">
    <h1>Najine Finance</h1>
    <TodoTextInput
      initial=""
      placeholder="Koliko sva investirala?"
      onSubmit={onNewItem}
    />
  </header>
);

export default Header;

import { useState } from "react";
import styles from "./dropdown-menu.module.css";

export function DropdownMenu({ children }) {
  return <div className={styles.dropdown}>{children}</div>;
}

export function DropdownMenuTrigger({ asChild, children }) {
  return <button className={styles.trigger}>{children}</button>;
}

export function DropdownMenuContent({ align = "end", children }) {
  return <div className={`${styles.content} ${styles[align]}`}>{children}</div>;
}

export function DropdownMenuItem({ children, onClick }) {
  return (
    <div className={styles.item} onClick={onClick}>
      {children}
    </div>
  );
}

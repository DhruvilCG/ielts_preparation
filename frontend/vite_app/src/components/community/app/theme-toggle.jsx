"use client"
import { Moon, Sun } from "lucide-react"
import styles from "./theme-toggle.module.css"

import { Button } from "./button.jsx"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./dropdown-menu.jsx" ;

export function ThemeToggle() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className={styles.themeButton}>
          <Sun className={styles.sunIcon} />
          <Moon className={styles.moonIcon} />
          <span className={styles.srOnly}>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>Light</DropdownMenuItem>
        <DropdownMenuItem>Dark</DropdownMenuItem>
        <DropdownMenuItem>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

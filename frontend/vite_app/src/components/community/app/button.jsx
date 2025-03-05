import React from "react";
import styles from "./button.module.css";

const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? "span" : "button"; // Replacing Slot with <span> for asChild case

    const getVariantClass = () => {
      switch (variant) {
        case "default":
          return styles.default;
        case "destructive":
          return styles.destructive;
        case "outline":
          return styles.outline;
        case "secondary":
          return styles.secondary;
        case "ghost":
          return styles.ghost;
        case "link":
          return styles.link;
        default:
          return styles.default;
      }
    };

    const getSizeClass = () => {
      switch (size) {
        case "default":
          return styles.sizeDefault;
        case "sm":
          return styles.sizeSm;
        case "lg":
          return styles.sizeLg;
        case "icon":
          return styles.sizeIcon;
        default:
          return styles.sizeDefault;
      }
    };

    const buttonClasses = `${styles.button} ${getVariantClass()} ${getSizeClass()} ${className || ""}`;

    return <Comp className={buttonClasses} ref={ref} {...props} />;
  }
);

Button.displayName = "Button";

export { Button };

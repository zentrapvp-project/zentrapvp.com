"use client"

import ButtonStyles from "./Component.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Button({children, style, type, onClick, disabled, className, target, rel, href, dataAction}) {

    const [buttonScale, setButtonScale] = useState(1.0);

    const Wrapper = href ? Link : "button";

    return (
        <Wrapper
            href={`${href}` }
            target={target}
            rel={rel}
            className={`${ButtonStyles.button}
                        ${ButtonStyles[type]}
                        ${disabled ? ButtonStyles.disabled : ""}
                        ${className}
                        `}
            onClick={onClick}
            disabled={disabled}
            onMouseDown={() => {setButtonScale(0.95)}}
            onMouseOver={() => {setButtonScale(1.0)}}
            onMouseOut={() => {setButtonScale(1.0)}}
            onMouseUp={() => {setButtonScale(1.0)}}
            onTouchStart={() => {setButtonScale(0.95)}}
            onTouchEnd={() => {setButtonScale(1.0)}}
            style={{
                transform: `scale(${buttonScale})`,transition: `transform 0s linear`, style
            }}
        >
            {children ? children : "Button"}
        </Wrapper>
    )
}
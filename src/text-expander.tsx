import { useState } from "react"

interface TextExpanderProps {
    text: string
    collapsedWidth?: number
    buttonText?: {
        open: string,
        close: string
    }
    buttonTextColor?: string
    underline?: boolean
    className?: string
}

export function TextExpander({ 
    text, 
    collapsedWidth = 50,
    buttonText = { open: "Show more", close: "Show less" },
    buttonTextColor = "#1d4ed8",
    underline = true,
    className = ""
}: TextExpanderProps) {
    const [textExpanded, setTextExpanded] = useState(false)
    const closedText = text.slice(0, 
        collapsedWidth > text.length 
        ? Math.round(text.length / 2)
        : collapsedWidth
    ).concat("...")

    return (
        <p className={className}>
            {textExpanded ? text : closedText}
            <span
                onClick={() => setTextExpanded(!textExpanded)}
                style={{ 
                    color: buttonTextColor, 
                    cursor: "pointer", 
                    marginLeft: "8px",
                    textDecoration: `${underline ? "underline" : "none"}`
                }}
            >
                {textExpanded ? buttonText.close : buttonText.open}
            </span>
        </p>
    )
}
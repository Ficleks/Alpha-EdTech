interface MathButtonProps {
    text: string;
}

export const MathButton = (props: MathButtonProps) => {
    return <button>{props.text}</button>
}

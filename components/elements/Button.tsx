type Props = {
    bgColor: string
    content: string
    onClick: () => void
}

const Button = ({ bgColor, content, onClick }: Props) => {
    return (
        <div
            className={`shadow p-3 cursor-pointer rounded m-2 ${bgColor}`}
            onClick={onClick}
        >
            {content}
        </div>
    )
}
export default Button

type Props = {
    option: string
    content: string | undefined
    onClick: () => void
}

const Button = ({ option, content, onClick }: Props) => {
    return (
        <div
            className={`shadow p-3 cursor-pointer rounded m-2 text-gray-600 hover:opacity-70 ${option}`}
            onClick={onClick}
        >
            {content}
        </div>
    )
}
export default Button

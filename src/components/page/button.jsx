export default function Button({type, className, nameOfButton}) {
    return (
    <div>
        <button
            type={type}
            className={className}
        >
            {nameOfButton}
        </button>
    </div>
)
}

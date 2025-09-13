export default function button({type, className, nameOfButton}) {
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

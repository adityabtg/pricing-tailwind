export default function Button({ type, text, cssType }) {
    const fallback = 'mt-10 outline-2 rounded-md min-w-50 min-h-11 bg-blue-500 hover:bg-blue-700 text-cyan-50 cursor-pointer'
    const varients = {
        secondary: 'mt-10 rounded-md min-w-50 min-h-11 outline outline-2 outline-blue-500 text-blue cursor-pointer hover:hover:bg-blue-700 hover:text-white'
    }
    console.log(cssType)
    return (
        <>
            <button type={type} className={` ${varients[cssType] || fallback}`}>{text}</button>
        </>)
}
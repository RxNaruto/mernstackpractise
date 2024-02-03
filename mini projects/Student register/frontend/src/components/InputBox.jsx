export const InputBox=({label,placeholder,onChange})=>{
    return <div>
        <div>{label}</div>
        <input placeholder={placeholder} onChange={onChange} />
    </div>
}
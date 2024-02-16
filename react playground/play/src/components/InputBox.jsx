export const InputBox=({label,placeholder})=>{
    return <div >
        <div text-xl font-medium text-orange-500 pt-4>
            {label}
        </div>
        <input placeholder={placeholder} className="rounded text-slate-600 border-orange-300"/>
    </div>
}
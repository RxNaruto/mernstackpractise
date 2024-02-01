export const Inputbox=({label,placeholder,onChange})=>{
    return <div>
    <div className="text-sm font-medium text-left py-2">
            {label}
        </div>
        <input onChange={onChange} placeholder={placeholder} className="border rounded w-full px-2 py-1 border-slate-200" />
    
    
    </div>
}
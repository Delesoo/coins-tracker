type ResultRowProps = {
    loading?: boolean;
    providerName?: string;
    btc?: string;
};

export default function ResultRow({loading, providerName, btc}:ResultRowProps) {
    return (
        <div className=" relative border min-h-[64px] border-white/20 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4 my-2 overflow-hidden">
            <div className="flex gap-4">
                {providerName && (
                    <div>logo</div>
                )}     
                <div className="grow">{providerName || ''}</div>
                {btc && (
                    <div className="flex gap-2">
                        <span className="text-xl text-blue-200/80">
                            {new Intl.NumberFormat('ge-GE', {minimumFractionDigits:8}).format(parseFloat(btc))}
                        </span>               
                        <span className="text-xl  text-blue-300/50">BTC</span>
                    </div>  
                )}
            </div>
            {loading && (
                <div className='inset-0 absolute bg-gradient-to-r from-transparent via-pink-900/50 to-transparent skeleton-animation'></div>
            )}
        </div>
    );
}
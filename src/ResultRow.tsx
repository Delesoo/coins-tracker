type ResultRowProps = {
    loading?: boolean;
};

export default function ResultRow({loading}:ResultRowProps) {
    return (
        <div className=" relative border min-h-12 border-white/20 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4 my-2 overflow-hidden">
            <div className="flex gap-4">
                <div>logo</div>
                <div className="grow">provider name</div>
                <div className="flex gap-2">
                    <span className="text-xl text-blue-200/80">0.000</span>               
                    <span className="text-xl  text-blue-300/50">BTC</span>
                </div>             
            </div>
            {loading && (
                <div className='inset-0 absolute bg-gradient-to-r from-transparent via-pink-900/50 to-transparent skeleton-animation'></div>
            )}
        </div>
    );
}
import paybisLogo from './assets/paybis.png'

type ResultRowProps = {
    loading?: boolean;
    providerName?: string;
    btc?: string;
};

type Logo = {
    source:string, 
    invert?:boolean
};
const logos:{[keys:string]:Logo} = {
    paybis: {source:paybisLogo,invert: true},
    guardian: {source:'https://guardarian.com/main-logo.svg'},
    moonpay: {source:'https://www.moonpay.com/assets/logo-full-white.svg'},
    transak: {source:'https://assets.transak.com/images/website/transak-logo.svg',},
};

export default function ResultRow({loading, providerName, btc}:ResultRowProps) {
    return (
        <div className=" relative border min-h-[64px] border-white/20 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4 my-2 overflow-hidden">
            <div className="flex gap-4">
                {providerName && (
                    <div className='grow items-center flex'>
                        <img 
                            src={logos[providerName]?.source} 
                            className={"h-8 "+(logos[providerName]?.invert ? 'invert' : '')}
                            alt="" />
                    </div>
                )}
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
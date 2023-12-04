import { useEffect, useState } from "react"
import AmountInput from "./AmountInput";
import ResultRow from "./ResultRow";
import axios from "axios";
import {sortBy} from 'lodash';
import  useDebouncedEffect  from  'use-debounced-effect';

type CachedResult = {
  provider: string;
  btc: string;
};

function App() {
  const [prevAmount,setPrevAmount] = useState('100');
  const [amount,setAmount] = useState('100');
  const [cachedResults,setCachedResults] = useState<CachedResult[]>([]);
  const [loading,setLoading] = useState(true);
  useEffect(() => {
    axios.get('https://fyr3sux77q.us.aircode.run/cachedValues')
      .then(res => {
        setCachedResults(res.data);
        setLoading(false);
    });
  }, []);

  useDebouncedEffect(() => {
    if(amount !== prevAmount) {
      console.log('check for '+amount);
    }
  }, 300, [amount]);

  const sortedCache = sortBy(cachedResults, 'btc').reverse();

  return (
   <main className="max-w-2xl mx-auto px-4 py-8">
    <h1 className="uppercase text-6xl text-center font-bold bg-gradient-to-br from-pink-600 to-sky-400 bg-clip-text text-transparent from-20%">Find cheapest BTC</h1>

    <div className="flex justify-center mt-6">
      <AmountInput value={amount} 
                   onChange={e => setAmount(e.target.value)} />
    </div>
    <div className="mt-6">
      {loading && (
        <>
      <ResultRow loading={true} />
      <ResultRow loading={true} />
      <ResultRow loading={true} />
      <ResultRow loading={true} />
        </>
      )}
      {!loading && sortedCache.map((result:CachedResult) => (
        <ResultRow
          key={result.provider} 
          providerName={result.provider} 
          btc={result.btc}
        />
      ))}
    </div>
   </main>
  );
}

export default App

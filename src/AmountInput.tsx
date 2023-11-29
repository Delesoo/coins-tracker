import Input, { InputProps } from "./Input";

export default function AmountInput(props:InputProps) {
    return (
        <div className="flex items-center bg-pink-950 border border-white/20 rounded-lg">
            <Input
                placeholder='Amount'
                className="border-0 w-24 pl-4 text-2xl"
                value={props.value}
                onChange={props.onChange} />
                <span className="text-white/50 px-4">USD</span>
        </div>
    );
}
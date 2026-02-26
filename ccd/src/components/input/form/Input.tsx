import './input.css';

type InputProps = {
    label?: string;
    placeHolder?: string;
    type?: string;
    textArea?: boolean;
    name?: string;
    onChange?: () => void;
}

export default function Input({ label, placeHolder, type, textArea,name, onChange }: InputProps) {
    return (
        <div className='form-input'>
            <p>{label}</p>
            {textArea ? (
                <textarea rows={9} onChange={onChange} name={label} >
                </textarea>

            ) :
                (
                    <input type={type} placeholder={placeHolder} name={name} onChange={onChange} />
                )}

        </div>
    );
};
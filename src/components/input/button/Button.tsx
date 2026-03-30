import './button.css';

type ButtonProps = {
  label: string;
  transparent?: boolean;
  onClick?: () => void;
}

export default function Button({ label, transparent, onClick }: ButtonProps) {
  return (<>
    {transparent ? (
      <button className='transparent-button' onClick={onClick}>{label}</button>
    ) : (
      <button className='blue-button' onClick={onClick}>{label}</button>
    )}
  </>
  );
};

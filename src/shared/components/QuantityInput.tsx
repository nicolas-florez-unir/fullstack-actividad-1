interface QuantityInputProps {
  value: number;
  onIncrease: () => void;
  onDecrease: () => void;
  classname?: string;
}

const QuantityInput: React.FC<QuantityInputProps> = ({
  value,
  onIncrease,
  onDecrease,
  classname = '',
}) => {
  return (
    <div className={classname}>
      <button
        className="px-2 bg-gray-200 hover:bg-gray-300 rounded-full w-6 h-6"
        onClick={() => onDecrease()}
      >
        -
      </button>
      <span className="px-2 dark:text-white">{value}</span>
      <button
        className="px-2 bg-gray-200 hover:bg-gray-300 rounded-full w-6 h-6"
        onClick={() => onIncrease()}
      >
        +
      </button>
    </div>
  );
};

export default QuantityInput;

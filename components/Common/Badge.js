const Badge = (props) => {
  return (
    <span
      data-testid="badge"
      className={`p-2 px-4 m-1 rounded-3xl text-black font-normal border-none ${props.colorClass}`}
    >
      {props.children}
    </span>
  );
};

export default Badge;

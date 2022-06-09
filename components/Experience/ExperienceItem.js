const ExperienceItem = (props) => {
  return (
    <details
      className="accordion-list rounded-md overflow-hidden bg-[#FFF6EE] dark:bg-black border-l-[15px] p-8"
      open={props.open}
    >
      <summary className="py-2 text-xl font-normal cursor-pointer select-none md:text-2xl">
        {props.summary}
      </summary>
      {props.children}
    </details>
  );
};

export default ExperienceItem;

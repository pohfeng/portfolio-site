import { RoughNotation } from 'react-rough-notation';

const HightLightedText = (props) => {
  const animationDuration = Math.floor(100 * props.children.length);

  return (
    <RoughNotation
      type="highlight"
      color={props.color}
      multiline={true}
      padding={[6, 4]}
      animationDuration={animationDuration}
      iterations={props.iterations || 3}
      show={true}
    >
      <span className="text-4xl font-semibold">{props.children}</span>
    </RoughNotation>
  );
};

export default HightLightedText;

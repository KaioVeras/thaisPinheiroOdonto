import { PrimaryButtonStyle } from "./styles";

function PrimaryButton({ label, link, $width, $height, $radius, ...props }) {
  // Evita passar props customizadas inválidas ao DOM
  const common = { $width, $height, $radius, ...props };

  if (link) {
    return (
      <PrimaryButtonStyle as="a" href={link} target="_blank" rel="noopener noreferrer" {...common}>
        {label}
      </PrimaryButtonStyle>
    );
  }
  return (
    <PrimaryButtonStyle type="button" {...common}>
      {label}
    </PrimaryButtonStyle>
  );
}

export default PrimaryButton;
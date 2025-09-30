import { Button } from "./styles";

function SecondaryButton({ label, link, $width, $height, $radius, $fontSize, ...props }) {
  const common = { $width, $height, $radius, $fontSize, ...props };

  if (link) {
    return (
      <Button as="a" href={link} target="_blank" rel="noopener noreferrer" {...common}>
        {label}
      </Button>
    );
  }
  return (
    <Button type="button" {...common}>
      {label}
    </Button>
  );
}

export default SecondaryButton;
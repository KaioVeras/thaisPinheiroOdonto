import { SecondaryButtonStyle } from "./styles";

function SecondaryButton({ label, width, height, link, radius, fontSize }) {
    return (
        <SecondaryButtonStyle href={link} target="_blank" rel="noopener noreferrer" width={width} height={height} radius={radius} fontSize={fontSize}>
            {label}
        </SecondaryButtonStyle>
    );
}

export default SecondaryButton;

import { PrimaryButtonStyle } from "./styles";

function PrimaryButton({ label, width, height, link, radius }) {
    return (
        <PrimaryButtonStyle href={link} target="_blank" rel="noopener noreferrer" width={width} height={height} radius={radius}>
            {label}
        </PrimaryButtonStyle>
    );
}

export default PrimaryButton;

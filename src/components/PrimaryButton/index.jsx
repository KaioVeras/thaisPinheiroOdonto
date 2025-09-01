import { PrimaryButtonStyle } from "./styles";

function PrimaryButton({ label, width, height, link }) {
    return (
        <PrimaryButtonStyle width={width} height={height}>
            <a href={link} target="_blank">{label}</a>
        </PrimaryButtonStyle>
    );
}

export default PrimaryButton;
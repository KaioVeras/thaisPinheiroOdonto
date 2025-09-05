import { PrimaryButtonStyle } from "./styles";

function PrimaryButton({ label, width, height, link, radius }) {
    return (
        <PrimaryButtonStyle width={width} height={height} radius={radius}>
            <a href={link} target="_blank">{label}</a>
        </PrimaryButtonStyle>
    );
}

export default PrimaryButton;
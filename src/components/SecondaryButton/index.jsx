import { SecondaryButtonStyle } from "./styles";

function SecondaryButton({ label, width, height, link }) {
    return (
        <SecondaryButtonStyle width={width} height={height}>
            <a href={link} target="_blank">{label}</a>
        </SecondaryButtonStyle>
    );
}

export default SecondaryButton;
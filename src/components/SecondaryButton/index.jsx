import { SecondaryButtonStyle } from "./styles";

function SecondaryButton({ label, width, height, link, radius, fontSize }) {
    return (
        <SecondaryButtonStyle width={width} height={height} radius={radius} fontSize={fontSize}>
            <a href={link} target="_blank">{label}</a>
        </SecondaryButtonStyle>
    );
}

export default SecondaryButton;
import { SecondaryButtonStyle } from "./styles";

function SecondaryButton({ label, link, $width, $height, $radius, ...props }) {
    const commonProps = { $width, $height, $radius, ...props };

    if (link) {
        return (
            <SecondaryButtonStyle as="a" href={link} {...commonProps}>
                {label}
            </SecondaryButtonStyle>
        );
    }
    return (
        <SecondaryButtonStyle type="button" {...commonProps}>
            {label}
        </SecondaryButtonStyle>
    );
}

export default SecondaryButton;
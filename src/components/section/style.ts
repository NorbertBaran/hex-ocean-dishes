import sectionImg from "../../assets/section.png";

export const section = {
    height: "84px",
    display: "flex",
    alignItems: "center",
    position: "relative",
    left: 0,
    right: 0,
    '&::after': {
        content: "' '",
        position: "absolute",
        display: "block",
        borderTop: `2px dotted #d4d4d4`,
        height: 20,
        background: `url(${sectionImg}) bottom right no-repeat`,
        backgroundSize: "contain",
        left: 0,
        right: 0,
        top: 42,
        zIndex: 1
    }
}

export const header = {
    position: "absolute",
    fontSize: "28px",
    background: "#fff",
    paddingRight: "36px",
    zIndex: 2
}
// Lightweight `cn` helper without external dependencies.
export const cn = (...inputs) => {
    return inputs
        .flat()
        .filter(Boolean)
        .join(" ");
};



























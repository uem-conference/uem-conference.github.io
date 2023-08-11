export const hsl = (h, s, l, a=1) => {
    return `hsla(${h}, ${s}%, ${l}%, ${a})`;
};

export const setCSSVariable = (color, name, elemnent)=>{
    elemnent.style.setProperty(name, color)
}


export const handleThemeChange = (color) => {
    localStorage.setItem("color", JSON.stringify(color))

    const root = document.documentElement;
    setCSSVariable(hsl(color.h, color.s, color.l), `--color-primary`, root)
    setCSSVariable(hsl(color.h, color.s, 98), `--color-bg`, root)
    setCSSVariable(hsl(color.h, color.s, color.l-15), `--color-primary-dark`, root)
    setCSSVariable(hsl(color.h, color.s, color.l+15), `--color-primary-light`, root)
    setCSSVariable(hsl(color.h, color.s, 5), `--color-dark`, root)
    setCSSVariable(hsl(color.h, color.s, 95), `--color-light`, root)

};
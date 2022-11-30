<<<<<<< HEAD
function isCurrent(dom) {
    const vWidth = window.innerWidth || document.documentElement.clientWidth;
    // const vHeight = window.innerHeight || document.documentElement.clientHeight;

    const { top } = dom.getBoundingClientRect();
    return (top < vWidth / 4);
}

=======
function isCurrent(dom) {
    const vWidth = window.innerWidth || document.documentElement.clientWidth;
    // const vHeight = window.innerHeight || document.documentElement.clientHeight;

    const { top } = dom.getBoundingClientRect();
    return (top < vWidth / 4);
}

>>>>>>> 8d228f5811087b128ef47b6d5cb5ac16c9e3822c
export default isCurrent;
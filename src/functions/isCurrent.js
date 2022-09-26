function isCurrent(dom) {
    const vWidth = window.innerWidth || document.documentElement.clientWidth;
    // const vHeight = window.innerHeight || document.documentElement.clientHeight;

    const { top } = dom.getBoundingClientRect();
    return (top < vWidth / 4);
}

export default isCurrent;
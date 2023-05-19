function subText(text) {
    if(text[40] === ".") {
        return text.substring(0, 40);
    } else {
        return text.substring(0, 37) + "...";
    }
}

export default subText;
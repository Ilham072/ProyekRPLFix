function SubTextTable(text) {
    if(text[20] === ".") {
        return text.substring(0, 20);
    } else {
        return text.substring(0, 17 ) + "...";
    }
}

export default SubTextTable;
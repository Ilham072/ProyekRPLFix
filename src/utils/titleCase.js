function toTitleCase(str=false) {
    if (!str) {
      return "";
    }
    return str.toLowerCase().replace(/(?:^|\s)\w/g, function(match) {
      return match.toUpperCase();
    });
}

export default toTitleCase;
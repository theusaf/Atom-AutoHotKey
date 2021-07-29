const data = require("../data/autohotkey");

class Provider {

  constructor() {

    this.selector = ".source.atom-ahk";
    this.disableForSelector = ".source.atom-ahk .comment";
    this.inclusionPriority = 1;
    this.suggestionPriority = 2;
    this.filterSuggestions = true;

  }

  getSuggestions(options) {
    const {editor, bufferPosition} = options,
      prefix = getPrefix(editor, bufferPosition);
  }

  getPrefix(editor, bufferPosition) {
    const line = editor.getTextInRange([[bufferPosition.row, 0], bufferPosition]);
    return line;
  }

  getCurrentWord(line) {
    
  }

}

module.exports = Provider;
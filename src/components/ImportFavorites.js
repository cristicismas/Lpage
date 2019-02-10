import React, { Component } from 'react';

export class ImportFavorites extends Component {
  importFavorites(file) {
    const { favoriteWebsites } = this.props;

    const importedFile = document.getElementById('import-file-input').files[0];
    let importedFavorites = '';

    const fileReader = new FileReader();

    fileReader.onload = () => {
      importedFavorites = fileReader.result;

      try {
        const newFavorites = JSON.parse(importedFavorites);

        const allFavorites = [...favoriteWebsites];

        for (const website of newFavorites) {
          allFavorites.push(website);
        }

        this.props.changeState('favoriteWebsites', allFavorites);
      } catch (err) {
        alert('The selected file is corrupted. Please choose another file or export again.');
      }
    };

    fileReader.readAsText(importedFile);
  }

  chooseFile() {
    document.getElementById('import-file-input').click();
  }

  render() {
    return (
      <button id='import-btn' onClick={() => this.chooseFile()}>
        Import Favorites &#x21d3;
        <input
          id='import-file-input'
          type='file'
          accept='text/plain'
          onChange={() => this.importFavorites()}
        />
      </button>
    );
  }
}

export default ImportFavorites;

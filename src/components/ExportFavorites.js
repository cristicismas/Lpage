import React, { Component } from 'react';

export class ExportFavorites extends Component {
  exportFavorites() {
    const { favoriteWebsites } = this.props;

    const favoritesToExport = JSON.stringify(favoriteWebsites);
    const blob = new Blob([favoritesToExport], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.href = url;
    a.download = 'favoriteWebsites.txt';
    a.click();
    window.URL.revokeObjectURL(url);
  }

  render() {
    return (
      <button id='export-btn' onClick={() => this.exportFavorites()}>
        Export Favorites &#x21d1;
      </button>
    );
  }
}

export default ExportFavorites;

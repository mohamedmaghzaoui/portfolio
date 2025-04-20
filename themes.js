// theme-switcher.js

document.addEventListener('DOMContentLoaded', function () {
    const themeSelector = document.getElementById('themeSelector');
    const themeLink = document.getElementById('themeStylesheet');
  
    const themes = {
      default: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
      flatly: "https://cdn.jsdelivr.net/npm/bootswatch@5.3.2/dist/flatly/bootstrap.min.css",
      sketchy: "https://cdn.jsdelivr.net/npm/bootswatch@5.3.2/dist/sketchy/bootstrap.min.css",
      minty: "https://cdn.jsdelivr.net/npm/bootswatch@5.3.2/dist/minty/bootstrap.min.css",
      darkly: "https://cdn.jsdelivr.net/npm/bootswatch@5.3.2/dist/darkly/bootstrap.min.css",
      
      zephyr: "https://cdn.jsdelivr.net/npm/bootswatch@5.3.2/dist/zephyr/bootstrap.min.css"
    };
    
    const savedTheme = localStorage.getItem('selectedTheme') || 'default';
    if (themeLink) {
      themeLink.setAttribute('href', themes[savedTheme]);
    }
  
    if (themeSelector) {
      themeSelector.value = savedTheme;
  
      themeSelector.addEventListener('change', function () {
        const selectedTheme = this.value;
        if (themeLink) {
          themeLink.setAttribute('href', themes[selectedTheme]);
          localStorage.setItem('selectedTheme', selectedTheme);
        }
      });
    }
  });
  
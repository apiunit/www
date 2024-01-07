document.addEventListener('DOMContentLoaded', () => {
  fetch('project.yaml')
    .then(response => response.text())
    .then(yamlText => {
      const projectProgress = jsyaml.load(yamlText);
      displayProgress(projectProgress);
    })
    .catch(error => {
      console.error('Error loading the YAML file:', error);
    });
});

function displayProgress(progressData) {
  const container = document.getElementById('progress-container');
  container.textContent = JSON.stringify(progressData, null, 2);
}

// Função para abrir o pop-up de premium
document.getElementById('premium-icon').addEventListener('click', function() {
  document.getElementById('premium-popup').style.display = 'flex';
});

// Função para fechar qualquer pop-up
document.querySelectorAll('.popup .close').forEach(function(closeButton) {
  closeButton.addEventListener('click', function() {
      closeButton.closest('.popup').style.display = 'none';
  });
});

// Função para abrir o pop-up de configurações
document.querySelector('.settings-icon').addEventListener('click', function() {
  document.getElementById('settings-popup').style.display = 'flex';
  document.querySelectorAll('.settings-option').forEach(function(opt) {
      opt.classList.remove('active');
  });
  document.querySelectorAll('.settings-content').forEach(function(content) {
      content.classList.remove('active');
  });
  const appearanceOption = document.querySelector('.settings-option[data-target="appearance-content"]');
  appearanceOption.classList.add('active');
  document.getElementById('appearance-content').classList.add('active');
});

// Função para gerenciar a seleção das opções de configurações
document.querySelectorAll('.settings-option').forEach(function(option) {
  option.addEventListener('click', function() {
      if (!option.classList.contains('active')) {
          document.querySelectorAll('.settings-option').forEach(function(opt) {
              opt.classList.remove('active');
          });
          document.querySelectorAll('.settings-content').forEach(function(content) {
              content.classList.remove('active');
          });
          option.classList.add('active');
          document.getElementById(option.getAttribute('data-target')).classList.add('active');
      }
  });
});

// Seleciona o primeiro item por padrão ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
  const firstOption = document.querySelector('.settings-option[data-target="appearance-content"]');
  const firstContent = document.getElementById(firstOption.getAttribute('data-target'));
  firstOption.classList.add('active');
  firstContent.classList.add('active');
  
  // Atualiza o horário atual
  function updateTime() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      document.getElementById('current-time').textContent = `${hours}:${minutes}:${seconds}`;
  }

  updateTime();
  setInterval(updateTime, 1000);
});

// Função para redirecionar para a seção "About" dentro das configurações
document.getElementById('menu-about').addEventListener('click', function() {
  document.getElementById('settings-popup').style.display = 'flex';
  document.querySelectorAll('.settings-option').forEach(function(opt) {
      opt.classList.remove('active');
  });
  document.querySelectorAll('.settings-content').forEach(function(content) {
      content.classList.remove('active');
  });
  const aboutOption = document.querySelector('.settings-option[data-target="about-content"]');
  aboutOption.classList.add('active');
  document.getElementById('about-content').classList.add('active');
});

// Função para mostrar o botão de download quando qualquer texto for inserido
document.getElementById('link-input').addEventListener('input', function() {
  const downloadButton = document.getElementById('download-button');
  if (this.value.trim() !== '') {
      downloadButton.style.display = 'block';
  } else {
      downloadButton.style.display = 'none';
  }
});

// Função para colar o conteúdo do clipboard no campo de entrada de links
document.getElementById('paste-icon').addEventListener('click', async function() {
  try {
      const text = await navigator.clipboard.readText();
      document.getElementById('link-input').value = text;
      // Trigger input event to show the download button
      document.getElementById('link-input').dispatchEvent(new Event('input'));
  } catch (err) {
      console.error('Failed to read clipboard contents: ', err);
  }
});

// API

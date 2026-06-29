document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const resultContainer = document.getElementById('result');

  if (!form || !resultContainer) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    resultContainer.innerHTML = '';

    const formData = new FormData(form);
    const body = new URLSearchParams();
    for (const [key, value] of formData.entries()) {
      body.append(key, value.trim());
    }

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.error || 'Unable to calculate area');
      }

      const data = await response.json();
      resultContainer.innerHTML = `
        <div class="result-card">
          <p class="result-label">Your calculated area</p>
          <p class="result-value">${data.area}</p>
          <p class="result-message">${data.message}</p>
        </div>
      `;
    } catch (error) {
      resultContainer.innerHTML = `
        <div class="result-card result-error">
          <p>${error.message}</p>
        </div>
      `;
    }
  });
});

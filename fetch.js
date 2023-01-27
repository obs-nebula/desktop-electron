const button = document.getElementById('btn');
const result = document.getElementById('result');

button.addEventListener('click', async () => {
  try {
    const res = await fetch('http://localhost:8080');
    const text = await res.text();
    result.innerText = text;
  } catch (e) {
    console.log(e);
  }
});
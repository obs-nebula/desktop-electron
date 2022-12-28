const button = document.getElementById('btn');
const result = document.getElementById('result');

button.addEventListener('click', async () => {
  try {
    const res = await fetch('http://localhost:5000/express_backend');
    const json = await res.json();
    result.innerText = JSON.stringify(json);
  } catch (e) {
    console.log(e);
  }
});
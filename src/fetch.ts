import { error } from 'console';

const button1 = document.getElementById('btn');
const result1 = document.getElementById('result');

const button2 = document.getElementById('btn2');
button2!.style.display = 'none';
const result2 = document.getElementById('result2');

button1?.addEventListener('click', async () => {
  try {
    const res = await await fetch('http://localhost:8080', {
      method: 'POST',
      body: JSON.stringify({ value: 0 }),
      headers: { 'Content-Type': 'application/json' },
    });
    const json = await res.json();
    result1!.innerText = `Got ${JSON.stringify(json)} from Function One`;
    button2!.style.display = 'block';
  } catch (err) {
    error(err);
  }
});

button2?.addEventListener('click', async () => {
  try {
    const res = await await fetch('http://localhost:8084');
    const json = await res.json();
    result2!.style.display = 'block';
    result2!.innerText = `Got ${json.value} from Function Five`;
  } catch (err) {
    error(err);
  }
});

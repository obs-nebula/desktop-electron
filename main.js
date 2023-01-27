const opentelemetry = require('@opentelemetry/api');
const { BasicTracerProvider, ConsoleSpanExporter, SimpleSpanProcessor } = require('@opentelemetry/sdk-trace-base');
const { app, BrowserWindow } = require('electron');

const provider = new BasicTracerProvider();
provider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));
provider.register();

const createWindow = () => {
  const span = opentelemetry.trace.getTracer('default').startSpan('createWindow');
  const win = new BrowserWindow({
    width: 800,
    height: 600
  });
  win.loadFile('index.html');
  span.end();
}

app.whenReady().then(() => {
  createWindow();
});

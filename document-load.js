const { Resource } = require('./node_modules/@opentelemetry/resources');
const { SemanticResourceAttributes } = require('./node_modules/@opentelemetry/semantic-conventions');
const { SimpleSpanProcessor, WebTracerProvider } = require('./node_modules/@opentelemetry/sdk-trace-web');
const { FetchInstrumentation } = require('./node_modules/@opentelemetry/instrumentation-fetch');
const { ZoneContextManager } = require('./node_modules/@opentelemetry/context-zone');
const { registerInstrumentations } = require('./node_modules/@opentelemetry/instrumentation');
const { OTLPTraceExporter } = require('./node_modules/@opentelemetry/exporter-trace-otlp-http');

const resource = new Resource({
  [SemanticResourceAttributes.SERVICE_NAME]: process.env.npm_package_name
});

const exporter = new OTLPTraceExporter();

const provider = new WebTracerProvider({ resource: resource });
provider.addSpanProcessor(new SimpleSpanProcessor(exporter));

provider.register({
  contextManager: new ZoneContextManager()
});

registerInstrumentations({
  instrumentations: [
    new FetchInstrumentation()
  ],
});

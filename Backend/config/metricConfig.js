// config/metricMonitorConfig.js

const metricMonitorConfig = {
  enabled: true, // Set to true to enable metric monitoring
  endpoint: '/metrics', // Endpoint to expose metrics
  prefix: 'backend', // Prefix for metric names
};

module.exports = metricMonitorConfig;

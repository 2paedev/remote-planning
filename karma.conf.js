// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

/* eslint-disable import/no-extraneous-dependencies, global-require, @typescript-eslint/no-var-requires, func-names */

const jsdom = require('jsdom');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    browsers: ['jsdom'],
    plugins: [
      require('karma-jasmine'),
      require('karma-jsdom-launcher'),
      require('karma-coverage'),
      require('karma-spec-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
    ],
    coverageReporter: {
      check: {
        global: {
          statements: 80,
          branches: 80,
          functions: 80,
          lines: 80,
        },
        each: {
          statements: 80,
          branches: 80,
          functions: 80,
          lines: 80,
        },
      },
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage'),
      reports: ['lcovonly', 'text', 'text-summary', 'html'],
      fixWebpackSourcePaths: true,
    },
    jsdomLauncher: {
      resources: new jsdom.ResourceLoader({
        userAgent: 'Unit Tests Browser',
      }),
    },
    specReporter: {
      maxLogLines: 5,
      supressErrorSummary: false,
      showSpecTiming: false,
    },
    reporters: ['spec', 'coverage'],
    colors: true,
    logLevel: config.LOG_INFO,
    singleRun: true,
    preprocessors: {
      'src/**/!(*spec|*mock).js': ['coverage'],
    },
  });
};

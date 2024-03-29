const { join } = require("path");
const platform = require("os").platform();
const arch = require("os").arch();

const defaultDir = join(process.cwd(), "storage", "ngrok");
const bin = platform === "win32" ? "ngrok.exe" : (arch == "arm64" ? "ngrok-arm64" : "ngrok");
const ready = /starting web service.*addr=(\d+\.\d+\.\d+\.\d+:\d+)/;
const inUse = /address already in use/;

module.exports = {
  defaultDir,
  bin,
  ready,
  inUse,
};

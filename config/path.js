const path = require('path');

const CURRENT_PATH = path.resolve(__dirname); // 获取到当前目录
const ROOT_PATH = path.join(__dirname, '../'); // 项目根目录
const MODULES_PATH = path.join(ROOT_PATH, './node_modules'); // node包目录
const BUILD_PATH = path.join(ROOT_PATH, './build/src'); // 最后输出放置公共资源的目录
const ENTRY_PATH = path.join(ROOT_PATH, './src/entries'); // webpack入口文件

module.exports = {
  ROOT_PATH,
  BUILD_PATH,
  CURRENT_PATH,
  ENTRY_PATH
};

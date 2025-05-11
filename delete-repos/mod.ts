#!/usr/bin/env zx

import { $ } from "zx";
import readline from "readline";

const username = "xiamu14";
// ✅ 直接在这里定义要删除的仓库（格式：owner/repo）
const repos = [
  "aform",
  "cat-account-book-app",
  "template-typescript",
  "cat-account-book-server",
  "react-flow-control",
  "chili-request",
  "feather-pen",
  "phasejs",
  "flowai",
];

// ✅ 打印删除列表
console.log("\nThe following repositories will be deleted:");
repos.forEach((repo) => console.log(`  - ${username}/${repo}`));

// ✅ 确认操作
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const confirm = await new Promise<string>((resolve) => {
  rl.question(
    "\nAre you sure you want to delete all of them? (y/n): ",
    resolve
  );
});

rl.close();

if (confirm.trim().toLowerCase() !== "y") {
  console.log("❌ Cancel.");
  process.exit(1);
}

// ✅ 逐个删除
for (const repo of repos) {
  console.log(`\nDeleting ${username}/${repo}...`);
  await $`gh repo delete ${username}/${repo} --yes`;
}

console.log("\n✅ All listed repositories deleted.");

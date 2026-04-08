#!/bin/bash
# Level 99 WASM & Engine Pro
# Purpose: Scaffold a high-speed Rust/WASM project.
# Usage: ./wasm-init.sh <project-name>

PROJECT=$1

if [ -z "$PROJECT" ]; then
    echo "Usage: ./wasm-init.sh <project-name>"
    exit 1
fi

echo "🦀 Initializing Rust-to-WASM Core: $PROJECT..."

# 1. Check for wasm-pack
if ! command -v wasm-pack &> /dev/null; then
    echo "❌ wasm-pack not found. Please install: curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh"
    exit 1
fi

# 2. Scaffold Rust Library
mkdir -p "$PROJECT" && cd "$PROJECT"
cargo new --lib .

# 3. Add WASM Configuration to Cargo.toml
cat <<EOF > Cargo.toml
[package]
name = "$PROJECT"
version = "0.1.0"
authors = ["Vanguard Architect"]
edition = "2021"

[lib]
crate-type = ["cdylib", "rlib"]

[dependencies]
wasm-bindgen = "0.2"

[profile.release]
# Optimize for size and performance
opt-level = "s"
lto = true
EOF

# 4. Create Sample Rust Logic
cat <<EOF > src/lib.rs
use wasm_bindgen::prelude::*;

@wasm_bindgen
pub fn add_fast(a: i32, b: i32) -> i32 {
    a + b
}

@wasm_bindgen
pub fn compute_heavy_logic(data: Vec<u8>) -> Vec<u8> {
    // High-performance CPU logic here
    data.into_iter().map(|x| x.wrapping_add(1)).collect()
}
EOF

echo "✅ Project Scaffolded! Use 'wasm-pack build --target web' to compile for the browser."
echo "🚀 Target: Near-native speed achieved."

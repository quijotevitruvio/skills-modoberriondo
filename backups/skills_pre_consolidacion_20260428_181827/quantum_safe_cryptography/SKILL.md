# [ES] Criptografía Cuántico-Segura
# [EN] Quantum Safe Cryptography

[ES] Protección de datos contra vulnerabilidades de computación cuántica.
[EN] Data protection against quantum computing vulnerabilities.


## 🔑 PQC Algorithms (NIST Standards)
- **Kyber / ML-KEM**: Implementing lattice-based key encapsulation mechanisms for secure key exchange.
- **Dilithium / ML-DSA**: Advanced digital signatures using "Module Learning with Errors" over lattices.
- **Sphincs+ / Falcon**: Stateless hash-based and NTRU-lattice digital signature architectures.

## 🛡️ Transition Strategies
- **Hybrid Cryptography**: Orchestrating a transition where classical RSA/ECC works alongside PQC to ensure backward compatibility and quantum resistance.
- **Protocol Hardening (TLS 1.3 / SSH)**: Upgrading communication protocols to support PQC algorithms in transit.

## ⚙️ Hardware & Software Libraries
- **Openssl 3.x / Liboqs Integration**: Integrating post-quantum libraries into the modern dev stack.
- **Hardware Acceleration (H-PQC)**: Exploiting CPU instructions for faster PQC lattice operations.
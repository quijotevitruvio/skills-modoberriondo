# [ES] Seguridad de Contratos Inteligentes
# [EN] Blockchain Smart Contract Security

[ES] Auditoría y blindaje de lógica en cadena para evitar vulnerabilidades.
[EN] On-chain logic auditing and hardening to prevent vulnerabilities.


## [!IMPORTANT] The Golden Rule of Blockchain
- **Code is Law**: A deployed smart contract is immutable. A single bug (e.g. Reentrancy) can drain an entire treasury. Audit THREE times before deployment.
- **Gas Optimization**: Every opcode costs "Gas" (real money). Optimize your storage layouts (SSTORE) and loops to reduce transaction costs by 40%+.
- **Decentralization Trade-Offs**: Only store critical "Truth" on-chain. Off-load heavy data to IPFS or Arweave to prevent network congestion.

## 🛠️ Level 99 Automation (Patterns)
- **Safe Remote Execution (Internal Call)**: Use `check-effects-interactions` pattern to prevent reentrancy attacks.
- **Off-Chain Oracle Logic (Chainlink)**: Bring real-world data (Price feeds, weather, sports) into the contract without sacrificing trust.
- **Proxy Patterns (Upgradability)**: Use OpenZeppelin's UUPS or Transparent Proxy patterns to fix bugs in "Immutable" code after deployment.

## Command Library (Execution & Auditing)
> [!NOTE]
> Use these to develop and audit your decentralized apps instantly.

- **Fast Audit with Slither (Static Analysis)**:
  ```bash
  (Using Python/Docker) slither . --print human-summary
  ```
- **Fuzz Testing with Foundry**:
  ```bash
  forge test --fuzz-runs 1000
  ```
- **EVM Storage Layout Check**:
  ```bash
  npx -y sol2uml storage MyContract.sol
  ```

## Advanced Techniques
- **Layer 2 Scaling (Arbitrum/Optimism)**: Deploy contracts on L2 for 100x lower fees and near-instant finality.
- **Zero-Knowledge Proofs (zk-SNARKs)**: Enable "Privacy-on-Chain" where a user can prove they know a secret without revealing it.
- **Flash Loans**: Use million-dollar temporary capital for arbitrage or liquidation scripts within a single transaction block.

## Actionable Script: Contract Audit Pro
- **[contract-audit.sh](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/blockchain_smart_contract_security/scripts/contract-audit.sh)**: A shell script to run static analysis (Slither) and dependency audits on your Solidity project.

## Inter-Skill Integration
- **With Cybersecurity Hardening**: Blockchain security is the "Red Team" final boss. Apply pen-testing logic to your contract interfaces.
- **With Payment Engineering**: Bridge traditional Stripe/Fiat logic with on-chain Stablecoin (USDC/USDT) settlements.
- **With n8n**: Connect your smart contract events to a Discord/WhatsApp alert system using the Web3 node.
# [ES] Fundamentos de Cómputo Cuántico
# [EN] Quantum Computing Foundations

[ES] Teoría y aplicación básica de la próxima frontera del procesamiento.
[EN] Theory and basic application of the next processing frontier.


## [!IMPORTANT] The Golden Rule of Quantum Computation
- **Probabilistic Over Deterministic**: Quantum computing doesn't give a "Single Answer" but a probability distribution. Run every circuit multiple times (Shots) to converge on the most likely result.
- **No-Cloning Theorem**: You cannot "copy" a quantum state. This is a fundamental law of physics that dictates how information is moved in a quantum circuit.
- **Coherence & Noise**: Real-world quantum computers (NISQ devices) are noisy. Aim for "Circuit Depth" that is as short as possible to prevent decoherence during execution.

## 🛠️ Level 99 Automation (Patterns)
- **Superposition State (Hadamard Gate)**: Place a qubit in a state where it is 50/50 both 0 and 1 simultaneously.
- **Entanglement (CNOT Gate)**: Link two qubits such that the state of one instantly defines the state of the other, regardless of distance.
- **Quantum Phase Estimation (QPE)**: A core building block for Shor's and other high-level algorithms for factoring and simulation.

## Command Library (Execution & Simulation)
> [!NOTE]
> Use these to initialize and simulate quantum circuits locally.

- **Check Quantum Hardware Availability (IBM Quantum)**:
  ```python
  (Using Qiskit) from qiskit_ibm_runtime import QiskitRuntimeService; service = QiskitRuntimeService()
  ```
- **Simulate a Circuit (Local Aer)**:
  ```python
  (In Python) simulator = Aer.get_backend('qasm_simulator'); result = execute(circuit, simulator).result()
  ```
- **Visualize a Quantum Bloch Sphere**:
  ```python
  (In Python) from qiskit.visualization import plot_bloch_multivector; plot_bloch_multivector(state)
  ```

## Advanced Techniques
- **Variational Quantum Eigensolver (VQE)**: Hybrid quantum-classical optimization for chemical and molecular simulations.
- **Quantum Grover Search**: Quadratic speedup for searching unstructured databases.
- **Error Mitigation (ZNE)**: Zero-Noise Extrapolation techniques to run useful work on current noisy hardware.

## Actionable Script: Quantum Circuit Init
- **[quantum-circuit-init.py](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/quantum_computing_foundations/scripts/quantum-circuit-init.py)**: A high-level Python script to initialize and simulate a basic Bell-state entanglement circuit.

## Inter-Skill Integration
- **With AI Engineering**: Preparing for "Quantum AI" where quantum kernels can speed up machine learning training cycles.
- **With Cybersecurity**: Understanding Quantum-Resistant Cryptography (Post-Quantum Crypto) to protect current data against future Shor's algorithm attacks.
- **With Engine Core Performance**: This is the "Sub-Atomic" layer of computing power.
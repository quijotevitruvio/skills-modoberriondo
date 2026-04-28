# [ES] Maestría en Arquitectura de Sistemas
# [EN] System Architecture Mastery

[ES] Planificación berraca de grandes ecosistemas digitales.
[EN] Powerful planning of large digital ecosystems.


## [!IMPORTANT] The Golden Rule of Architecture
- **Keep it Simple, Stupid (KISS)**: Don't build a microservice architecture if a well-structured Monolith (the "Monolith First" pattern) can handle your initial traffic.
- **Dependency Inversion**: High-level modules should not depend on low-level modules; both should depend on abstractions (Interfaces).
- **Security by Design**: Architecture should ensure that even if one component is compromised, the data isolation (via VPCs and IAM) prevents lateral movement.

## 🛠️ Level 99 Automation (Patterns)
- **The "Clean Architecture" Layer**: Separate your "Domain Logic" from "Framework Logic" (Express/React). This allows you to swap databases or UI frameworks without touching the core business rules.
- **Event-Driven Workflows (Pub/Sub)**: Use Redis or BullMQ to decouple heavy tasks (e.g. Image processing, Email sending) from the main request thread for sub-100ms response times.
- **Distributed Tracing**: Implement OpenTelemetry or X-Ray to track the journey of a single request across multiple services (e.g. Auth -> CRM -> Stripe).

## Command Library (Design & Execution)
> [!NOTE]
> Use these within your architectural planning docs or Mermaid diagrams.

- **Check for Circular Dependencies (Node.js)**:
  ```bash
  (Using madge) npx madge --circular src/
  ```
- **Audit Complexity (Halstead/McCabe Metrics)**:
  ```bash
  (Using sloc) npx sloc src/ --format cli
  ```
- **Design Review Checklist (DRY/SOLID)**:
  ```bash
  (Using Architectural Blueprint) Analyze every new module before starting the code.
  ```

## Advanced Techniques
- **CQRS (Command Query Responsibility Segregation)**: Separate your "Write" operations from your "Read" operations to scale them independently.
- **Domain-Driven Design (DDD)**: Align your code structure with the actual "Business Domain" (e.g. a "Deal" in the CRM is a first-class entity).
- **Service Mesh (Istio/Linkerd)**: Manage complex microservice communication, retries, and security at the network layer.

## Actionable Script: Architectural Blueprint
- **[arch-blueprint.md](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/system_architecture_mastery/scripts/arch-blueprint.md)**: A master template for architecting a new "SkillsLocal" project, ensuring all Level 99 skills are integrated from Day 1.

## High Availability & Disaster Recovery (HA/DR)
- **Multi-Region Failover**: Design your system to automatically switch from AWS US-East-1 to US-West-2 in case of a regional outage.
- **Circuit Breaker Pattern**: If an external service (e.g. Stripe or a Vector DB) is failing, the system should gracefully "trip" the circuit and use a fallback or return a cached response instead of hanging.
- **RPO/RTO Targets**: Define your Recovery Point Objective (how much data can we lose?) and Recovery Time Objective (how fast must we be back up?).

## Actionable Script: Disaster Recovery Plan
- **[disaster-recovery-blueprint.md](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/system_architecture_mastery/scripts/disaster-recovery-blueprint.md)**: A high-level operational guide to handling catastrophic infrastructure failure.

## Inter-Skill Integration
- **With Docker & Cloud**: Architecture is the "Brain" that decides how Docker containers and AWS/GCP resources are linked.
- **With Performance Engineering**: Use the "100ms Goal" as the primary metric for architectural decisions.
- **With Cybersecurity**: Implement "Defense in Depth" (multiple layers of security) at the architectural level.
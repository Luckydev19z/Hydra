# Feline Framework - A Framework designed for memecoins

<div align="center">
  <img src="https://your-image-link-here.com/feline-framework.png" width="100%" />
</div>

## Table of Contents
- [Overview](#overview)
- [Core Features](#core-features)
- [Extension Points](#extension-points)
- [Quick Start](#quick-start)
- [Using Feline Framework as a Module](#using-feline-framework-as-a-module)

## Overview
Feline Framework is a modular AI system designed with TypeScript, Rust, and Go, providing a scalable foundation for AI-powered applications. It features:

- Plugin-based architecture with interchangeable components
- Multi-provider LLM support (GPT-4, Claude, and custom providers)
- Cross-platform AI agent management
- Extensible behavior-driven management system
- Vector-based semantic memory with pgvector integration

## Core Features

### Plugin Architecture
- **Manager System:** Extend functionality with custom managers:
  - **Memory Manager:** Captures and organizes contextual interactions
  - **Personality Engine:** Adapts AI responses based on historical interactions
  - **Custom Managers:** Define unique behaviors for specialized AI workflows

### State Management
- **Unified State System:** Centralized AI state management:
  - Seamless communication across managers
  - Inject custom data into processing pipelines
  - Persistent AI memory for long-term context retention

### LLM Integration
- **Multi-Provider Support:** Switch between different AI providers:
  - Built-in support for GPT-4, Claude, and open-source models
  - Custom provider interfaces for flexibility
  - Configurable model selection with automatic fallback

### Platform Compatibility
- **Cross-Platform Core:**
  - CLI and API interfaces included
  - Custom platform integrations via an extensible plugin system

### Memory & Storage Layer
- **Semantic Memory Engine:**
  - PostgreSQL with pgvector for vector-based AI memory
  - Flexible storage solutions for different use cases
  - Support for embedding vectors for advanced semantic search

### Tool & Function System
- **Modular Toolkit Integration:**
  - Extend AI functionality with custom tools
  - Automatic function calling and execution
  - Context-aware tool execution framework

## Extension Points

### 1. LLM Providers
Implement a new AI provider using the LLM interface:
```go
 type Provider interface {
    GenerateCompletion(context.Context, CompletionRequest) (string, error)
    EmbedText(context.Context, string) ([]float32, error)
 }
```

### 2. Managers
Add custom behaviors through the Manager interface:
```go
 type Manager interface {
    GetID() ManagerID
    Process(state *state.State) error
    Context(state *state.State) ([]state.StateData, error)
 }
```

## Quick Start
1. Clone the repository:
```bash
git clone https://github.com/mirroor-labs/feline-framework
```
2. Set up environment variables:
```bash
cp .env.example .env
```
3. Install dependencies:
```bash
npm install
cargo build
go mod download
```
4. Start the framework:
```bash
npm run dev
```

## Environment Variables
```env
DB_URL=postgresql://user:password@localhost:5432/feline
OPENAI_API_KEY=your_openai_api_key
ANTHROPIC_API_KEY=your_anthropic_api_key
```

## Using Feline Framework as a Module
1. Install the package:
```bash
npm install @mirroor/feline-framework
```
2. Import and use in your project:
```typescript
import { Engine, LLMClient, MemoryManager } from '@mirroor/feline-framework';
const llmClient = new LLMClient({
  provider: 'gpt4',
  apiKey: process.env.OPENAI_API_KEY,
});
const engine = new Engine({ llm: llmClient });
const response = await engine.process("Hello, Feline");
```

## Contact
- Website: [mirroor.ai](https://mirroor.ai)
- Email: contact@mirroor.ai
- Twitter: [@mirroor_ai](https://x.com/mirroor_ai)

## License
Licensed under the MIT License.


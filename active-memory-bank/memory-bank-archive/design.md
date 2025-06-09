# Design: `mcp-get-docs.md`

This document outlines the structure for the final reference file that will be created for the user.

## 1. Title
`# MCP-Get Quick Reference Guide`

## 2. Introduction
A brief overview of MCP-Get and its purpose.

## 3. Core Commands
A list of the most frequently used MCP-Get commands.
- `npx @michaellatman/mcp-get --version`
- `npx @michaellatman/mcp-get list`
- `npx @michaellatman/mcp-get install <package-name>`
- `npx @michaellatman/mcp-get uninstall <package-name>`
- `npx @michaellatman/mcp-get installed`
- `npx @michaellatman/mcp-get start <server-name>`
- `npx @michaellatman/mcp-get stop <server-name>`

## 4. Installed Packages and Usage
For each installed package, provide:
- A brief description of its functionality.
- The command to start the server.
- A basic usage example.

### 4.1. `@modelcontextprotocol/server-sqlite`
- **Description:** ...
- **Start Command:** `npx @michaellatman/mcp-get start @modelcontextprotocol/server-sqlite`
- **Example:** ...

### 4.2. `@modelcontextprotocol/server-youtube-transcript`
- **Description:** ...
- **Start Command:** `npx @michaellatman/mcp-get start @modelcontextprotocol/server-youtube-transcript`
- **Example:** ...

### 4.3. `saleshandyikmcp`
- **Description:** ...
- **Start Command:** `npx @michaellatman/mcp-get start saleshandyikmcp`
- **Example:** ...

## 5. Configuration
- Explanation of the `mcp-servers.json` file.
- Example configuration for connecting to an AI assistant.

## 6. Troubleshooting
- Common issues (e.g., permission errors, path problems).
- Steps to resolve them.

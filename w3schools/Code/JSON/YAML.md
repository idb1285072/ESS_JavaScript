# 📘 YAML (YAML Ain't Markup Language)

## Overview

**YAML** is a human-readable, data serialization format commonly used for configuration files, data exchange, and settings. It emphasizes simplicity and readability, making it popular in DevOps, configuration management, and software projects.

---

## Key Characteristics

* **Human-friendly syntax** with minimal punctuation
* Uses **indentation** to denote structure (similar to Python)
* Supports complex data types: scalars, sequences (arrays), mappings (objects)
* Allows comments using `#`
* More concise and readable compared to XML and JSON
* Supports multiple documents in a single file separated by `---`

---

## Basic Syntax

### Scalars (Strings, Numbers, Booleans)

```yaml
name: John Doe
age: 30
active: true
```

### Sequences (Arrays)

```yaml
colors:
  - red
  - green
  - blue
```

### Mappings (Objects)

```yaml
address:
  street: 123 Main St
  city: Springfield
  zip: 12345
```

---

## Advantages over JSON

* Supports comments
* More readable with less syntax noise (no quotes or braces required)
* Supports references and anchors for reuse
* Can represent complex data structures more naturally

---

## Common Use Cases

* Configuration files (e.g., Docker Compose, Kubernetes manifests, GitHub Actions)
* Data exchange in DevOps and CI/CD pipelines
* Application settings and metadata

---

## Limitations

* Sensitive to indentation errors
* Parsing can be slower than JSON
* Less widely supported in some programming environments

---

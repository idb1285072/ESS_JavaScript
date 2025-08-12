# 📘 XML (eXtensible Markup Language)

## Overview

**XML** is a markup language designed to store and transport data in a platform-independent and human-readable format. It uses custom tags to define objects and data structure, enabling self-describing and hierarchical data representation.

---

## Key Characteristics

* Text-based, both human and machine-readable
* Uses **tags** with opening and closing elements (e.g., `<tag>...</tag>`)
* Supports nested and hierarchical data structures
* Allows attributes within tags for metadata
* Extensible: users define their own tags and document structure
* Supports comments `<!-- Comment -->`
* Widely used in legacy systems, configuration, and document formats (e.g., SOAP, RSS)

---

## Basic Syntax

```xml
<person>
  <name>John Doe</name>
  <age>30</age>
  <email>john@example.com</email>
</person>
```

---

## Comparison to JSON

| Feature        | XML                         | JSON                                  |
| -------------- | --------------------------- | ------------------------------------- |
| Syntax         | Verbose with tags           | Lightweight, key-value pairs          |
| Readability    | Less readable, more markup  | More concise and readable             |
| Data types     | Text only, needs parsing    | Native data types (numbers, booleans) |
| Comments       | Supported (`<!-- -->`)      | Not supported                         |
| Hierarchy      | Strong hierarchical support | Hierarchical but simpler              |
| Schema Support | Extensive (XSD, DTD)        | Schema possible but simpler           |

---

## Common Use Cases

* Document formats (e.g., Microsoft Office files)
* Web services (SOAP APIs)
* Configuration files in legacy systems
* Data exchange in enterprise applications

---

## Limitations

* Verbose and can be bulky compared to JSON/YAML
* More complex to parse and manipulate
* Less popular in modern web APIs compared to JSON

---
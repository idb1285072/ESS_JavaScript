# HTTP Status Code

### **1xx – Informational**

- **100 Continue** → Client should continue sending request body (used with large uploads).

---

### **2xx - Success**

- **200 OK** → Successful GET/PUT/PATCH/DELETE; returns data.
- **201 Created** → POST request created a new resource.
- **204 No Content** → Successful DELETE or PUT with no body returned.

---

### **4xx - Client Errors**

- **400 Bad Request** → Invalid request syntax or parameters.
- **401 Unauthorized** → Authentication required or failed.
- **403 Forbidden** → Authenticated but not allowed.
- **404 Not Found** → Resource doesn’t exist.
- **422 Unprocessable Entity** → Validation error on request data.
- **429 Too Many Requests** → Rate-limiting triggered.

---

### **5xx - Server Errors**

- **500 Internal Server Error** → Generic server failure.
- **503 Service Unavailable** → Server down or overloaded.
- **504 Gateway Timeout** → Upstream server took too long to respond.

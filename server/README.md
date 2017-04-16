# rest-api-scaffold
spring-boot based on the rest micro service framework

### Data Access Layer

dao use mybatis 3.3.0 & tk.mytabis general Mapper 3.1.3, support for transaction rollbacked

### Web Container

nested tomcat container, open gzip compression by default

### Blog & Monitor

All parameters of the controller layer use the AOP mechanism to log and calculate the service 
time(in milliseconds) automatically

### Parameter Verification

parameter object automaticlly verified by annontions and support custom annontions

### Return The Result

return result of the service as json. If there is an exception in the service layer, 
the errorCode and errorDesc are returned in the result. The execution result and 
service time are returned regardless of whether the server method succeeds or not.

### Browse Address

main class: spring.boot.rest.demo.main.DemoRestApplication. After application started, 
vist http://localhost:8080/ping. 
Generlly, return such as:
```javascript
{
    "data": "running",
    "errorCode": null,
    "errorDesc": null,
    "elapsedMilliseconds": ​0,
    "success": true
}
```

# Usage
fork this core and use idea or ecplise to check out then install the dependency packages.
If operations done as above mentioned, you can just deploy it to a local serve such like tomcat or 
jetty.

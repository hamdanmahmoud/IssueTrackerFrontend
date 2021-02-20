package com.issuetracker.issue.service;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix = "application.api")
@NoArgsConstructor
@Data
public class RestfulConfig {
    private String userMicroserviceEndpoint;
    private String projectMicroserviceEndpoint;
}

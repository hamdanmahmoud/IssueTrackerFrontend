package com.issuetracker.project.service;

import java.util.Map;

import org.springframework.security.core.context.SecurityContextHolder;
import reactor.core.publisher.Mono;
import reactor.util.context.Context;

import org.springframework.security.core.Authentication;
import org.springframework.web.reactive.function.client.ClientRequest;
import org.springframework.web.reactive.function.client.ClientResponse;
import org.springframework.web.reactive.function.client.ExchangeFilterFunction;
import org.springframework.web.reactive.function.client.ExchangeFunction;

public final class RestfulBearerExchangeFilterFunction
        implements ExchangeFilterFunction {

    static final String SECURITY_REACTOR_CONTEXT_ATTRIBUTES_KEY =
            "org.springframework.security.SECURITY_CONTEXT_ATTRIBUTES";

    @Override
    public Mono<ClientResponse> filter(ClientRequest request, ExchangeFunction next) {
        var bt = bearerToken().subscribe(
                token -> {
//                    System.out.println("Bearer token to propagate: " + token);
                }
        );

        return bearerToken()
                .map(token -> bearer(request, token))
                .defaultIfEmpty(request)
                .flatMap(next::exchange);
    }

    private Mono<String> bearerToken() {
        return Mono.subscriberContext().flatMap(this::currentAuthentication)
                .map(Authentication::getCredentials).cast(String.class);
    }

    private Mono<Authentication> currentAuthentication(Context ctx) {
        return Mono.justOrEmpty(getAttribute(ctx, Authentication.class));
    }

    private <T> T getAttribute(Context ctx, Class<T> clazz) {
        // NOTE: SecurityReactorContextConfiguration.SecurityReactorContextSubscriber adds this key
        if (!ctx.hasKey(SECURITY_REACTOR_CONTEXT_ATTRIBUTES_KEY)) {
            return null;
        }
        Map<Class<T>, T> attributes = ctx.get(SECURITY_REACTOR_CONTEXT_ATTRIBUTES_KEY);
        return attributes.get(clazz);
    }

    private ClientRequest bearer(ClientRequest request, String token) {
        return ClientRequest.from(request)
                .headers(headers -> headers.setBearerAuth(token))
                .build();
    }
}

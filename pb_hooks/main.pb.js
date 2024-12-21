/// <reference path="../pb_data/types.d.ts" />

// Health check endpoint
routerAdd("GET", "/api/health", (c) => {
    return c.json(200, {
        status: "healthy",
        timestamp: new Date().toISOString()
    });
});

onRequest((e) => {
    const allowedOrigins = [
        "https://campinho.online",
        "http://localhost:5173",
        "http://localhost:4173"  // para preview local
    ];

    // Verifica se a origem da requisição está na lista de origens permitidas
    const origin = e.headers.get('origin');
    if (origin && allowedOrigins.includes(origin)) {
        e.headers.set('Access-Control-Allow-Origin', origin);
    }

    // Configurações adicionais de CORS
    e.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    e.headers.set('Access-Control-Allow-Headers', 'Authorization, Content-Type');
    e.headers.set('Access-Control-Allow-Credentials', 'true');
    e.headers.set('Access-Control-Max-Age', '1728000');

    // Responde imediatamente a requisições OPTIONS (pre-flight)
    if (e.method === 'OPTIONS') {
        return new Response(null, { status: 204 });
    }
});

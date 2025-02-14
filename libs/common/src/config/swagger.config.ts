import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication, serviceName: string) {
    const options = new DocumentBuilder()
        .setTitle(`${serviceName} API`)
        .setDescription(`API documentation for ${serviceName} service`)
        .setVersion('1.0')
        .addBearerAuth()
        .build();

    const document = SwaggerModule.createDocument(app, options);

    SwaggerModule.setup('api-docs', app, document, {
        swaggerOptions: { persistAuthorization: true },
    });

    console.log(`📄 Swagger API for ${serviceName} is available at /api-docs`);
}

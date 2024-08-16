import fastify from "fastify";
import cors from "@fastify/cors";
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import { create } from "domain";
import { createTrip } from "./routes/create-trip";

const app = fastify();

app.register(cors, {
    origin: '*',
})

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createTrip);

app.listen({ port: 3333 }).then(() => {
    console.log("Server running")
});
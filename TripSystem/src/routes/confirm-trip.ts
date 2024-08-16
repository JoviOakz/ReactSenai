import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { prisma } from "../lib/prisma";

export async function confirmTrip(app: FastifyInstance) {
    app.withTypeProvider<ZodTypeProvider>().get('/trips/:tripId/confirm', {
        schema: {
            params: z.object({
                tripId: z.string().uuid()
            })
        }
    }, async (request, reply) => {
        const { tripId } = request.params;

        const trip = await prisma.trip.findUnique({
            where: {
                id: tripId,
            },
            include: {
                participant: {
                    where: {
                        is_owner: false
                    }
                }
            }
        })

        if (!trip)
            throw new Error('Trip not found.');

        if (trip.is_confirmed)
            return reply.redirect(`http://localhost:3000/trips/${tripId}`)

        await prisma.trip.update({
            where: { id: tripId },
            data: { is_confirmed: true }
        })

        trip.participant

        // const participants = await prisma.participant.findMany({
        //     where: {
        //         tripId : true,
        //         is_owner: false       
        //     }
        // })

        await Promise.all(
            trip.participant.map(async (participant) => {

                const confirmationLink = `http://localhost:3333/participants/${participant.id}/confirm`
            })
        )

        return reply.redirect(`http://localhost:3000/trips/${tripId}`);
    });
}
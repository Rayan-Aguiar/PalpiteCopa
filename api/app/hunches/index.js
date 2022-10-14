import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const create = async ctx => {
    
    if (!ctx.request.body.homeTeamScore && !ctx.request.body.awayTeamScore) {
        ctx.status = 400
        return
    }
    
    try{
        const userId = 'cl97ppt290000kneepj3p68tt'
        const { gameId, homeTeamScore = 0, awayTeamScore = 0 } = ctx.request.body
        
        const hunch = await prisma.hunch.upsert({
            where: { userId, gameId },
            create: { userId, gameId, homeTeamScore, awayTeamScore},
            update: { homeTeamScore, awayTeamScore }
        })

        ctx.body = hunch
        
    } catch(error){
        console.log(error)
        ctx.body = error
        ctx.status = 500
    }

}
import { Controller } from '@nestjs/common';
import { FreelancerService } from './freelancer.service';
import { Prisma } from '@prisma/client';


@Controller('freelancer')
export class FreelancerController {

    constructor( private service: FreelancerService){}

    async createFreelancerHandler(input: Prisma.FreelancerCreateInput) {
        try{
            const freelancer = await this.service.createFreelancer(input);

            return {
                status: 'success',
                data: { 
                    freelancer,
                }
            }

        } 
        
        catch(err: any){
            throw err;
        }
    }

    async readOneFreelancerHandler(input: Prisma.FreelancerWhereUniqueInput, select: Prisma.FreelancerSelect) {
        try{
            const freelancers = await this.service.findUniqueFreelancer(input, select)

            return {
                status: 'success',
                data: { 
                    freelancers,
                }
            }

        }

        catch(err: any){
            throw err;
        }
    }

    async readManyFreelancerHandler(page: number, limit: number) {
        try{
            const freelancers = await this.service.findManyFreelancers(page, limit)

            return {
                status: 'success',
                data: { 
                    freelancers,
                }
            }

        }

        catch(err: any){
            throw err;
        }
    }

    async updateFreelancerHandler(where: Prisma.FreelancerWhereUniqueInput, data: Prisma.FreelancerUpdateInput, select: Prisma.FreelancerSelect) {

        try{
            const freelancer = await this.service.updateFreelancer(where, data, select);

            return {
                status: 'success',
                data: { 
                    freelancer,
                }
            }
        }

        catch(err: any){
            throw err;
        }

    }

    async deleteFreelancerHandler(where: Prisma.FreelancerWhereUniqueInput) {

        try{
            const freelancer = await this.service.deleteFreelancer(where);

            return {
                status: 'success',
                data: { 
                    freelancer,
                }
            }
        }

        catch(err: any){
            throw err;
        }

    }

}

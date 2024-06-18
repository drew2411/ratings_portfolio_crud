import { Injectable } from '@nestjs/common';
import { Prisma, Portfolio } from '@prisma/client';
import { PrismaService } from '@server/prisma/prisma.service';

@Injectable()
export class PortfolioService {
  constructor(private prisma: PrismaService) {}

  // Create a new portfolio
  async createPortfolio(data: Prisma.PortfolioCreateInput): Promise<Portfolio> {
    return this.prisma.portfolio.create({
      data,
    });
  }

  // Get all portfolios
  async getAllPortfolios(): Promise<Portfolio[]> {
    return this.prisma.portfolio.findMany();
  }

  // Get a single portfolio by ID
  async getPortfolioById(portfolioID: string): Promise<Portfolio | null> {
    return this.prisma.portfolio.findUnique({
      where: { portfolioID },
    });
  }

  // Update a portfolio by ID
  async updatePortfolio(portfolioID: string, data: Prisma.PortfolioUpdateInput): Promise<Portfolio> {
    return this.prisma.portfolio.update({
      where: { portfolioID },
      data,
    });
  }

  // Delete a portfolio by ID
  async deletePortfolio(portfolioID: string): Promise<Portfolio> {
    return this.prisma.portfolio.delete({
      where: { portfolioID },
    });
  }
}

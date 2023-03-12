import { PrismaClient } from "@prisma/client";
import { Request, Response, NextFunction } from "express";

require("dotenv").config();

import actionScraperPuppeteer from "../../utils/scraperHelper";

const prisma = new PrismaClient();

const router = require("express").Router();

router.get(
  "/links",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const links = await prisma.link.findMany({});
      res.json(links);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/links:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const link = await prisma.link.findUnique({
        where: {
          id: Number(id),
        },
      });
      res.json(link);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/links",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;

      const imageUrl = await actionScraperPuppeteer(data.link);

      const link = await prisma.link.create({
        data: {
          ...data,
          image: imageUrl,
        },
      });
      res.json(link);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/links/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const deletedLink = await prisma.link.delete({
        where: {
          id: Number(id),
        },
      });
      res.json(deletedLink);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  "/links/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const findLink = await prisma.link.update({
        where: {
          id: Number(id),
        },
        data: req.body,
      });
      res.json(findLink);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;

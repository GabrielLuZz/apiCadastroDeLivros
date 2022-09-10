import { Express } from "express";

declare global {
  declare namespace Express {
    interface Request {
      index?: number;
      id?: string;
    }
  }
}

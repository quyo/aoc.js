import {
  Controller,
  Get,
  Header,
  Param,
  Render,
  Res,
  StreamableFile,
} from "@nestjs/common";
import type { Response } from "express";

import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render("index")
  index() {
    return {};
  }

  @Get(":year/day/:day/")
  problem(
    @Param("year") year: string,
    @Param("day") day: string,
    @Res() response: Response
  ) {
    return response.render(this.appService.getViewName(year, day), {});
  }

  @Get(":year/day/:day/input.txt")
  @Header("Content-Type", "text/plain")
  @Header("Content-Disposition", 'attachment; filename="input.txt"')
  input(
    @Param("year") year: string,
    @Param("day") day: string
  ): StreamableFile {
    const file = this.appService.getInput(year, day);
    return new StreamableFile(file);
  }
}

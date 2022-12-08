import { Injectable } from "@nestjs/common";
import { createReadStream, ReadStream } from "fs";
import path from "path";

@Injectable()
export class AppService {
  getViewName(year: string, day: string): string {
    return `${year}/${day}/index`;
  }

  getInput(year: string, day: string): ReadStream {
    return createReadStream(
      path.join(process.cwd(), `input/${year}/${day}/input.txt`)
    );
  }
}

import { Application } from '../declarations';
import task from './task/task.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application) {
  app.configure(task);
}

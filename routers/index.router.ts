import { PersonController } from "../controllers/person";
import { isAuthenticated } from "../middlewares/auth";
interface dataRequest {
  params?: object;
  data?: any;
}
interface ResponseData {
  status?: string;
  message?: string;
  data?: any;
}
export class Router {
  async Root(token: string, path: string, data: dataRequest) {
    let result: ResponseData = {status: 'failed', message: 'Page not Found'};
    if (!isAuthenticated(token)) {
      result.status = 'failed';
      result.message = 'Authorization token';
      return Response.json(result);
    }
    if (path === "/person/get-list") {
      result.status = 'success';
      result.message = 'get list data person success';
      result.data = await PersonController.prototype.getList();
      return Response.json(result);
    }
    return Response.json(result);
  }
}

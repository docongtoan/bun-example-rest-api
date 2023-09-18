import { PersonController } from "../controllers/person";
import { isAuthenticated } from "../middlewares/auth";
interface dataRequest {
  params?: any;
  data?: any;
}
interface ResponseData {
  status?: string;
  message?: string;
  data?: any;
}
export class Router {
  token: string;
  path: string;
  data: dataRequest;
  constructor(token: string,path: string,data: dataRequest){
    this.token = token;
    this.path = path;
    this.data = data;
  }
  async Root() {
    let result: ResponseData = { status: "failed", message: "Page not Found" };
    if (!isAuthenticated(this.token)) {
      result.status = "failed";
      result.message = "Authorization token";
      return Response.json(result);
    }
    if (this.path === "/person/get-list") {
      result.status = "success";
      result.message = "get list data person success";
      result.data = await PersonController.prototype.getList();
      return Response.json(result);
    }
    if (this.path === "/person/get-row") {
      if (this.data.params && +this.data.params.id > 0) {
        result.status = "success";
        result.message = `get row data person id is ${this.data.params.id} success`;
        result.data = await PersonController.prototype.getRow(+this.data.params.id);
        return Response.json(result);
      } else {
        result.message = 'params id not exist';
        return Response.json(result);
      }
    }
    return Response.json(result);
  }
}

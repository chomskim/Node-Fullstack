import Axios from 'axios';
import { RestUrls } from './Urls';

export class RestDataSource {

    constructor(err_handler) {
        this.error_handler = err_handler || (() => {});
    }

    GetData = (dataType, params) =>
        this.SendRequest('get', RestUrls[dataType], params);

    SendRequest = (method, url, params, data) =>
        Axios.request({ method, url, params, data });
}

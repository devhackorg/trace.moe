// SPDX-License-Identifier: MIT
// Copyright (c) 2023 Allan Pereira <https://github.com/allanpereira99>
import type { IHttpClient } from '../interfaces/httpClient';
import HttpServiceBase from './httpServiceBase';
import type { HttpResponse } from '../interfaces/httpResponse';

export class HttpService implements HttpServiceBase {
  private _client: IHttpClient;
  constructor(cliente: IHttpClient) {
    this._client = cliente;
  }
  post(url: string, data?: any, config?: any): Promise<HttpResponse> {
    return new Promise((resolve) => {
      this._client.post(url, data, config).then(resolve);
    });
  }
}

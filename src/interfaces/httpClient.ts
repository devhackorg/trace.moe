// SPDX-License-Identifier: MIT
// Copyright (c) 2023 Allan Pereira <https://github.com/allanpereira99>

import type { HttpResponse } from './httpResponse';

export interface IHttpClient {
  post: (url: string, data: any, config?: any) => Promise<HttpResponse>;
}

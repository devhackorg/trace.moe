// SPDX-License-Identifier: MIT
// Copyright (c) 2023 Allan Pereira <https://github.com/allanpereira99>

import fs from 'fs';
import axios from 'axios';
import FormData from 'form-data';
import { HttpService } from './repositories/httpService';
import type IExtraOptions from './interfaces/extraOptions';
import type { ArgsGetAnime } from './interfaces/argsGetAnime';
import type IResponseData from './interfaces/responseData';

export const BASE_URL = 'https://api.trace.moe/search?';
export const formData: FormData = new FormData();
export const options: IExtraOptions = {
  timeout: 20000,
  headers: formData.getHeaders()
};
export function getAnime({
  path,
  anilistInfo
}: ArgsGetAnime): Promise<IResponseData> {
  const service: HttpService = new HttpService(axios);
  formData.append('image', fs.createReadStream(path));
  return new Promise((resolve) => {
    service
      .post(
        `${BASE_URL}${anilistInfo ? 'anilistInfo&' : ''}cutBorders`,
        formData,
        options
      )
      .then((res) => resolve(res.data));
  });
}

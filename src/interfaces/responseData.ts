// SPDX-License-Identifier: MIT
// Copyright (c) 2023 Allan Pereira <https://github.com/allanpereira99>
import type IResult from './result';

export default interface IResponseData {
  frameCount: number;
  error: string;
  result: Array<IResult>;
}

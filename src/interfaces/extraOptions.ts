// SPDX-License-Identifier: MIT
// Copyright (c) 2023 Allan Pereira <https://github.com/allanpereira99>

import type { Headers } from 'form-data';

export default interface IExtraOptions {
  timeout?: number;
  headers?: Headers;
}

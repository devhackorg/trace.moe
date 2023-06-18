// SPDX-License-Identifier: MIT
// Copyright (c) 2023 Allan Pereira <https://github.com/allanpereira99>

import type Title from './title';

export default interface IAnilist {
  id: number;
  idMal: number;
  title: Title;
  synonyms: Array<string>;
  isAdult: boolean;
}

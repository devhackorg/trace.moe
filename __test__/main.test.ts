import axios from 'axios';
import { join } from 'path';
import { createReadStream } from 'fs';

import { BASE_URL, formData, options, getAnime } from '../src/main';
import constants from './resources/constants.json';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;
const imagePath = join(__dirname, 'resources', 'example.jpg');
const response = { data: constants };

describe('getAnime', () => {
  test('Should be called', async () => {
    mockedAxios.post.mockResolvedValue(response);

    await getAnime({ path: imagePath, anilistInfo: true });

    expect(axios.post).toHaveBeenCalled();
  });

  test('Should be called with url', async () => {
    mockedAxios.post.mockResolvedValue(response);

    await getAnime({ path: imagePath, anilistInfo: false });

    formData.append('image', createReadStream(imagePath));

    expect(axios.post).toHaveBeenCalledWith(
      `${BASE_URL}anilistInfo&cutBorders`,
      formData,
      options
    );
  });

  test('Should return anime list', async () => {
    mockedAxios.post.mockResolvedValue(response);

    const result = await getAnime({ path: imagePath, anilistInfo: true });

    expect(result).toEqual(constants);
  });
});
